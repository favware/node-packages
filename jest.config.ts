import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
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
  coveragePathIgnorePatterns: ['<rootDir>/packages/crypto/src/browser-safe-randombytes.ts']
});
