// build.js — genera dist/ con las imágenes de raw/ optimizadas automáticamente.
// No hay que tocar este archivo para uso normal: solo soltar fotos nuevas en raw/.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const RAW_DIR = 'raw';
const DIST_DIR = 'dist';
const JPEG_QUALITY = 80;

// Reglas por carpeta de origen (dentro de raw/): controla tanto la optimización
// como dónde termina el archivo dentro de dist/img/.
//   outputSubfolder: '' significa que el contenido de esa carpeta se aplana
//   directo en dist/img/ (sin subcarpeta) — así calzan con las rutas que ya
//   usa index.html, tipo img/logo-codipapel.png en vez de img/logos/logo-codipapel.png.
const FOLDER_RULES = {
  logos: { maxWidth: 400, pngColors: 128, outputSubfolder: '' },
  productos: { maxWidth: 900, pngColors: 256, outputSubfolder: 'productos' },
};
const DEFAULT_RULE = { maxWidth: 900, pngColors: 256, outputSubfolder: null }; // null = conservar estructura tal cual

// Archivos sueltos en la raíz que van tal cual a dist/ (no son imágenes a optimizar)
const ROOT_FILES = ['index.html', 'robots.txt', 'sitemap.xml', 'og-image.png'];

function log(msg) {
  console.log(`[build] ${msg}`);
}

function ruleForTopFolder(topFolder) {
  return FOLDER_RULES[topFolder] || DEFAULT_RULE;
}

async function optimizeImage(srcPath, destPath, rule) {
  const ext = path.extname(srcPath).toLowerCase();
  const before = fs.statSync(srcPath).size;

  if (ext === '.svg') {
    fs.copyFileSync(srcPath, destPath);
    log(`${srcPath} -> copiado tal cual (SVG, ${(before / 1024).toFixed(0)}KB)`);
    return;
  }

  let pipeline = sharp(srcPath).resize({
    width: rule.maxWidth,
    withoutEnlargement: true, // nunca agranda una imagen más chica que el máximo
  });

  if (ext === '.png') {
    pipeline = pipeline.png({
      palette: true,
      colors: rule.pngColors,
      compressionLevel: 9,
    });
  } else if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else {
    fs.copyFileSync(srcPath, destPath);
    log(`${srcPath} -> copiado sin optimizar (extensión no soportada)`);
    return;
  }

  await pipeline.toFile(destPath);
  const after = fs.statSync(destPath).size;
  const savedPct = (100 * (1 - after / before)).toFixed(0);
  log(`${srcPath} -> ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (-${savedPct}%)`);
}

async function processDir(srcDir, destDir, rule) {
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await processDir(srcPath, destPath, rule);
    } else {
      await optimizeImage(srcPath, destPath, rule);
    }
  }
}


async function build() {
  log('Limpiando dist/ ...');
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  fs.mkdirSync(DIST_DIR, { recursive: true });

  log('Copiando archivos raíz (HTML, robots.txt, sitemap.xml, og-image.png)...');
  for (const f of ROOT_FILES) {
    if (fs.existsSync(f)) {
      fs.copyFileSync(f, path.join(DIST_DIR, f));
    } else {
      console.warn(`[build] ADVERTENCIA: no se encontró ${f} en la raíz del repo.`);
    }
  }

  if (fs.existsSync(RAW_DIR)) {
    log(`Optimizando imágenes de ${RAW_DIR}/ -> ${DIST_DIR}/img/ ...`);
    const topEntries = fs.readdirSync(RAW_DIR, { withFileTypes: true });
    for (const entry of topEntries) {
      if (!entry.isDirectory()) continue; // solo procesamos subcarpetas conocidas
      const rule = ruleForTopFolder(entry.name);
      const outputSub = rule.outputSubfolder === null ? entry.name : rule.outputSubfolder;
      const destDir = path.join(DIST_DIR, 'img', outputSub);
      await processDir(path.join(RAW_DIR, entry.name), destDir, rule);
    }
  } else {
    console.warn(`[build] ADVERTENCIA: no existe la carpeta ${RAW_DIR}/, no se optimizó ninguna imagen.`);
  }

  log('Build completo. Contenido final en dist/:');
  listDir(DIST_DIR);
}

function listDir(dir, prefix = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      listDir(path.join(dir, entry.name), prefix + '  ');
    } else {
      const size = fs.statSync(path.join(dir, entry.name)).size;
      console.log(`${prefix}  ${entry.name} (${(size / 1024).toFixed(0)}KB)`);
    }
  }
}

build().catch((err) => {
  console.error('[build] ERROR:', err);
  process.exit(1);
});
