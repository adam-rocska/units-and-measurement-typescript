import {linearConversion, dimension} from "../dimension";
import {AccelerationSymbol} from "./symbols";

export const acceleration = dimension<AccelerationSymbol>({
  "m/s²": linearConversion(1.0),
  "g": linearConversion(9.81)
});

export const metersPerSecondSquared = acceleration["m/s²"];
export const gravity = acceleration["g"];
