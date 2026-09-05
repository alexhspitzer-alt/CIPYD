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
  ["file_00000000a6e081f5a8a5a8b9dc1ddfda.png", "public/photos/morgan-dogs-couch.png"],
  ["file_0000000002e881f59749ade704468c5b.png", "public/photos/morgan-cat-chair.png"],
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
