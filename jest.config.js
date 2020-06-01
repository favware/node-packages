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
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/packages/ytdl-prismplayer',
    '<rootDir>/packages/unescape',
    '<rootDir>/packages/ts-config/__tests__/index.ts'
  ]
};
