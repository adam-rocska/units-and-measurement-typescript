import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../factory";
import {ConcentrationMassSymbol} from "./symbols";

export const concentrationMass = DimensionMeasurement<ConcentrationMassSymbol>({
  "g/L": linearConversion(1),
  "mg/dL": linearConversion(0.01)
});

export const gramsPerLiter = concentrationMass["g/L"];
export const milligramsPerDeciliter = concentrationMass["mg/dL"];
