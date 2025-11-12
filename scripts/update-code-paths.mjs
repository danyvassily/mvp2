#!/usr/bin/env node

import { promises as fs } from "fs";
import path from "path";

const WORKSPACE_ROOT = process.cwd();
const TARGET_DIRECTORIES = ["app", "components", "lib", "data"];

function slugify(segment, { isFile }) {
  if (segment.startsWith(".")) return segment;

  let base = segment;
  let ext = "";

  if (isFile) {
    const dot = segment.lastIndexOf(".");
    if (dot !== -1) {
      base = segment.slice(0, dot);
      ext = segment.slice(dot).toLowerCase();
    }
  }

  const keepLeadingUnderscore = base.startsWith("_");

  let slug = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-");

  slug = slug.replace(/^-+|-+$/g, "");
  if (!slug) slug = "unnamed";

  slug = slug.toLowerCase();
  if (keepLeadingUnderscore) {
    slug = `_${slug.replace(/^_+/, "")}`;
  }

  return `${slug}${ext}`;
}

function normalizePathString(raw) {
  let prefix = "";
  let remainder = raw;

  if (raw.startsWith("public/")) {
    prefix = "public/";
    remainder = raw.slice(prefix.length);
  } else if (raw.startsWith("/")) {
    prefix = "/";
    remainder = raw.slice(1);
  }

  const segments = remainder.split("/");
  const normalized = segments.map((segment, index) => {
    if (!segment) return segment;
    const isFile = index === segments.length - 1 && segment.includes(".");
    return slugify(segment, { isFile });
  });

  return `${prefix}${normalized.join("/")}`;
}

const PATTERN_STRINGS = [
  "public/[Pp]age/[^\\r\\n\"'`]+",
  "/[Pp]age/[^\\r\\n\"'`]+",
  "public/photos-web-lastours/[^\\r\\n\"'`]+",
  "/photos-web-lastours/[^\\r\\n\"'`]+",
  "public/asset/[^\\r\\n\"'`]+",
  "/asset/[^\\r\\n\"'`]+"
];

const PATH_PATTERNS = PATTERN_STRINGS.map((pattern) => new RegExp(pattern, "g"));

async function processFile(filePath) {
  let content;
  try {
    content = await fs.readFile(filePath, "utf8");
  } catch {
    return { changed: false };
  }

  let updated = content;
  let changed = false;

  for (const pattern of PATH_PATTERNS) {
    updated = updated.replace(pattern, (match) => {
      const normalized = normalizePathString(match);
      if (normalized !== match) {
        changed = true;
        return normalized;
      }
      return match;
    });
  }

  if (changed) {
    await fs.writeFile(filePath, updated, "utf8");
  }

  return { changed };
}

async function walk(dir, results) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, results);
      continue;
    }

    if (!/\.(tsx?|jsx?|json|md)$/i.test(entry.name)) continue;

    const { changed } = await processFile(fullPath);
    if (changed) {
      results.changedFiles.push(path.relative(WORKSPACE_ROOT, fullPath));
    }
  }
}

async function main() {
  const results = { changedFiles: [] };

  for (const dir of TARGET_DIRECTORIES) {
    await walk(path.join(WORKSPACE_ROOT, dir), results);
  }

  if (results.changedFiles.length > 0) {
    console.log("✅ Chemins mis à jour dans :");
    for (const file of results.changedFiles) {
      console.log(`  - ${file}`);
    }
  } else {
    console.log("ℹ️  Aucun changement de chemin détecté.");
  }
}

main().catch((error) => {
  console.error("❌ Erreur dans update-code-paths:", error);
  process.exit(1);
});
