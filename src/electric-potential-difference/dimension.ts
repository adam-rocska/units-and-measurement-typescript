import {linearConversion, dimension} from "../dimension";
import {ElectricPotentialDifferenceSymbol} from "./symbols";

export const electricPotentialDifference = dimension<ElectricPotentialDifferenceSymbol>({
  "MV": linearConversion(1000000.0),
  "kV": linearConversion(1000.0),
  "V": linearConversion(1.0),
  "mV": linearConversion(0.001),
  "µV": linearConversion(0.000001)
});

export const megavolts = electricPotentialDifference["MV"];
export const kilovolts = electricPotentialDifference["kV"];
export const volts = electricPotentialDifference["V"];
export const millivolts = electricPotentialDifference["mV"];
export const microvolts = electricPotentialDifference["µV"];
