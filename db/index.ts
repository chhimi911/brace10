/**
 * BraceTEN is a static product-concept site and does not use a database.
 * Keeping this placeholder platform-neutral lets Vercel type-check the project
 * without pulling in the Cloudflare-only D1 runtime used by the original starter.
 */
export function getDb(): never {
  throw new Error("This site does not have a database connection configured.");
}
