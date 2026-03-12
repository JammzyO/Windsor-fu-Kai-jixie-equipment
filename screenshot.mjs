import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const dir = './temporary screenshots';
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

// Auto-increment filename
const existing = existsSync(dir)
  ? readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
  : [];
const nums = existing.map(f => parseInt(f.replace('screenshot-', '').replace(/(-.*)?\.png$/, ''))).filter(n => !isNaN(n));
const next = nums.length ? Math.max(...nums) + 1 : 1;
const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const filepath = join(dir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/User/.cache/puppeteer/chrome/win64-146.0.7680.31/chrome-win64/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
