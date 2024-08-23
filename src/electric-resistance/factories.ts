import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../dimension";
import {ElectricResistanceSymbol} from "./symbols";

export const electricResistance = DimensionMeasurement<ElectricResistanceSymbol>({
  "MΩ": linearConversion(1000000.0),
  "kΩ": linearConversion(1000.0),
  "Ω": linearConversion(1.0),
  "mΩ": linearConversion(0.001),
  "µΩ": linearConversion(0.000001)
});

export const megaohms = electricResistance["MΩ"];
export const kiloohms = electricResistance["kΩ"];
export const ohms = electricResistance["Ω"];
export const milliohms = electricResistance["mΩ"];
export const microohms = electricResistance["µΩ"];
