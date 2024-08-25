import {linearConversion, DimensionMeasurement} from "../dimension";
import {FrequencySymbol} from "./symbols";

export const frequency = DimensionMeasurement<FrequencySymbol>({
  "THz": linearConversion(1e12),
  "GHz": linearConversion(1e9),
  "MHz": linearConversion(1000000.0),
  "kHz": linearConversion(1000.0),
  "Hz": linearConversion(1),
  "mHz": linearConversion(0.001),
  "µHz": linearConversion(0.000001),
  "nHz": linearConversion(1e-9)
});

export const terahertz = frequency["THz"];
export const gigahertz = frequency["GHz"];
export const megahertz = frequency["MHz"];
export const kilohertz = frequency["kHz"];
export const hertz = frequency["Hz"];
export const millihertz = frequency["mHz"];
export const microhertz = frequency["µHz"];
export const nanohertz = frequency["nHz"];
