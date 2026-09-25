import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  console.log('Starting PDF generation for PinkWalk slides...');

  const executablePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (!fs.existsSync(executablePath)) {
    throw new Error(`Chrome binary not found at ${executablePath}`);
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  const url = process.env.SLIDES_URL || 'http://localhost:8080/slides';
  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Emulate print media to render all 10 slides
  await page.emulateMediaType('print');

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const pdfPath = path.resolve(publicDir, 'pinkwalk-slides-2026.pdf');
  const rootPdfPath = path.resolve(__dirname, '../pinkwalk-slides-2026.pdf');

  console.log('Generating PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm'
    }
  });

  fs.copyFileSync(pdfPath, rootPdfPath);

  console.log(`PDF successfully generated at: ${pdfPath}`);
  console.log(`Root copy created at: ${rootPdfPath}`);

  await browser.close();
}

generatePDF().catch(err => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
