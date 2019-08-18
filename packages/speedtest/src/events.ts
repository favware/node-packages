/* eslint-disable @typescript-eslint/no-explicit-any */
import StrictEventEmitter from 'strict-event-emitter-types';
import { EventEmitter } from 'events';
import { SpeedtestServerConfig, speedtestClientConfig } from './types';

/**
 * @typedef SpeedEvents events output by this library
 */
export type SpeedEvents = {
  /**
   * Fired when data is download.
   * The progress in percent is passed through.
   *
   * Note that if more than 1 server is used for download testing,
   * this will run to 100% multiple times
   */
  downloadprogress: (progress: number) => void;
  /**
   * Fired when data is uploaded.
   * The progress in percent is passed through.
   */
  uploadprogress: (progress: number) => void;
  /**
   * Fired when an error occurs
   * The error is passed through.
   */
  error: (error: Error) => void;
  /**
   * Fired when the configuration has been fetched from the speedtest server
   * The config is passed through.
   */
  config: (config: speedtestClientConfig) => void;
  /**
   * Fired when the list of servers has been fetched from the speedtest server
   * The list of server objects is passed through.
   */
  servers: (servers: SpeedtestServerConfig[]) => void;
  /**
   * Fired after closest servers are pinged
   * An ordered list of server objects is passed, descending in speed.
   */
  bestservers: (bestservers: SpeedtestServerConfig[]) => void;
  /**
   * Fired before download or upload is started on a server
   * Server object is passed
   */
  testserver: (testserver: SpeedtestServerConfig) => void;
  /**
   * Fired when download speed is found
   * Speed is in megabites per second
   */
  downloadspeed: (downloadspeed: any) => void;
  /**
   * Fired when the upload speed is found
   * Speed is in megabites per second
   */
  uploadspeed: (uploadspeed: any) => void;
  /**
   * Fired before final download has completed to show download speed in progress.
   * Fired multiple times.
   * Speed is in megabits per second
   */
  downloadspeedprogress: (downloadspeedprogress: any) => void;
  /**
   * Fired before final upload has completed to show upload speed in progress.
   * Fired multiple times.
   * Speed is in megabits per second
   */
  uploadspeedprogress: (uploadspeedprogress: any) => void;
  /**
   * Fired when the data has been uploaded to the speedtest.net server
   * The url of the result is passed through, or `undefined` on error.
   */
  result: (result: any) => void;
  /**
   * Fired when tests are done  with all relevant information
   * Resulting data is passed through
   */
  data: (data: any) => void;
  /**
   * Fired when the test is done.
   * An object with all done data is passed
   * This event will not fire when an error is occurred
   */
  done: (done: any) => void;
};

export const eventemitter: StrictEventEmitter<EventEmitter, SpeedEvents> = new EventEmitter();
export default eventemitter;