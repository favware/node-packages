/**
 * Measure system data
 * @typedef {IMeasurementSystemData} IMeasurementSystemData measure system data for primary and secondary
 * @property {string} default The default unit to use
 * @property {number} ratio The ratio to convert to other measurement system
 * @property {function} [transform] A transformation function when a simple ratio is not enough
 */
export type IMeasurementSystemData = {
  default: string;
  ratio: number;

  transform? (arg: string | number): number;
};

/**
 * Array of supported unit definitions
 * @typedef {IUnitDefinition} IUnitDefinition array of all definitions
 */
export type IUnitDefinition = {
  name: string;
  primary: IMeasurementSystemData;
  secondary?: IMeasurementSystemData;
  data: IUnitData[];
};

/**
 * Single property of definitions
 * @typedef {IUnitData} IUnitData unit definition property
 * @property {string} id ID of the unit
 * @property {number} multiplier Multiplier for the unit
 * @property {number} valueShift A zero value shift to use instead of a multiplier
 * @property {boolean} isSecondary whether this data prop belongs to a secondary system
 */
export type IUnitData = {
  id: string;
  system: System;
  multiplier: number;
  valueShift?: number;
};

/**
 * Options for the convert method
 * @typedef {IConvertOptions} IConvertOptions options for the convert method
 * @property {number} precision The decimal precision to return
 */
export type IConvertOptions = {
  precision: number;
};

/**
 * Predefined options for the unit system
 * @typedef {System} System unit system enum
 * @property {System.PRIMARY} Primary for when the unit is of the primary system
 * @property {System.SECONDARY} Secondary for when the unit is of the secondary system
 */
export enum System {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}