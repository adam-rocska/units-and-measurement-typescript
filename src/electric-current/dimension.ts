import {linearConversion, dimension} from "../dimension";
import {ElectricCurrentSymbol} from "./symbols";

export const electricCurrent = dimension<ElectricCurrentSymbol>({
  "MA": linearConversion(1000000.0),
  "kA": linearConversion(1000.0),
  "A": linearConversion(1.0),
  "mA": linearConversion(0.001),
  "µA": linearConversion(0.000001)
});

export const megaamperes = electricCurrent["MA"];
export const kiloamperes = electricCurrent["kA"];
export const amperes = electricCurrent["A"];
export const milliamperes = electricCurrent["mA"];
export const microamperes = electricCurrent["µA"];
