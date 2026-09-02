import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const publicDir = path.resolve(process.cwd(), ".output/public");
const serverDir = path.resolve(process.cwd(), ".output/server");
const assetsDir = path.join(publicDir, "assets");

if (!fs.existsSync(publicDir)) {
  console.error(".output/public directory does not exist! Run build first.");
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
const indexJsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));

console.log("Found CSS asset:", cssFile);
console.log("Found Index JS asset:", indexJsFile);

let manifest = { routes: {} };

const serverFiles = fs.existsSync(serverDir) ? fs.readdirSync(serverDir) : [];
const manifestFileName = serverFiles.find((f) => f.includes("tanstack-start-manifest") && f.endsWith(".mjs"));

if (manifestFileName) {
  const manifestPath = path.join(serverDir, manifestFileName);
  try {
    const mod = await import(pathToFileURL(manifestPath).href);
    if (typeof mod.tsrStartManifest === "function") {
      manifest = mod.tsrStartManifest();
      console.log("Loaded build manifest from", manifestFileName);
    }
  } catch (err) {
    console.warn("Could not import manifest, using fallback:", err);
  }
}

if (!manifest.routes || Object.keys(manifest.routes).length === 0) {
  const routesJsFile = files.find((f) => f.startsWith("routes-") && f.endsWith(".js"));
  const pastEventJsFile = files.find((f) => f.startsWith("past-event-") && f.endsWith(".js"));
  const registerJsFile = files.find((f) => f.startsWith("register-") && f.endsWith(".js"));

  manifest = {
    routes: {
      __root__: {
        filePath: "src/routes/__root.tsx",
        children: ["/", "/past-event", "/register"],
        preloads: indexJsFile ? [`/assets/${indexJsFile}`] : [],
        scripts: indexJsFile ? [{ attrs: { type: "module", async: true, src: `/assets/${indexJsFile}` } }] : []
      },
      "/": {
        filePath: "src/routes/index.tsx",
        preloads: routesJsFile ? [`/assets/${routesJsFile}`] : []
      },
      "/past-event": {
        filePath: "src/routes/past-event.tsx",
        preloads: pastEventJsFile ? [`/assets/${pastEventJsFile}`] : []
      },
      "/register": {
        filePath: "src/routes/register.tsx",
        preloads: registerJsFile ? [`/assets/${registerJsFile}`] : []
      }
    }
  };
}

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
  <body>
    <div id="root"></div>
    <script>
      window.$_TSR = {
        h: function() { this.hydrated = true; },
        e: function() { this.streamEnded = true; },
        c: function() {},
        p: function(script) { script(); },
        buffer: [],
        router: {
          manifest: ${JSON.stringify(manifest)},
          dehydratedData: {},
          matches: [
            { i: '__root__', s: 'success', ssr: false },
            { i: '/', s: 'success', ssr: false }
          ],
          lastMatchId: '/'
        }
      };
    </script>
    ${indexJsFile ? `<script type="module" src="/assets/${indexJsFile}"></script>` : ""}
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent);
fs.writeFileSync(path.join(publicDir, "404.html"), htmlContent);
console.log("Successfully generated index.html and 404.html in .output/public!");
