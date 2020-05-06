module.exports = {
  displayName: 'ts-jest',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/__tests__/tsconfig.json'
    }
  }
};
