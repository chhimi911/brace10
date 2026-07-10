import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("build output and BraceTEN source assets are present", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    access(new URL("../.next/BUILD_ID", import.meta.url)),
    access(new URL("../public/images/braceten-hero-concept.png", import.meta.url)),
    access(new URL("../public/images/braceten-exploded-concept.png", import.meta.url)),
  ]);

  assert.match(page, /BraceTEN/);
  assert.match(page, /Prototype Vision/);
  assert.match(page, /Original Concept/);
  assert.match(page, /hero-scan/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /heroFloat/);
});
