import StrictEventEmitter from 'strict-event-emitter-types';
import { EventEmitter } from 'events';
import { TSLintFile } from './types';
import PluginError from 'plugin-error';

/** MilkyEvents Events output by this library */
export interface MilkyEvents {
  /** Fired where there is linted data */
  data: (file: TSLintFile) => void;
  /** Fired when an error occurs during linting */
  error: (err: PluginError) => void;
  /** Fired when lintin is complete */
  end: () => void;
}

export const eventemitter: StrictEventEmitter<EventEmitter, MilkyEvents> = new EventEmitter();
export default eventemitter;