const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEach: [],
  setupFilesAfterEach: undefined,
  setupFilesAfterEach: undefined,
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEach: undefined,
  setupFilesAfterEach: undefined,
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEach: undefined,
};

module.exports = createJestConfig({
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEach: undefined,
  setupFiles: [],
  setupFilesAfterEach: undefined,
});
