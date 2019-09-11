import { SpeedtestServerConfig, speedtestClientConfig } from './types';

/** Generates a random IP address */
const randomIp = (): string => {
  const min = 10;
  const max = 255;
  const group1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const group2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const group3 = Math.floor(Math.random() * (max - min + 1)) + min;
  const group4 = Math.floor(Math.random() * (max - min + 1)) + min;

  return `${group1}.${group2}.${group3}.${group4}`;
};

/** Resolves a platform from the process to a human readable format */
const fetchPlatform = (platform: 'win32' | 'darwin' | string) => {
  switch (platform) {
    case 'win32':
      return 'Windows';
    case 'darwin':
      return 'MacOS';
    default:
      return 'Linux';
  }
};

/** Fallback speedtest server data */
export const baseServerData: SpeedtestServerConfig[] = [
  {
    url: 'http://ams.host.speedtest.net:8080/speedtest/upload.php',
    lat: '52.3667',
    lon: '4.9000',
    name: 'Amsterdam',
    country: 'Netherlands',
    cc: 'NL',
    sponsor: 'Speedtest.net',
    id: '10389',
    url2: 'http://ams2.speedtest.net/speedtest/upload.php',
    host: 'ams.host.speedtest.net:8080',
    dist: 511.994,
    distMi: 0.318,
    bestPing: 3600,
  }
];

/** Fallback speedtest client configuration */
export const baseClientData: speedtestClientConfig = {
  client: {
    ip: randomIp(),
    lat: '52.3702',
    lon: '4.8951',
    isp: 'KPN',
    isprating: '3.7',
    rating: '0',
    ispdlavg: '0',
    ispulavg: '0',
    loggedin: '0',
    country: 'NL',
  },
  times: {
    dl1: '5000000',
    dl2: '35000000',
    dl3: '800000000',
    ul1: '1000000',
    ul2: '8000000',
    ul3: '35000000',
  },
  download: {
    testlength: '10',
    initialtest: '250K',
    mintestsize: '250K',
    threadsperurl: '4',
  },
  upload: {
    testlength: '10',
    ratio: '5',
    initialtest: '0',
    mintestsize: '32K',
    threads: '2',
    maxchunksize: '512K',
    maxchunkcount: '50',
    threadsperurl: '4',
  },
};

/** Standard request headers to send to speedtest */
export const standardHeaders = {
  'user-agent': `NodeJS/${process.version.slice(1)} (${fetchPlatform(process.platform.toLowerCase())}}) @favware/speedtest`,
  'content-type': 'application-x-www-form-urlencoded',
};