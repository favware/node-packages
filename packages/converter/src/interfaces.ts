/** Measure system data */
export interface MeasurementSystemData {
  /** The default unit to use */
  default: string;
  /** The ratio to convert to other measurement system */
  ratio: number;

  /** A transformation function when a simple ratio is not enough */
  transform?(arg: string | number): number;
}

/** Array of supported unit definitions */
export interface UnitDefinition {
  /** Name of the unit definition */
  name: string;
  /** Primary measurement system data */
  primary: MeasurementSystemData;
  /** Secondary measurement system data */
  secondary?: MeasurementSystemData;
  /** Unit data that belongs to this unit's definition */
  data: UnitData[];
}

/** Single property of definitions */
export interface UnitData {
  /** ID of the unit */
  id: string;
  /** Whether the unit is of primary or secondary system */
  system: System;
  /** Multiplier for the unit */
  multiplier: number;
  /** A zero value shift to use instead of a multiplier */
  valueShift?: number;
  /**
   * A unique transformation when default ratio and multiplier do not apply.
   *
   * @returns the final value returned by the convertion
   */
  uniqueTransform?: (value: number) => string;
}

/** Options for the convert method */
export interface ConvertOptions {
  /** The decimal precision to return */
  precision: number;
}

/** Predefined options for the unit system */
export enum System {
  /** For when the unit is of the primary system */
  PRIMARY = 'primary',
  /** For when the unit is of the secondary system */
  SECONDARY = 'secondary'
}
