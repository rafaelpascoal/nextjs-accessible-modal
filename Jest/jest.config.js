/** @type {import('jest').Config} */

module.exports = {
    rootDir: '../', // Set the root directory to the project root
    testEnvironment: 'jsdom', // Mock the DOM environment
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': "babel-jest", // Transform files with babel-jest
    },

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Map the @ alias to the src directory
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup files to run before the tests
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'], // Ignore node_modules and .next directory
};