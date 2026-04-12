/**
 * convert-to-webp.mjs
 * Converts all .jpg/.jpeg/.png images in /public to .webp versions
 * using sharp. Originals are kept (safe to run multiple times).
 *
 * Usage: node scripts/convert-to-webp.mjs
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC_IMAGES = join(ROOT, "public", "images");

const SUPPORTED = new Set([".jpg", ".jpeg", ".png"]);

// Quality settings
const WEBP_QUALITY = 82; // good balance: quality vs file size

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function convert(filePath) {
  const ext = extname(filePath).toLowerCase();
  const webpPath = filePath.slice(0, -ext.length) + ".webp";

  try {
    const inputStat = await stat(filePath);

    // Skip if webp already exists and is newer than source
    try {
      const outputStat = await stat(webpPath);
      if (outputStat.mtimeMs >= inputStat.mtimeMs) {
        console.log(`  ⏭  SKIP  ${basename(webpPath)} (up to date)`);
        return { skipped: true };
      }
    } catch {
      // webp doesn't exist yet — proceed
    }

    await sharp(filePath).webp({ quality: WEBP_QUALITY }).toFile(webpPath);

    const outputStat = await stat(webpPath);
    const saving = (
      ((inputStat.size - outputStat.size) / inputStat.size) *
      100
    ).toFixed(1);

    console.log(
      `  ✅  ${basename(filePath).padEnd(45)} ${(inputStat.size / 1024).toFixed(0).padStart(6)} KB  →  ${(outputStat.size / 1024).toFixed(0).padStart(6)} KB  (${saving > 0 ? "-" : "+"}${Math.abs(saving)}%)`
    );
    return { saved: inputStat.size - outputStat.size };
  } catch (err) {
    console.error(`  ❌  ERROR  ${filePath}: ${err.message}`);
    return { error: true };
  }
}

async function main() {
  console.log("🔄 WebP Conversion Script\n");
  console.log(`   Source: ${PUBLIC_IMAGES}\n`);

  const files = await walk(PUBLIC_IMAGES);
  console.log(`   Found ${files.length} image(s) to process\n`);

  let totalSaved = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    const result = await convert(file);
    if (result.skipped) skipped++;
    else if (result.error) errors++;
    else if (result.saved) totalSaved += result.saved;
  }

  console.log("\n─────────────────────────────────────────────");
  console.log(`   Processed : ${files.length - skipped - errors}`);
  console.log(`   Skipped   : ${skipped}`);
  console.log(`   Errors    : ${errors}`);
  console.log(
    `   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`
  );
  console.log("─────────────────────────────────────────────\n");
  console.log("✅ Done! Now update image paths in your code from .jpg/.png → .webp");
}

main().catch(console.error);
