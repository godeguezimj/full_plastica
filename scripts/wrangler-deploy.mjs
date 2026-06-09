import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const args = process.argv.slice(2);
const configIndex = args.indexOf("--config");
const configFile = configIndex !== -1 ? args[configIndex + 1] : "wrangler.jsonc";
const passthroughArgs = args.filter(
  (arg, index) => arg !== "--config" && index !== configIndex + 1,
);

if (!existsSync(".wrangler/deploy/config.json")) {
  execSync("npm run build", { stdio: "inherit" });
}

if (configFile === "wrangler.jsonc") {
  // @cloudflare/vite-plugin writes .wrangler/deploy/config.json during build.
  // Wrangler only follows that redirect when the config is auto-discovered.
  execSync(`npx wrangler deploy ${passthroughArgs.join(" ")}`, { stdio: "inherit" });
} else {
  execSync(`npx wrangler deploy --config ${configFile} ${passthroughArgs.join(" ")}`, {
    stdio: "inherit",
  });
}
