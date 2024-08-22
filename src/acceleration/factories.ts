import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../factory";
import {AccelerationSymbol} from "./symbols";

export const acceleration = DimensionMeasurement<AccelerationSymbol>({
  "m/s²": linearConversion(1.0),
  "g": linearConversion(9.81)
});

export const metersPerSecondSquared = acceleration["m/s²"];
export const gravity = acceleration["g"];