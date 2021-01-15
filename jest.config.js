const fs = require("fs");
const path = require("path");

// Use this instead of `paths.testsSetup` to avoid putting
// an absolute filename into configuration after ejecting.
// const setupTestsFile = fs.existsSync(paths.testsSetup)
//   ? `<rootDir>/src/setupTests.js`
//   : undefined;
const setupTestsFile = true;

module.exports = function () {
  const userSvelteConfig = getUserSvelteConfig();

  return {
    rootDir: ".",
    roots: ["<rootDir>/src"],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleDirectories: ["node_modules", "."],
  };
};

function getUserSvelteConfig() {
  const userSvelteConfigLoc = path.join(process.cwd(), "svelte.config.js");
  if (fs.existsSync(userSvelteConfigLoc)) {
    return require(userSvelteConfigLoc);
  }

  return {};
}
