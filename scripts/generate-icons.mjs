import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Icon sizes for PWA
const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const FAVICON_SIZES = [16, 32, 48];

// Apple specific sizes
const APPLE_TOUCH_ICON_SIZE = 180;
const SPLASH_SCREENS = [
{ width: 1284, height: 2778 }, // iPhone 12 Pro Max
{ width: 1170, height: 2532 }, // iPhone 12 Pro
{ width: 1125, height: 2436 }, // iPhone X/XS
{ width: 828, height: 1792 },  // iPhone XR
{ width: 1242, height: 2688 }, // iPhone XS Max
{ width: 750, height: 1334 },  // iPhone 8
{ width: 1242, height: 2208 }, // iPhone 8 Plus
{ width: 640, height: 1136 },  // iPhone SE
];

const PUBLIC_DIR = join(__dirname, '../public');
const ASSETS_DIR = join(__dirname, '../src/assets');

async function ensureDir(dir) {
try {
    await fs.mkdir(dir, { recursive: true });
} catch (err) {
    if (err.code !== 'EEXIST') throw err;
}
}

async function generateIcons(sourceFile, outputPrefix, sizes) {
await ensureDir(join(PUBLIC_DIR, 'icons'));

for (const size of sizes) {
    const outputFile = join(PUBLIC_DIR, 'icons', `${outputPrefix}-${size}x${size}.png`);
    
    try {
    await sharp(sourceFile)
        .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputFile);
        
    console.log(`Generated ${outputFile}`);
    } catch (err) {
    console.error(`Error generating ${outputFile}:`, err);
    throw err;
    }
}
}

async function generateFavicon(sourceFile) {
const outputFile = join(PUBLIC_DIR, 'favicon.ico');
const pngFiles = [];

try {
    // Generate PNG files for each favicon size
    for (const size of FAVICON_SIZES) {
    const tempFile = join(PUBLIC_DIR, `temp-favicon-${size}.png`);
    await sharp(sourceFile)
        .resize(size, size)
        .png()
        .toFile(tempFile);
    pngFiles.push(tempFile);
    }

    // Combine PNGs into ICO
    const buffers = await Promise.all(
    pngFiles.map(file => sharp(file).toBuffer())
    );

    await fs.writeFile(outputFile, Buffer.concat(buffers));
    console.log(`Generated ${outputFile}`);

    // Clean up temp files
    await Promise.all(pngFiles.map(file => fs.unlink(file)));
} catch (err) {
    console.error('Error generating favicon:', err);
    throw err;
}
}

async function generateSplashScreens(sourceFile) {
await ensureDir(PUBLIC_DIR);

for (const { width, height } of SPLASH_SCREENS) {
    const outputFile = join(PUBLIC_DIR, `splash-${width}x${height}.png`);
    
    try {
    // Create a base image with brand color background
    const base = await sharp({
        create: {
        width,
        height,
        channels: 4,
        background: { r: 8, g: 145, b: 178, alpha: 1 }
        }
    }).png().toBuffer();

    // Prepare icon overlay
    const iconWidth = Math.min(width, height) * 0.4;  // Icon 40% of shortest dimension
    const iconBuffer = await sharp(sourceFile)
        .resize(Math.round(iconWidth), Math.round(iconWidth))
        .toBuffer();

    // Combine background and centered icon
    await sharp(base)
        .composite([{
        input: iconBuffer,
        gravity: 'center'
        }])
        .toFile(outputFile);

    console.log(`Generated ${outputFile}`);
    } catch (err) {
    console.error(`Error generating splash screen ${width}x${height}:`, err);
    throw err;
    }
}
}

async function generateScreenshot() {
const width = 1280;
const height = 720;
const screenshotFile = join(PUBLIC_DIR, 'app-screenshot.png');

try {
    // Create a placeholder screenshot with text
    const svg = Buffer.from(`
    <svg width="${width}" height="${height}">
        <rect width="100%" height="100%" fill="rgb(8, 145, 178)"/>
        <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="48" 
        fill="white" 
        text-anchor="middle"
        dominant-baseline="middle">
        App Screenshot Placeholder
        </text>
    </svg>
    `);

    await sharp(svg)
    .png()
    .toFile(screenshotFile);

    console.log(`Generated ${screenshotFile}`);
} catch (err) {
    console.error('Error generating screenshot:', err);
    throw err;
}
}

async function main() {
try {
    // Ensure output directories exist
    await ensureDir(PUBLIC_DIR);
    await ensureDir(join(PUBLIC_DIR, 'icons'));

    const iconSource = join(ASSETS_DIR, 'icon.svg');
    const maskableSource = join(ASSETS_DIR, 'icon-maskable.svg');

    // Generate all assets
    await Promise.all([
    generateIcons(iconSource, 'icon', ICON_SIZES),
    generateIcons(maskableSource, 'maskable-icon', ICON_SIZES),
    generateFavicon(iconSource),
    generateSplashScreens(iconSource),
    generateScreenshot(),
    ]);

    // Generate apple-touch-icon separately
    const appleTouchIcon = join(PUBLIC_DIR, 'apple-touch-icon.png');
    await sharp(iconSource)
    .resize(APPLE_TOUCH_ICON_SIZE, APPLE_TOUCH_ICON_SIZE)
    .png()
    .toFile(appleTouchIcon);
    
    console.log('All assets generated successfully');
} catch (err) {
    console.error('Error generating assets:', err);
    process.exit(1);
}
}

main();
