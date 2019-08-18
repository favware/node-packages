/* eslint-disable @typescript-eslint/ban-ts-ignore, @typescript-eslint/no-unused-vars */
import eventemitter from './events';
import { parse as xml2json } from 'fast-xml-parser';
import fetch from 'node-fetch';
import { SpeedtestConfigData, SpeedtestOptions, speedtestClientConfig, SpeedtestServerData, SpeedtestServerConfig, SpeedtestInfo, LatLng } from './types';
import { baseServerData, baseClientData, standardHeaders } from './constants';
import { resolve } from 'url';

const objectHasProperty = <O extends {}>(obj: O, prop: keyof O) => obj && prop in obj;

export const roundNumber = (num: number, scale = 0) => {
  if (!num.toString().includes('e')) {
    return Number(`${Math.round(Number(`${num}e+${scale}`))}e-${scale}`);
  }
  const arr = `${num}`.split('e');
  let sig = '';

  if (Number(arr[1]) + scale > 0) {
    sig = '+';
  }

  return Number(`${Math.round(Number(`${Number(arr[0])}e${sig}${Number(arr[1]) + scale}`))}e-${scale}`);
};

const calculateDistance = (client: LatLng, server: LatLng) => {
  const deg2rad = (d: number) => d / 180 * Math.PI;

  const radius = 6371;
  const distLat = deg2rad(server.lat - client.lat);
  const distLng = deg2rad(server.lng - client.lng);

  /*  eslint-disable no-mixed-operators */
  const a =
    Math.sin(distLat / 2) * Math.sin(distLat / 2) +
    Math.cos(deg2rad(client.lat)) * Math.cos(deg2rad(server.lat)) *
    Math.sin(distLng / 2) * Math.sin(distLng / 2);
  /*  eslint-enable no-mixed-operators */
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distanceInKilometers = radius * c;
  const distanceInMeters = roundNumber(distanceInKilometers * 1000, 3);
  const distanceInMiles = roundNumber(distanceInKilometers * 0.621371, 3);

  return {
    dist: distanceInMeters,
    distMi: distanceInMiles,
  };
};

/** Pings a single server and returns the ping time based on process.hrtime() */
const pingSingleServer = async (server: SpeedtestServerConfig): Promise<number> => {
  const total = 3;
  let done = 0;
  let bestTime = 3600;
  const nextPing = async (): Promise<number> => {
    const start = process.hrtime();
    let complete = false;
    let errors: Error | undefined;
    let diff: [number, number];
    let ping: number;
    setTimeout(async () => {
      if (!complete) {
        complete = true;

        throw new Error('Ping timeout');
      }

      return undefined;
    }, 5000);

    try {
      await fetch(resolve(server.url, 'latency.txt'));
      if (complete) return 3600;
      complete = true;
      diff = process.hrtime(start);
      ping = diff[0] + (diff[1] * 1e-9);
    } catch (err) {
      errors = new Error('Unknown latency file');
    } finally {
      if (errors) ping = 3600;
      if (ping! < bestTime) bestTime = ping!;
      done++;
      if (done === total) {
        /* eslint-disable no-unsafe-finally, consistent-return */
        if (bestTime >= 3600) throw new Error('Ping failed');

        return bestTime * 1000;
      }

      return nextPing();
      /* eslint-enable no-unsafe-finally, consistent-return */
    }
  };

  return nextPing();
};

/** Loops all servers and pings each to determine the best server to use */
const pingServers = async (servers: SpeedtestServerConfig[], count: number) => {
  const result: SpeedtestServerConfig[] = [];
  const todo = Math.min(count, servers.length);
  let done = 0;

  for (const server of servers) {
    result.push(server);
    server.bestPing = 3600;
    try {
      let bestTime = await pingSingleServer(server);
      if (bestTime < 10 && server.dist < 2) {
        bestTime = 100;
      }
      server.bestPing = bestTime;
      done++;

      if (done === todo) {
        result.sort((a, b) => a.bestPing - b.bestPing);

        return result;
      }
    } catch (err) {
      server.bestPing = 3600; // 1 hour
    }
  }

  if (todo === 0) {
    return [];
  }

  return result;
};

// @ts-ignore
export const speedtest = async (options: SpeedtestOptions = {}) => { // eslint-disable-line

  /**
 * Gets Speedtest Configuration
 * If no client configuration could be found it will default to a client based in Amsterdam, The Netherlands
 */
  const getSpeedtestClientConfig = async (): Promise<speedtestClientConfig> => {
    try {
      const requestConfig = await fetch('https://www.speedtest.net/speedtest-config.php');
      const config = xml2json(await requestConfig.text()) as SpeedtestConfigData;
      const speedtestConfig = {
        client: config.settings.client,
        times: config.settings.times,
        download: config.settings.download,
        upload: config.settings.upload,
      };

      speedtest.events.emit('config', speedtestConfig);

      return speedtestConfig;
    } catch (err) {
      speedtest.events.emit('error', err);

      return baseClientData;
    }
  };

  /**
 * Gets the configuration of a speedtest server
 * If no server could configuration could be found it will default to a server in Amsterdam, The Netherlands
 */
  const getSpeedtestServerConfig = async (clientLocation: { lat: string; lon: string }): Promise<SpeedtestServerConfig[]> => {
    try {
      const requestServers = await fetch('https://www.speedtest.net/speedtest-servers.php');
      const data = xml2json(await requestServers.text(), { ignoreAttributes: false, attributeNamePrefix: '' }) as SpeedtestServerData;

      let servers = data.settings.servers.server;
      speedtest.events.emit('servers', servers);

      servers = servers.map(server => ({
        ...server,
        ...calculateDistance(
          { lat: parseFloat(clientLocation.lat), lng: parseFloat(clientLocation.lon) }, { lat: parseFloat(server.lat), lng: parseFloat(server.lon) }
        ),
      }));

      servers = servers.sort((serverA, serverB) => serverA.dist - serverB.dist);

      speedtest.events.emit('bestservers', servers);

      return servers;
    } catch (err) {
      speedtest.events.emit('error', err);

      return baseServerData;
    }
  };

  // @ts-ignore
const startDownload = (speedInfo: SpeedtestInfo, speedtestOptions: SpeedtestOptions, iterator = 0,) => { // eslint-disable-line
  // @ts-ignore
    if (iterator > speedInfo.bestServers.length || iterator >= speedtestOptions.maxServers!) return startUpload();

    const server = speedInfo.bestServers[iterator];
    const serverUrl = server.url;
    const sizes = [ 350, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000 ];
    const urls = [];

    for (const size of sizes) {
      for (let i = 0; i < 4; i++) {
        urls.push(resolve(serverUrl, `random${size}x${size}.jpg`));
      }
    }

    speedtest.events.emit('testserver', server);
  // Left of here on 2019-08-11
  };

  // @ts-ignore
  const serverUrl = 'https://www.speedtest.net/speedtest-servers.php';
  const speedOptions: SpeedtestOptions = {
    maxTime: objectHasProperty(options, 'maxTime') ? options.maxTime : 10000,
    maxServers: objectHasProperty(options, 'maxServers') ? options.maxServers : 1,
    headers: objectHasProperty(options, 'headers') ? { ...standardHeaders, ...options.headers } : standardHeaders,
    // eslint-disable-next-line no-nested-ternary
    pingCount: objectHasProperty(options, 'pingCount') ? options.pingCount : 5,
  };
  const speedInfo: Partial<SpeedtestInfo> = { config: await getSpeedtestClientConfig() };

  // eslint-disable-next-line require-atomic-updates
  speedInfo.servers = await getSpeedtestServerConfig({ lat: speedInfo.config!.client.lat, lon: speedInfo.config!.client.lon });

  try {
    const bestServers = await pingServers(speedInfo.servers, speedOptions.pingCount!);
    speedInfo.bestServers = bestServers;
    speedInfo.bestServer = bestServers[0];

    speedtest.events.emit('bestservers', bestServers);
  } catch (err) {
    return speedtest.events.emit('error', err);
  }
};

speedtest.events = eventemitter;

export default speedtest;