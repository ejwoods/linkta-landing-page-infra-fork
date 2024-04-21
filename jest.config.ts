import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  // Using TypeScript preset to handle TypeScript files
  preset: 'ts-jest',

  // Load additional Jest setup configuration from a separate file
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Enable collection of test coverage statistics
  collectCoverage: true,

  // Specify the directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Define which coverage provider to use for code instrumentation
  coverageProvider: 'v8',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Define how TypeScript files should be transformed using ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

// Resolve module path aliases to ensure modules are correctly imported during tests
  moduleNameMapper: {
    // Handle module aliases (if you have them in your Next.js config)
    '^components/(.*)$': '<rootDir>/components/$1',
    '^public/(.*)$': '<rootDir>/public/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
