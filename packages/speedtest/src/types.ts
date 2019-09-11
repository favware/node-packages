export type SpeedtestOptions = Partial<{
  maxTime: number;
  maxServers: number;
  pingCount: number;
  headers: {
    [key: string]: string;
  };
}>;

export interface SpeedtestConfigData {
  settings: {
    client: {
      ip: string;
      lat: string;
      lon: string;
      isp: string;
      isprating: string;
      rating: string;
      ispdlavg: string;
      ispulavg: string;
      loggedin: string;
      country: string;
      [key: string]: string;
    };
    'server-config': {
      threadcount: string;
      ignoreids: string;
      notonmap: string;
      forcepingid: string;
      preferredserverid: string;
    };
    licensekey: string;
    customer: string;
    odometer: {
      start: string;
      rate: string;
    };
    times: {
      dl1: string;
      dl2: string;
      dl3: string;
      ul1: string;
      ul2: string;
      ul3: string;
    };
    download: {
      testlength: string;
      initialtest: string;
      mintestsize: string;
      threadsperurl: string;
    };
    upload: {
      testlength: string;
      ratio: string;
      initialtest: string;
      mintestsize: string;
      threads: string;
      maxchunksize: string;
      maxchunkcount: string;
      threadsperurl: string;
    };
    latency: {
      testlength: string;
      watittime: string;
      timeout: string;
    };
    'socket-download': {
      testlength: string;
      initialthreads: string;
      minthreads: string;
      maxthreads: string;
      threadratio: string;
      maxsamplesize: string;
      minsamplesize: string;
      startsamplesize: string;
      startbuffersize: string;
      bufferlength: string;
      packetlength: string;
      readbuffer: string;
    };
    'socket-upload': {
      initialthreads: string;
      minthreads: string;
      maxthreads: string;
      threadratio: string;
      maxsamplesize: string;
      minsamplesize: string;
      startsamplesize: string;
      startbuffersize: string;
      bufferlength: string;
      packetlength: string;
      disabled: string;
    };
    'socket-latency': {
      testlength: string;
      waittime: string;
      timeout: string;
    };
    conditions: {
      cond: {
        name: string;
        download?: string;
        value: string;
      }[];
    };
    interface: {
      template: string;
      colortcp: string;
    };
    translations: {
      lang: 'xml' | string;
      text: {
        '#text': string;
        id: string;
      }[];
    };
  };
}

export interface SpeedtestServerData {
  settings: {
    servers: {
      server: SpeedtestServerConfig[];
    };
  };
}

export type speedtestClientConfig = Pick<SpeedtestConfigData['settings'], 'client' | 'times' | 'download' | 'upload'>;

export interface SpeedtestServerConfig {
  url: string;
  lat: string;
  lon: string;
  name: string;
  country: string;
  cc: string;
  sponsor: string;
  id: string;
  url2: string;
  host: string;
  dist: number;
  distMi: number;
  bestPing: number;
  [key: string]: string | number;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface SpeedtestInfo {
  config: speedtestClientConfig;
  servers: SpeedtestServerConfig[];
  bestServers: SpeedtestServerConfig[];
  bestServer: SpeedtestServerConfig;
}