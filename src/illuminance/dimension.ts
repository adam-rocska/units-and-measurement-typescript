import {linearConversion, dimension} from "../dimension";
import {IlluminanceSymbol} from "./symbols";

export const illuminance = dimension<IlluminanceSymbol>({
  "lx": linearConversion(1.0)
});

export const lux = illuminance["lx"];
