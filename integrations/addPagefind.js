import { loadEnv } from "vite";
import { execSync } from "child_process";

let env = {};

export default function addPagefind() {
  return {
    name: "addPagefind",
    hooks: {
      "astro:config:setup": ({ config }) => {
        env = loadEnv(config.mode, process.cwd(), "");
      },

      "astro:build:done": () => {
        if (env.NODE_ENV === "production") {
          if (env.ENABLE_SEARCH === "true") {
            try {
              console.log("Running Pagefind in production...");
              execSync("pagefind --site dist", { stdio: "inherit" });
            } catch (error) {
              console.error(
                "Error running Pagefind in production:",
                error.message,
              );
            }
          } else {
            console.log("Pagefind is disabled in production");
          }
        }
      },

      "astro:server:start": () => {
        if (env.ENABLE_SEARCH === "true") {
          try {
            console.log(
              "Search is enabled. Building the site and running Pagefind in dev mode...",
            );
            execSync(
              "astro build && pagefind --site dist --output-path ./public/pagefind",
              { stdio: "inherit" },
            );
          } catch (error) {
            console.error(
              "Error during build or running Pagefind in dev mode:",
              error.message,
            );
          }
        } else {
          console.log("Search is disabled in dev mode");
        }
      },
    },
  };
}
