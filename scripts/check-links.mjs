import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

const root = resolve(process.argv[2] ?? 'dist');
const origin = 'https://local.invalid';

if (!existsSync(root)) {
  console.error(`Build output not found: ${root}\nRun npm run build first.`);
  process.exit(1);
}

const htmlFiles = [];
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) visit(file);
    else if (entry.name.endsWith('.html')) htmlFiles.push(file);
  }
};
visit(root);

const cache = new Map();
const html = (file) => {
  if (!cache.has(file)) cache.set(file, readFileSync(file, 'utf8'));
  return cache.get(file);
};

const pageUrl = (file) => {
  const path = relative(root, file).split(sep).join('/');
  if (path === 'index.html') return '/';
  return `/${path.replace(/index\.html$/, '')}`;
};

const decodeAttribute = (value) =>
  value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");

const resolveLink = (raw, source) => {
  const value = decodeAttribute(raw.trim());
  if (!value || /^(mailto|tel|javascript|data):/i.test(value)) return null;

  const url = new URL(value, `${origin}${pageUrl(source)}`);
  if (url.origin !== origin) return null;

  const pathname = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  const base = resolve(root, pathname);
  if (base !== root && !base.startsWith(`${root}${sep}`)) return { error: 'escapes dist' };

  const candidates = [base, `${base}.html`, join(base, 'index.html')];
  const target = candidates.find((file) => existsSync(file) && statSync(file).isFile());
  if (!target) return { error: 'target does not exist' };

  return { target, fragment: decodeURIComponent(url.hash.slice(1)) };
};

const attribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}=(['"])(.*?)\\1`, 'i'));
  return match?.[2];
};

const redirectUrl = (file) => {
  for (const tag of html(file).match(/<meta\b[^>]*>/gi) ?? []) {
    if (attribute(tag, 'http-equiv')?.toLowerCase() !== 'refresh') continue;
    return attribute(tag, 'content')?.match(/^\s*\d+\s*;\s*url=(.+)$/i)?.[1] ?? null;
  }
  return null;
};

const ids = (file) =>
  new Set([...html(file).matchAll(/\bid=(['"])(.*?)\1/gi)].map((match) => match[2]));

const errors = [];
let links = 0;
let redirects = 0;

for (const source of htmlFiles) {
  const redirect = redirectUrl(source);
  if (redirect) {
    redirects += 1;
    const result = resolveLink(redirect, source);
    if (!result || result.error) {
      errors.push(`${pageUrl(source)} -> ${redirect}: redirect target does not exist`);
    } else if (redirectUrl(result.target)) {
      errors.push(`${pageUrl(source)} -> ${redirect}: redirect target is another redirect`);
    } else if (result.fragment && !ids(result.target).has(result.fragment)) {
      errors.push(`${pageUrl(source)} -> ${redirect}: redirect fragment does not exist`);
    }
    continue;
  }

  for (const match of html(source).matchAll(/\bhref=(['"])(.*?)\1/gi)) {
    const raw = match[2];
    const result = resolveLink(raw, source);
    if (!result) continue;
    links += 1;
    if (result.error) {
      errors.push(`${pageUrl(source)} -> ${raw}: ${result.error}`);
    } else if (result.fragment && result.target.endsWith('.html') && !ids(result.target).has(result.fragment)) {
      errors.push(`${pageUrl(source)} -> ${raw}: fragment does not exist`);
    }
  }
}

if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files, ${links} internal links and ${redirects} redirects.`);
