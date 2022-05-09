/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  displayName: 'ts-jest',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/__tests__/tsconfig.json'
    }
  },
  coveragePathIgnorePatterns: ['<rootDir>/packages/crypto/src/browser-safe-randombytes.ts']
};

export default config;
