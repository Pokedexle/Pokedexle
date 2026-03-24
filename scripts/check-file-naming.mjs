#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve(process.cwd(), 'src');
const ALLOWED_EXTENSIONS = new Set(['.ts', '.html', '.scss']);
const EXCLUDED_FILES = new Set([
    path.resolve(SRC_DIR, 'index.html'),
    path.resolve(SRC_DIR, 'main.ts'),
    path.resolve(SRC_DIR, 'styles.scss'),
]);

const SEGMENT_REGEX = /^[a-z0-9-]+$/;

function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...walk(fullPath));
        } else {
            files.push(fullPath);
        }
    }
    return files;
}

function isValidBaseName(baseName) {
    // Accept names like:
    // - pokemon-card
    // - pokemon-card.component
    // - pokemon-card.spec
    // - app.routes
    // - app.config
    const segments = baseName.split('.');
    if (segments.length === 0) {
        return false;
    }
    return segments.every((segment) => SEGMENT_REGEX.test(segment));
}

if (!fs.existsSync(SRC_DIR)) {
    console.error('Missing src/ directory.');
    process.exit(1);
}

const errors = [];
for (const filePath of walk(SRC_DIR)) {
    if (EXCLUDED_FILES.has(filePath)) {
        continue;
    }

    const ext = path.extname(filePath);
    if (!ALLOWED_EXTENSIONS.has(ext)) {
        continue;
    }

    const baseName = path.basename(filePath, ext);
    if (!isValidBaseName(baseName)) {
        errors.push(path.relative(process.cwd(), filePath));
    }
}

if (errors.length > 0) {
    console.error('Invalid file naming convention detected:');
    for (const file of errors) {
        console.error(` - ${file}`);
    }
    console.error('Expected kebab-case segments separated by dots if needed.');
    process.exit(1);
}

console.log('File naming check passed.');
