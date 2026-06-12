#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getStagedFiles() {
  try {
    const out = execSync('git diff --cached --name-only --diff-filter=ACMRT', { encoding: 'utf8' });
    return out.split(/\r?\n/).filter(Boolean);
  } catch (e) {
    console.error('Could not determine staged files:', e.message);
    process.exit(2);
  }
}

const staged = getStagedFiles();
if (staged.length === 0) {
  console.log('No staged files to validate.');
  process.exit(0);
}

// Prevent accidentally committing node_modules
const nodeModulesStaged = staged.filter(f => /(^|\\/)node_modules(\\/|$)/.test(f));
if (nodeModulesStaged.length) {
  console.error('ERROR: Detected node_modules paths in staged files (do not commit node_modules):');
  nodeModulesStaged.forEach(f => console.error('  ' + f));
  process.exit(1);
}

// Fail if any staged file is larger than 5MB
const MAX_BYTES = 5 * 1024 * 1024;
const largeFiles = [];
for (const f of staged) {
  try {
    const full = path.resolve(f);
    const stats = fs.statSync(full);
    if (stats.isFile() && stats.size > MAX_BYTES) largeFiles.push({ file: f, size: stats.size });
  } catch (e) {
    // ignore files that no longer exist on disk (deleted)
  }
}

if (largeFiles.length) {
  console.error('ERROR: Large files staged (>5MB):');
  largeFiles.forEach(l => console.error(`  ${l.file} — ${(l.size / (1024*1024)).toFixed(2)} MB`));
  process.exit(1);
}

console.log('Staged files validation passed.');
process.exit(0);
