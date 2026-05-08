import {linearConversion, dimension, type Measurement} from "../dimension";
import {ConcentrationMassSymbol} from "./symbols";

export type ConcentrationMass = Measurement<ConcentrationMassSymbol>;
export const concentrationMass = dimension<ConcentrationMassSymbol>({
  "g/L": linearConversion(1),
  "mg/dL": linearConversion(0.01)
});

export const gramsPerLiter = concentrationMass["g/L"];
export const milligramsPerDeciliter = concentrationMass["mg/dL"];
