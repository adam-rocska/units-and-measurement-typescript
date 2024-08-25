import {linearConversion, DimensionMeasurement} from "../dimension";
import {IlluminanceSymbol} from "./symbols";

export const illuminance = DimensionMeasurement<IlluminanceSymbol>({
  "lx": linearConversion(1.0)
});

export const lux = illuminance["lx"];
