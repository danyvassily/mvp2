#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';

const WORKSPACE_ROOT = process.cwd();
const PUBLIC_ROOT = path.join(WORKSPACE_ROOT, 'public');
const CODE_DIRECTORIES = ['app', 'components', 'lib', 'data'];
const SKIP_NAMES = new Set(['.DS_Store', '.gitkeep']);

function slugify(name, { isFile }) {
  if (name.startsWith('.')) return name;

  let base = name;
  let ext = '';

  if (isFile) {
    const dot = name.lastIndexOf('.');
    if (dot !== -1) {
      base = name.slice(0, dot);
      ext = name.slice(dot).toLowerCase();
    }
  }

  const keepLeadingUnderscore = base.startsWith('_');

  let slug = base
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-');

  slug = slug.replace(/^-+|-+$/g, '');
  if (!slug) slug = 'unnamed';

  slug = slug.toLowerCase();
  if (keepLeadingUnderscore) {
    slug = `_${slug.replace(/^_+/, '')}`;
  }

  return `${slug}${ext}`;
}

async function exists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function uniqueName(dir, desired, { isFile }) {
  let candidate = desired;
  let counter = 1;
  let base = desired;
  let ext = '';

  if (isFile) {
    const dot = desired.lastIndexOf('.');
    if (dot !== -1) {
      base = desired.slice(0, dot);
      ext = desired.slice(dot);
    }
  }

  while (await exists(path.join(dir, candidate))) {
    const suffix = `-${counter}`;
    candidate = isFile ? `${base}${suffix}${ext}` : `${base}${suffix}`;
    counter += 1;
  }

  return candidate;
}

function relativePublicPath(fullPath) {
  return path.relative(PUBLIC_ROOT, fullPath).replace(/\\/g, '/');
}

async function walk(dir, mappings) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (SKIP_NAMES.has(entry.name)) continue;

    const sourcePath = path.join(dir, entry.name);
    const isFile = entry.isFile();

    const slugged = slugify(entry.name, { isFile });
    let targetPath = sourcePath;

    if (slugged !== entry.name) {
      const desired = await uniqueName(dir, slugged, { isFile });
      targetPath = path.join(dir, desired);
      await fs.rename(sourcePath, targetPath);

      const fromRel = relativePublicPath(sourcePath);
      const toRel = relativePublicPath(targetPath);

      mappings.add(`/${fromRel} -> /${toRel}`);
      mappings.add(`public/${fromRel} -> public/${toRel}`);
    }

    if (entry.isDirectory()) {
      await walk(targetPath, mappings);
    }
  }
}

function parseMappings(set) {
  const pairs = [];
  for (const entry of set) {
    const [from, to] = entry.split(' -> ');
    pairs.push({ from, to });
  }
  return pairs
    .filter(({ from, to }) => from !== to)
    .sort((a, b) => b.from.length - a.from.length);
}

async function replaceInFile(filePath, replacements) {
  let content;
  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch {
    return;
  }

  let updated = content;
  for (const { from, to } of replacements) {
    if (updated.includes(from)) {
      updated = updated.split(from).join(to);
    }
  }

  if (updated !== content) {
    await fs.writeFile(filePath, updated, 'utf8');
  }
}

async function replaceInDirectory(dir, replacements) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await replaceInDirectory(fullPath, replacements);
      continue;
    }

    if (!/\.(tsx?|jsx?|json|md)$/i.test(entry.name)) continue;
    await replaceInFile(fullPath, replacements);
  }
}

async function updateCode(mappingSet) {
  const replacements = parseMappings(mappingSet);
  if (replacements.length === 0) return;

  for (const dir of CODE_DIRECTORIES) {
    await replaceInDirectory(path.join(WORKSPACE_ROOT, dir), replacements);
  }

  const outputPath = path.join(WORKSPACE_ROOT, 'scripts', 'normalized-paths.json');
  await fs.writeFile(outputPath, JSON.stringify(replacements, null, 2), 'utf8');
  console.log(`📝 Mapping écrit dans ${outputPath}`);
}

async function main() {
  console.log('🔄 Normalisation recursive dans public/ ...');
  const mappingSet = new Set();
  await walk(PUBLIC_ROOT, mappingSet);

  console.log(`➡️  ${mappingSet.size} chemins renommés.`);

  await updateCode(mappingSet);
  console.log('✅ Normalisation terminée.');
}

main().catch((error) => {
  console.error('❌ Erreur dans normalize-assets:', error);
  process.exit(1);
});
