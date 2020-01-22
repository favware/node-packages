import YAML from 'js-yaml';
import readYaml from '../src';
import path from 'path';

const fixturesDir = path.join(__dirname, '..', '__fixtures__');

test('it should read the yaml file asynchronously', () => {
  const actual = readYaml(path.resolve(fixturesDir, 'passer.yml'));
  expect(actual).toMatchObject({ foo: { bar: 'baz', qux: true } });
});

test('it should support options', () => {
  const actual = readYaml(path.resolve(fixturesDir, 'passer.yml'), { schema: YAML.FAILSAFE_SCHEMA });
  expect(actual).toMatchObject({ foo: { bar: 'baz', qux: 'true' } });
});

test('it should fail when it cannot parse the file as YAML', () => {
  expect(() => {
    readYaml(path.resolve(fixturesDir, 'failer.js'));
  }).toThrow('It looks like the supplied file was not a valid YAML file!');
});

test('it should fail when it cannot read the file', () => {
  expect(() => {
    readYaml(path.resolve(fixturesDir, 'nonexistant.js'));
  }).toThrow('You supplied a file that was not found, please check your file path');
});
