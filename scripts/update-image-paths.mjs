/**
 * update-image-paths.mjs
 * Replaces .jpg/.jpeg/.png references with .webp in all .tsx/.ts/.css files
 * Only updates paths under /images/ to avoid touching non-image files.
 *
 * Usage: node scripts/update-image-paths.mjs
 */

import { readdir, readFile, writeFile, stat } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Directories to scan for code files
const SCAN_DIRS = [
  join(ROOT, "app"),
  join(ROOT, "components"),
  join(ROOT, "lib"),
];

// File extensions to process
const CODE_EXTS = new Set([".tsx", ".ts", ".css", ".js", ".mjs"]);

// Regex: matches /images/...filename.jpg or .jpeg or .png
// Captures the extension so we can replace it with .webp
const IMAGE_PATH_RE = /(\/images\/[^\s"'`)]+?)\.(jpg|jpeg|png)(?=["'`\s)\\])/gi;

async function walk(dir) {
  let results = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        // Skip node_modules, .next, scripts themselves
        if (["node_modules", ".next", ".git", "scripts"].includes(entry.name)) continue;
        results.push(...(await walk(full)));
      } else if (CODE_EXTS.has(extname(entry.name).toLowerCase())) {
        results.push(full);
      }
    }
  } catch {
    // ignore unreadable dirs
  }
  return results;
}

async function processFile(filePath) {
  const original = await readFile(filePath, "utf-8");
  const updated = original.replace(IMAGE_PATH_RE, (_, path, ext) => {
    return `${path}.webp`;
  });

  if (original !== updated) {
    await writeFile(filePath, updated, "utf-8");
    // Count replacements
    const count = (original.match(IMAGE_PATH_RE) || []).length;
    const rel = filePath.replace(ROOT, "").replace(/\\/g, "/");
    console.log(`  ✅  ${rel.padEnd(70)} (${count} replacement${count > 1 ? "s" : ""})`);
    return count;
  }
  return 0;
}

async function main() {
  console.log("🔄 Update Image Paths (.jpg/.png → .webp)\n");

  let allFiles = [];
  for (const dir of SCAN_DIRS) {
    allFiles.push(...(await walk(dir)));
  }

  // Also scan root-level files
  const rootFiles = await readdir(ROOT, { withFileTypes: true });
  for (const entry of rootFiles) {
    if (!entry.isDirectory() && CODE_EXTS.has(extname(entry.name).toLowerCase())) {
      allFiles.push(join(ROOT, entry.name));
    }
  }

  console.log(`   Scanning ${allFiles.length} file(s)...\n`);

  let totalReplacements = 0;
  let filesChanged = 0;

  for (const file of allFiles) {
    const count = await processFile(file);
    if (count > 0) {
      totalReplacements += count;
      filesChanged++;
    }
  }

  console.log("\n─────────────────────────────────────────────");
  console.log(`   Files changed  : ${filesChanged}`);
  console.log(`   Total replaced : ${totalReplacements} path(s)`);
  console.log("─────────────────────────────────────────────\n");
  console.log("✅ Done! Verify the site builds correctly with: npm run build");
}

main().catch(console.error);
