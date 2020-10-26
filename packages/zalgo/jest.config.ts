import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  displayName: 'ts-jest',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/__tests__/tsconfig.json'
    }
  }
});
