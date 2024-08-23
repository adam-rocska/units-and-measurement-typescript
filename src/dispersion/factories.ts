import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../dimension";
import {DispersionSymbol} from "./symbols";

export const dispersion = DimensionMeasurement<DispersionSymbol>({
  "ppm": linearConversion(1),
  "ppb": linearConversion(1e-3),
  "ppt": linearConversion(1e-6)
});

export const partsPerMillion = dispersion["ppm"];
export const partsPerBillion = dispersion["ppb"];
export const partsPerTrillion = dispersion["ppt"];
