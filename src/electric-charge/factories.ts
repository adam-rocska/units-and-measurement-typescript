import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../dimension";
import {ElectricChargeSymbol} from "./symbols";

export const electricCharge = DimensionMeasurement<ElectricChargeSymbol>({
  "C": linearConversion(1.0),
  "MAh": linearConversion(3.6e9),
  "kAh": linearConversion(3600000.0),
  "Ah": linearConversion(3600.0),
  "mAh": linearConversion(3.6),
  "µAh": linearConversion(0.0036)
});

export const coulombs = electricCharge["C"];
export const megaampereHours = electricCharge["MAh"];
export const kiloampereHours = electricCharge["kAh"];
export const ampereHours = electricCharge["Ah"];
export const milliampereHours = electricCharge["mAh"];
export const microampereHours = electricCharge["µAh"];
