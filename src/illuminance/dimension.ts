import {linearConversion, dimension, type Measurement} from "../dimension";
import {IlluminanceSymbol} from "./symbols";

export type Illuminance = Measurement<IlluminanceSymbol>;
export const illuminance = dimension<IlluminanceSymbol>({
  "lx": linearConversion(1.0)
});

export const lux = illuminance["lx"];
