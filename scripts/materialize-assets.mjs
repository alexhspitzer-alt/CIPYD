import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname } from "node:path";

const assets = [
  ...[
    "chair-dogs.jpg",
    "dog-kiss.jpg",
    "floor-hangout.jpg",
    "hero-apollo.jpg",
    "paw-handshake.jpg",
    "rain-shake.jpg",
  ].map((name) => [`assets/source/photos/${name}.base64`, `public/photos/${name}`]),
  ["assets/source/photos/morgan-dogs-couch.webp.base64", "public/photos/morgan-dogs-couch.webp"],
  ["assets/source/photos/morgan-cat-chair.webp.base64", "public/photos/morgan-cat-chair.webp"],
  ["assets/source/photos/morgan-raincoat-walk.webp.base64", "public/photos/morgan-raincoat-walk.webp"],
  ...["geist-latin.woff2", "geist-mono-latin.woff2"].map((name) => [
    `assets/source/fonts/${name}.base64`,
    `app/fonts/${name}`,
  ]),
];

for (const [source, destination] of assets) {
  const contents = await readFile(source);
  await mkdir(dirname(destination), { recursive: true });
  const output = source.endsWith(".base64")
    ? Buffer.from(contents.toString().replace(/\s/g, ""), "base64")
    : contents;
  await writeFile(destination, output);
  console.log(`Generated ${basename(destination)}`);
}
