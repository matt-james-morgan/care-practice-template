// Turns photos in /photos into fast, phone-friendly images in /public/images.
// Usage: drop JPG/PNG/HEIC/WebP files into /photos, then run `npm run images`.
// "My Hero Shot.jpg" becomes /images/my-hero-shot (use that path in site.config.ts).
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const inDir = path.join(root, "photos");
const outDir = path.join(root, "public", "images");
const widths = [640, 1200];

await mkdir(outDir, { recursive: true });
const files = (await readdir(inDir).catch(() => [])).filter((f) => /\.(jpe?g|png|webp|heic|heif|avif|tiff?)$/i.test(f));

if (files.length === 0) {
  console.log("No photos found. Put some in the /photos folder and run this again.");
  process.exit(0);
}

for (const file of files) {
  const name = path.parse(file).name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  for (const width of widths) {
    await sharp(path.join(inDir, file))
      .rotate() // respect phone camera orientation
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(path.join(outDir, `${name}-${width}.webp`));
  }
  console.log(`✓ ${file} → /images/${name}`);
}
