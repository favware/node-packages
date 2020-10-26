module.exports = {
  displayName: 'ts-jest',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testMatch: ['<rootDir>/packages/**/__tests__/*.test.ts', '<rootDir>/packages/**/__tests__/*.test.js'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.base.json'
    }
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/ts-config/__tests__/index.ts',
    '<rootDir>/packages/crypto/src/browser-safe-randombytes.ts'
  ]
};
