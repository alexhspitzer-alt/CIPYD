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
  ...["geist-latin.woff2", "geist-mono-latin.woff2"].map((name) => [
    `assets/source/fonts/${name}.base64`,
    `app/fonts/${name}`,
  ]),
];

for (const [source, destination] of assets) {
  const encoded = await readFile(source, "utf8");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, Buffer.from(encoded.replace(/\s/g, ""), "base64"));
  console.log(`Generated ${basename(destination)}`);
}
