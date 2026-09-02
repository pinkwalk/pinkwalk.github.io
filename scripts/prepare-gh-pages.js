import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(process.cwd(), ".output/public");
const assetsDir = path.join(publicDir, "assets");

if (!fs.existsSync(publicDir)) {
  console.error(".output/public directory does not exist! Run build first.");
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));

console.log("Found CSS asset:", cssFile);
console.log("Found JS asset:", jsFile);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>PinkWalk 2026 — Breast Cancer Awareness Walk, Kathmandu</title>
    <meta name="description" content="PinkWalk is a community breast cancer awareness walk in Kathmandu Valley. Basantapur to Mangal Bazar." />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
  </head>
    <script>
      window.$_TSR = {
        h: function() { this.hydrated = true; },
        e: function() { this.streamEnded = true; },
        c: function() {},
        p: function(script) { script(); },
        buffer: [],
        router: {
          manifest: {},
          dehydratedData: {},
          matches: []
        }
      };
    </script>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent);
fs.writeFileSync(path.join(publicDir, "404.html"), htmlContent);
console.log("Successfully generated index.html and 404.html in .output/public");
