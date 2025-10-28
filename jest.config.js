const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },

  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  collectCoverage: true,

  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',

    '!src/**/*.d.ts',
    '!src/pages/_*.{js,jsx,ts,tsx}',
    '!src/app/layout.tsx',
    '!src/app/globals.css',
    '!src/**/styles.{js,ts}',
    '!src/lib/data/*',
    '!src/**/index.ts',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};

module.exports = createJestConfig(customJestConfig);
