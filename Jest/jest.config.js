/** @type {import('jest').Config} */

module.exports = {
    rootDir: "../", // Set the root directory to the project root
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/Jest/jest.setup.ts"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
      "^.+\\.(ts|tsx)$": ["ts-jest", {
        tsconfig: {
          jsx: "react-jsx",
        },
      }],
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    testMatch: [
      "<rootDir>/Tests/**/*.(test|spec).(ts|tsx|js)"
    ],
  }
  