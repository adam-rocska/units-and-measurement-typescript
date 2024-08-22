import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../factory";
import {PowerSymbol} from "./symbols";

export const power = DimensionMeasurement<PowerSymbol>({
  "TW": linearConversion(1e12),
  "GW": linearConversion(1e9),
  "MW": linearConversion(1000000.0),
  "kW": linearConversion(1000.0),
  "W": linearConversion(1),
  "mW": linearConversion(0.001),
  "µW": linearConversion(0.000001),
  "nW": linearConversion(1e-9),
  "pW": linearConversion(1e-12),
  "fW": linearConversion(1e-15),
  "hp": linearConversion(745.7)
});

export const terawatts = power["TW"];
export const gigawatts = power["GW"];
export const megawatts = power["MW"];
export const kilowatts = power["kW"];
export const watts = power["W"];
export const milliwatts = power["mW"];
export const microwatts = power["µW"];
export const nanowatts = power["nW"];
export const picowatts = power["pW"];
export const femtowatts = power["fW"];
export const horsepower = power["hp"];
