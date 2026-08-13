/**
 * Rasterises scripts/branding/*.svg into the PNGs served from public/.
 * Run manually and commit the output; not part of `npm run build`.
 *
 *   node scripts/generate-icons.mjs
 *
 * The social card text needs DejaVu Sans (fonts-dejavu-core).
 * public/favicon.svg is hand-maintained, not generated here.
 */
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const branding = join(root, 'scripts', 'branding');
const out = join(root, 'public');

const targets = [
  { src: 'icon-square.svg', file: 'apple-touch-icon.png', size: 180 },
  { src: 'icon-square.svg', file: 'icon-192.png', size: 192 },
  { src: 'icon-square.svg', file: 'icon-512.png', size: 512 },
];

for (const { src, file, size } of targets) {
  await sharp(join(branding, src), { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(join(out, file));
  console.log(`${file}  ${size}x${size}`);
}

await sharp(join(branding, 'og-card.svg'), { density: 96 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(join(out, 'og-default.png'));
console.log('og-default.png  1200x630');
