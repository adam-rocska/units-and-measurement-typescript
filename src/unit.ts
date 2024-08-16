export type Unit = string;

export type Dimension<UnitType extends Unit> = {
  [unit in UnitType]: number;
};