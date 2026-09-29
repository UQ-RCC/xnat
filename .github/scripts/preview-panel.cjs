// Preview panel in the PR description, kept between two markers.

const START = '<!-- cloudflare-preview:start -->';
const END = '<!-- cloudflare-preview:end -->';
const SECTION = new RegExp(`${START}[\\s\\S]*?${END}`);

function alert(kind, heading, lines = []) {
  return [`> [!${kind}]`, `> **${heading}**`, ...(lines.length ? ['>', ...lines.map((l) => `> ${l}`)] : [])];
}

function pending(sha) {
  return alert('NOTE', `Preview deployment pending for \`${sha.substring(0, 7)}\``, [
    'This panel updates automatically when the Cloudflare previews finish building.',
  ]);
}

function result(previews, { sha, logs, commitUrl }) {
  const short = sha.substring(0, 7);
  const failed = previews.filter((p) => p.status !== 'success');
  const head = failed.length
    ? alert('CAUTION', `Preview deployment failed for ${failed.map((p) => p.site).join(', ')}`, [
        `[View workflow logs](${logs})`,
      ])
    : alert('IMPORTANT', 'Preview ready', [`[View workflow logs](${logs})`]);
  const rows = previews.map((p) =>
    p.status === 'success'
      ? `| ${p.site} | [Latest on branch](${p.branch}) | [\`${short}\`](${p.commit}) | ✅ Deployed |`
      : `| ${p.site} | | | ❌ Failed |`,
  );
  return [...head, '', `Commit [\`${short}\`](${commitUrl})`, '', '| Site | Branch | Commit | Status |', '| --- | --- | --- | --- |', ...rows];
}

async function update({ github, context }, lines) {
  const block = [START, ...lines, END].join('\n');
  const { owner, repo } = context.repo;
  const pull_number = context.payload.pull_request.number;
  // Re-read so edits made during the build are kept.
  const { data: pr } = await github.rest.pulls.get({ owner, repo, pull_number });
  const current = pr.body || '';
  const body = SECTION.test(current) ? current.replace(SECTION, block) : `${block}\n\n${current}`;
  if (body.replace(/\r\n/g, '\n') === current.replace(/\r\n/g, '\n')) return;
  await github.rest.pulls.update({ owner, repo, pull_number, body });
}

module.exports = { pending, result, update };
