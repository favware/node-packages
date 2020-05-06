module.exports = {
  displayName: 'ts-jest',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testMatch: ['<rootDir>/packages/**/__tests__/*.test.ts', '<rootDir>/packages/**/__tests__/*.test.js'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.base.json'
    }
  }
};
