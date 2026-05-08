import {linearConversion, dimension, type Measurement} from "../dimension";
import {DispersionSymbol} from "./symbols";

export type Dispersion = Measurement<DispersionSymbol>;
export const dispersion = dimension<DispersionSymbol>({
  "ppm": linearConversion(1),
  "ppb": linearConversion(1e-3),
  "ppt": linearConversion(1e-6)
});

export const partsPerMillion = dispersion["ppm"];
export const partsPerBillion = dispersion["ppb"];
export const partsPerTrillion = dispersion["ppt"];
