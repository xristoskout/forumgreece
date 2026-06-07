const fs = require('fs');
const content = fs.readFileSync('lib/blog-data.ts', 'utf8');

const parts = content.split('slug:');
for (let i = 1; i < parts.length; i++) {
  const part = parts[i];
  const slugEnd = part.indexOf("'", part.indexOf("'") + 1);
  const slug = part.substring(part.indexOf("'") + 1, slugEnd);

  const titleMatch = part.match(/en: '([^']+)'/);
  if (!titleMatch) continue;

  const bodyStart = part.indexOf('en: `') + 5;
  const bodyEnd = part.indexOf('`,', bodyStart);
  if (bodyStart < 5 || bodyEnd < 0) continue;

  const body = part.substring(bodyStart, bodyEnd);

  const out = 'Title: ' + titleMatch[1] + '\nSlug: ' + slug + '\n\n' + body.trim();
  fs.writeFileSync('post' + i + '-en.md', out);
  console.log('post' + i + '-en.md saved (' + body.trim().split(/\s+/).length + ' words)');
}
