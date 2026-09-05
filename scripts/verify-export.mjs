import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const expectedFiles = [
  "out/index.html",
  "out/photos/morgan-dogs-couch.webp",
  "out/photos/hero-apollo.jpg",
  "out/photos/morgan-cat-chair.webp",
  "out/photos/rain-shake.jpg",
  "out/photos/paw-handshake.jpg",
  "out/photos/chair-dogs.jpg",
  "out/photos/dog-kiss.jpg",
  "out/photos/floor-hangout.jpg",
];

await Promise.all(expectedFiles.map((file) => access(file)));

const html = await readFile("out/index.html", "utf8");
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
assert.match(html, /Can I Pet Your Dog/i);
assert.match(html, /Flexible pet care in Durham, North Carolina/i);
assert.match(html, /More than 30 years caring for pets/i);
assert.match(html, /At Morgan’s home/i);
assert.match(html, new RegExp(`${basePath}/photos/morgan-dogs-couch\\.webp`));
assert.match(html, new RegExp(`${basePath}/photos/hero-apollo\\.jpg`));
assert.match(html, new RegExp(`${basePath}/photos/morgan-cat-chair\\.webp`));
if (basePath) assert.doesNotMatch(html, /src="\/photos\//);

console.log("Static export verified: homepage and local photo assets are present.");
