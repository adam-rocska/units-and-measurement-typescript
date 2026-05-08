import {linearConversion, dimension, type Measurement} from "../dimension";
import {AngleSymbol} from "./symbols";

export type Angle = Measurement<AngleSymbol>;
export const angle = dimension<AngleSymbol>({
  "°": linearConversion(1),
  "ʹ": linearConversion(1 / 60),
  "ʺ": linearConversion(1 / 60 / 60),
  "rad": linearConversion(180 / Math.PI),
  "grad": linearConversion(9 / 10),
  "rev": linearConversion(360)
});

export const degrees = angle["°"];
export const arcMinutes = angle["ʹ"];
export const arcSeconds = angle["ʺ"];
export const radians = angle["rad"];
export const gradians = angle["grad"];
export const revolutions = angle["rev"];
