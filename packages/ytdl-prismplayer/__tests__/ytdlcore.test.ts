import {
  chooseFormat, downloadFromInfo,
  filterFormats, getBasicInfo, getInfo,
  getURLVideoID, getVideoID,
  validateID, validateURL
} from '../src';

describe('ytdl-core validation', () => {
  test('should export chooseFormat', () => {
    expect(chooseFormat.toString()).toMatchSnapshot();
  });

  test('should export downloadFromInfo', () => {
    expect(downloadFromInfo.toString()).toMatchSnapshot();
  });

  test('should export filterFormats', () => {
    expect(filterFormats.toString()).toMatchSnapshot();
  });

  test('should export getBasicInfo', () => {
    expect(getBasicInfo.toString()).toMatchSnapshot();
  });

  test('should export getInfo', () => {
    expect(getInfo.toString()).toMatchSnapshot();
  });

  test('should export getURLVideoID', () => {
    expect(getURLVideoID.toString()).toMatchSnapshot();
  });

  test('should export getVideoID', () => {
    expect(getVideoID.toString()).toMatchSnapshot();
  });

  test('should export validateID', () => {
    expect(validateID.toString()).toMatchSnapshot();
  });

  test('should export validateURL', () => {
    expect(validateURL.toString()).toMatchSnapshot();
  });
});