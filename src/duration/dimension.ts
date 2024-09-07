import {linearConversion, dimension} from "../dimension";
import {DurationSymbol} from "./symbols";

export const duration = dimension<DurationSymbol>({
  "sec": linearConversion(1),
  "min": linearConversion(60),
  "hr": linearConversion(3600)
});

export const seconds = duration["sec"];
export const minutes = duration["min"];
export const hours = duration["hr"];
