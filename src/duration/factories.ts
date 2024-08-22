import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../factory";
import {DurationSymbol} from "./symbols";

export const duration = DimensionMeasurement<DurationSymbol>({
  "sec": linearConversion(1),
  "min": linearConversion(60),
  "hr": linearConversion(3600)
});

export const seconds = duration["sec"];
export const minutes = duration["min"];
export const hours = duration["hr"];
