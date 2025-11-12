#!/usr/bin/env node

import { promises as fs } from "fs";
import path from "path";

const WORKSPACE_ROOT = process.cwd();
const MAPPING_PATH = path.join(WORKSPACE_ROOT, "scripts", "normalized-paths.json");
const TARGET_DIRS = ["app", "components", "lib", "data"];

function expandMapping({ from, to }) {
  const variants = new Set([from]);
  if (from.includes("/page/")) {
    variants.add(from.replace(/\/page\//g, "/Page/"));
  }
  if (from.includes("public/page/")) {
    variants.add(from.replace(/public\/page\//g, "public/Page/"));
  }
  if (from.includes("/photos-web-lastours/")) {
    variants.add(from.replace(/\/photos-web-lastours\//g, "/PHOTOS-WEB-LASTOURS/"));
  }
  if (from.includes("public/photos-web-lastours/")) {
    variants.add(from.replace(/public\/photos-web-lastours\//g, "public/PHOTOS-WEB-LASTOURS/"));
  }
  if (from.includes("/asset/")) {
    variants.add(from.replace(/\/asset\//g, "/ASSET/"));
  }
  if (from.includes("public/asset/")) {
    variants.add(from.replace(/public\/asset\//g, "public/ASSET/"));
  }
  if (from.includes("/fiche-technique/")) {
    variants.add(from.replace(/\/fiche-technique\//g, "/Fiche technique/"));
  }
  if (from.includes("public/fiche-technique/")) {
    variants.add(from.replace(/public\/fiche-technique\//g, "public/Fiche technique/"));
  }
  return Array.from(variants).map((variant) => ({ from: variant, to }));
}

async function replaceInFile(filePath, replacements) {
  let content;
  try {
    content = await fs.readFile(filePath, "utf8");
  } catch {
    return false;
  }

  let updated = content;
  for (const { from, to } of replacements) {
    if (updated.includes(from)) {
      updated = updated.split(from).join(to);
    }
  }

  if (updated !== content) {
    await fs.writeFile(filePath, updated, "utf8");
    return true;
  }
  return false;
}

async function processDirectory(dir, replacements) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return 0;
  }

  let count = 0;
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += await processDirectory(fullPath, replacements);
    } else if (/\.(tsx?|jsx?|json|md)$/i.test(entry.name)) {
      const changed = await replaceInFile(fullPath, replacements);
      if (changed) count += 1;
    }
  }
  return count;
}

async function main() {
  const mappingRaw = await fs.readFile(MAPPING_PATH, "utf8");
  const mappings = JSON.parse(mappingRaw);

  const expanded = mappings.flatMap(expandMapping);
  const replacements = expanded.sort((a, b) => b.from.length - a.from.length);

  let total = 0;
  for (const dir of TARGET_DIRS) {
    total += await processDirectory(path.join(WORKSPACE_ROOT, dir), replacements);
  }

  console.log(`✅ Mise à jour de ${total} fichiers avec les nouveaux chemins.`);
}

main().catch((error) => {
  console.error("❌ Erreur apply-mappings:", error);
  process.exit(1);
});
