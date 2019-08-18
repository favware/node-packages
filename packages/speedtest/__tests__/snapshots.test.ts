import speedtest, {eventemitter, roundNumber, speedtest as NamedSpeedtest} from '../src';

describe('Snapshot Testing', () => {
  test('speedtest should match snapshot', () => {
    expect(speedtest).toMatchSnapshot();
  });

  test('eventemitter should match snapshot', () => {
    expect(eventemitter).toMatchSnapshot();
  });

  test('roundNumber should match snapshot', () => {
    expect(roundNumber).toMatchSnapshot();
  });

  test('NamedSpeedtest should match snapshot', () => {
    expect(NamedSpeedtest).toMatchSnapshot();
  });
});