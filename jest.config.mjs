/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  displayName: 'ts-jest',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/packages/**/__tests__/*.test.ts', '<rootDir>/packages/**/__tests__/*.test.js'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.base.json'
    }
  },
  coveragePathIgnorePatterns: ['<rootDir>/packages/crypto/src/browser-safe-randombytes.ts'],
  reporters: ['default', 'github-actions']
};

export default config;
