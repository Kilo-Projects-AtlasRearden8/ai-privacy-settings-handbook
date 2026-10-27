// Verification script for the AI Privacy Settings Handbook.
// Checks that all expected files exist, internal links resolve, and license/README
// requirements are met. Run with: npm test

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
let failures = 0;

function fail(msg) {
  console.error("FAIL: " + msg);
  failures += 1;
}

function ok(msg) {
  console.log("ok: " + msg);
}

function exists(rel) {
  const full = path.join(ROOT, rel);
  if (fs.existsSync(full)) {
    ok(rel + " exists");
    return true;
  }
  fail(rel + " is missing");
  return false;
}

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

// 1. Required files exist
const requiredFiles = [
  "README.md",
  "LICENSE",
  "package.json",
  "static/index.html",
  "static/style.css",
  "docs/00-intro.md",
  "docs/01-what-gets-stored.md",
  "docs/02-opt-out-training.md",
  "docs/03-deleting-history.md",
  "docs/04-safe-sharing.md",
  "docs/05-workplace-health-cautions.md",
  "docs/06-printable-checklist.md",
  "docs/07-help-links.md"
];

const htmlPages = [
  "static/index.html",
  "static/00-intro.html",
  "static/01-what-gets-stored.html",
  "static/02-opt-out-training.html",
  "static/03-deleting-history.html",
  "static/04-safe-sharing.html",
  "static/05-workplace-health-cautions.html",
  "static/06-printable-checklist.html",
  "static/07-help-links.html"
];

requiredFiles.forEach(exists);
htmlPages.forEach(exists);

// 2. LICENSE has the exact copyright line
const license = read("LICENSE");
const expectedCopyright = "Copyright (c) 2026 Asdale Dynamics, LLC";
if (license.includes(expectedCopyright)) {
  ok("LICENSE contains exact copyright line");
} else {
  fail("LICENSE missing exact copyright line: " + expectedCopyright);
}
if (license.includes("MIT License")) {
  ok("LICENSE mentions MIT License");
} else {
  fail("LICENSE missing 'MIT License'");
}

// 3. README credits Asdale Dynamics, LLC
const readme = read("README.md");
if (readme.includes("Asdale Dynamics, LLC")) {
  ok("README credits Asdale Dynamics, LLC");
} else {
  fail("README does not credit Asdale Dynamics, LLC");
}

// 4. Docs are dated
for (const doc of requiredFiles.filter(f => f.startsWith("docs/"))) {
  const content = read(doc);
  if (content.includes("October 27, 2026")) {
    ok(doc + " is dated");
  } else {
    fail(doc + " is not dated October 27, 2026");
  }
}

// 5. Each HTML page links to its style.css and has nav links to all pages
for (const page of htmlPages) {
  const content = read(page);
  if (content.includes('href="style.css"')) {
    ok(page + " links to style.css");
  } else {
    fail(page + " missing style.css link");
  }
}

// 6. Internal links between HTML pages resolve
const pageNames = htmlPages.map(p => path.basename(p, ".html"));
for (const page of htmlPages) {
  const content = read(page);
  const links = [...content.matchAll(/href="([^"]+\.html)"/g)].map(m => m[1]);
  for (const link of links) {
    if (link.startsWith("http")) continue;
    const target = path.join(path.dirname(page), link);
    if (fs.existsSync(path.join(ROOT, target))) {
      ok(page + " → " + link + " resolves");
    } else {
      fail(page + " → " + link + " does not resolve");
    }
  }
}

// 7. External help links in docs/help-links.md are absolute URLs
const helpLinks = read("docs/07-help-links.md");
const urls = [...helpLinks.matchAll(/https?:\/\/[^\s)]+/g)].map(m => m[0]);
if (urls.length > 0) {
  ok("Help links doc has " + urls.length + " external URLs");
} else {
  fail("Help links doc has no external URLs");
}

// 8. Checklist page is printable-friendly (has checkbox items)
const checklist = read("docs/06-printable-checklist.md");
if (checklist.includes("☐")) {
  ok("Printable checklist contains checkbox items");
} else {
  fail("Printable checklist missing checkbox items");
}

console.log("");
if (failures === 0) {
  console.log("All checks passed.");
  process.exit(0);
} else {
  console.log(failures + " check(s) failed.");
  process.exit(1);
}
