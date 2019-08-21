import {
  chooseFormat, downloadFromInfo,
  filterFormats, getBasicInfo, getInfo,
  getURLVideoID, getVideoID,
  validateID, validateURL
} from '../src';

describe('ytdl-core validation', () => {
  test('should export chooseFormat', () => {
    expect(chooseFormat).toBeDefined();
    expect(chooseFormat).toBeInstanceOf(Function);
  });

  test('should export downloadFromInfo', () => {
    expect(downloadFromInfo).toBeDefined();
    expect(downloadFromInfo).toBeInstanceOf(Function);
  });

  test('should export filterFormats', () => {
    expect(filterFormats).toBeDefined();
    expect(filterFormats).toBeInstanceOf(Function);
  });

  test('should export getBasicInfo', () => {
    expect(getBasicInfo).toBeDefined();
    expect(getBasicInfo).toBeInstanceOf(Function);
  });

  test('should export getInfo', () => {
    expect(getInfo).toBeDefined();
    expect(getInfo).toBeInstanceOf(Function);
  });

  test('should export getURLVideoID', () => {
    expect(getURLVideoID).toBeDefined();
    expect(getURLVideoID).toBeInstanceOf(Function);
  });

  test('should export getVideoID', () => {
    expect(getVideoID).toBeDefined();
    expect(getVideoID).toBeInstanceOf(Function);
  });

  test('should export validateID', () => {
    expect(validateID).toBeDefined();
    expect(validateID).toBeInstanceOf(Function);
  });

  test('should export validateURL', () => {
    expect(validateURL).toBeDefined();
    expect(validateURL).toBeInstanceOf(Function);
  });
});