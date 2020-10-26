module.exports = {
  displayName: 'ts-jest',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/__tests__/tsconfig.json'
    }
  },
  coveragePathIgnorePatterns: ['<rootDir>/packages/crypto/src/browser-safe-randombytes.ts']
};
