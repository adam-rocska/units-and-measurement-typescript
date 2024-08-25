import {linearConversion, DimensionMeasurement} from "../dimension";
import {PressureSymbol} from "./symbols";

export const pressure = DimensionMeasurement<PressureSymbol>({
  "N/m²": linearConversion(1.0),
  "GPa": linearConversion(1e9),
  "MPa": linearConversion(1000000.0),
  "kPa": linearConversion(1000.0),
  "hPa": linearConversion(100.0),
  "inHg": linearConversion(3386.39),
  "bar": linearConversion(100000),
  "mbar": linearConversion(100),
  "mmHg": linearConversion(133.322),
  "psi": linearConversion(6894.76)
});

export const newtonsPerMetersSquared = pressure["N/m²"];
export const gigapascals = pressure["GPa"];
export const megapascals = pressure["MPa"];
export const kilopascals = pressure["kPa"];
export const hectopascals = pressure["hPa"];
export const inchesOfMercury = pressure["inHg"];
export const bars = pressure["bar"];
export const millibars = pressure["mbar"];
export const millimetersOfMercury = pressure["mmHg"];
export const poundsForcePerSquareInch = pressure["psi"];
