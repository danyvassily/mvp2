#!/usr/bin/env node

import { promises as fs } from "fs";
import path from "path";

const TARGET_DIRS = ["app", "components", "lib", "data"];

function slugifySegment(segment) {
  if (!segment) return segment;
  const preserveUnderscore = segment.startsWith("_");
  const dotIndex = segment.lastIndexOf(".");
  let base = segment;
  let ext = "";
  if (dotIndex > 0) {
    base = segment.slice(0, dotIndex);
    ext = segment.slice(dotIndex).toLowerCase();
  }
  let slug = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  if (!slug) slug = "unnamed";
  if (preserveUnderscore) slug = `_${slug.replace(/^_+/, "")}`;
  return `${slug}${ext}`;
}

function normalizePath(rawPath) {
  const prefix = rawPath.startsWith("public/") ? "public/" : rawPath.startsWith("/") ? "/" : "";
  const pathBody = prefix ? rawPath.slice(prefix.length) : rawPath;
  const segments = pathBody.split("/").filter(Boolean);
  if (segments.length === 0) return rawPath;
  const normalized = segments.map((segment, index) => {
    // Conserver les placeholder [images-si-presentes]
    if (segment.startsWith("[") && segment.endsWith("]")) return segment;
    return slugifySegment(segment);
  });
  return `${prefix}${normalized.join("/")}`;
}

const PATH_PATTERNS = [
  /"(public\/(?:[^"\\]|\\.)+?)"/g,
  /"(\/(?:Page|page|PHOTOS-WEB-LASTOURS|PHOTOS|photos-web-lastours|ASSET|asset|fiche-technique|Fiche technique)[^"\\]*)"/g
];

async function processFile(filePath) {
  let content = await fs.readFile(filePath, "utf8");
  let updated = content;

  for (const pattern of PATH_PATTERNS) {
    updated = updated.replace(pattern, (match, pathGroup) => {
      const normalized = normalizePath(pathGroup);
      if (normalized === pathGroup) return match;
      return match.replace(pathGroup, normalized);
    });
  }

  if (updated !== content) {
    await fs.writeFile(filePath, updated, "utf8");
    return true;
  }
  return false;
}

async function processDirectory(dir) {
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
      count += await processDirectory(fullPath);
    } else if (/\.(tsx?|jsx?|json|md)$/i.test(entry.name)) {
      const changed = await processFile(fullPath);
      if (changed) count += 1;
    }
  }
  return count;
}

async function main() {
  let total = 0;
  for (const dir of TARGET_DIRS) {
    total += await processDirectory(path.join(process.cwd(), dir));
  }
  console.log(`✅ Chemins normalisés dans ${total} fichiers.`);
}

main().catch((error) => {
  console.error("❌ Erreur slugify-code-paths:", error);
  process.exit(1);
});
