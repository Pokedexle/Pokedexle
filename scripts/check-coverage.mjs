#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const COVERAGE_DIR = path.resolve(process.cwd(), "coverage");
const THRESHOLDS = {
    lines: Number(process.env.COVERAGE_LINES ?? "80"),
    branches: Number(process.env.COVERAGE_BRANCHES ?? "70"),
    functions: Number(process.env.COVERAGE_FUNCTIONS ?? "80"),
};

function findLcovFiles(dir) {
    if (!fs.existsSync(dir)) {
        return [];
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...findLcovFiles(fullPath));
            continue;
        }
        if (entry.isFile() && entry.name === "lcov.info") {
            files.push(fullPath);
        }
    }

    return files;
}

function parseLcov(content) {
    let lineTotal = 0;
    let lineCovered = 0;
    let branchTotal = 0;
    let branchCovered = 0;
    let functionTotal = 0;
    let functionCovered = 0;

    for (const rawLine of content.split("\n")) {
        const line = rawLine.trim();
        if (line.startsWith("DA:")) {
            lineTotal += 1;
            const hits = Number(line.split(",")[1] ?? "0");
            if (hits > 0) {
                lineCovered += 1;
            }
            continue;
        }
        if (line.startsWith("BRF:")) {
            branchTotal += Number(line.slice(4) || "0");
            continue;
        }
        if (line.startsWith("BRH:")) {
            branchCovered += Number(line.slice(4) || "0");
            continue;
        }
        if (line.startsWith("FNF:")) {
            functionTotal += Number(line.slice(4) || "0");
            continue;
        }
        if (line.startsWith("FNH:")) {
            functionCovered += Number(line.slice(4) || "0");
        }
    }

    return {
        lines: { covered: lineCovered, total: lineTotal },
        branches: { covered: branchCovered, total: branchTotal },
        functions: { covered: functionCovered, total: functionTotal },
    };
}

function toPercent(covered, total) {
    if (total === 0) {
        return 100;
    }
    return (covered / total) * 100;
}

const lcovFiles = findLcovFiles(COVERAGE_DIR);
if (lcovFiles.length === 0) {
    console.error("No lcov.info found. Run tests with coverage before this check.");
    process.exit(1);
}

const merged = {
    lines: { covered: 0, total: 0 },
    branches: { covered: 0, total: 0 },
    functions: { covered: 0, total: 0 },
};

for (const file of lcovFiles) {
    const data = parseLcov(fs.readFileSync(file, "utf8"));
    merged.lines.covered += data.lines.covered;
    merged.lines.total += data.lines.total;
    merged.branches.covered += data.branches.covered;
    merged.branches.total += data.branches.total;
    merged.functions.covered += data.functions.covered;
    merged.functions.total += data.functions.total;
}

const report = {
    lines: toPercent(merged.lines.covered, merged.lines.total),
    branches: toPercent(merged.branches.covered, merged.branches.total),
    functions: toPercent(merged.functions.covered, merged.functions.total),
};

console.log(
    [
        `Coverage lines: ${report.lines.toFixed(2)}% (threshold ${THRESHOLDS.lines}%)`,
        `Coverage branches: ${report.branches.toFixed(2)}% (threshold ${THRESHOLDS.branches}%)`,
        `Coverage functions: ${report.functions.toFixed(2)}% (threshold ${THRESHOLDS.functions}%)`,
    ].join("\n"),
);

const failed = [];
if (report.lines < THRESHOLDS.lines) failed.push("lines");
if (report.branches < THRESHOLDS.branches) failed.push("branches");
if (report.functions < THRESHOLDS.functions) failed.push("functions");

if (failed.length > 0) {
    console.error(`Coverage check failed for: ${failed.join(", ")}`);
    process.exit(1);
}

console.log("Coverage check passed.");

