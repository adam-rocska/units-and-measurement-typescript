import {linearConversion, dimension} from "../dimension";
import {AreaSymbol} from "./symbols";

export const area = dimension<AreaSymbol>({
  "Mm²": linearConversion(1e12),
  "km²": linearConversion(1000000.0),
  "m²": linearConversion(1.0),
  "cm²": linearConversion(0.0001),
  "mm²": linearConversion(0.000001),
  "µm²": linearConversion(1e-12),
  "nm²": linearConversion(1e-18),
  "in²": linearConversion(0.00064516),
  "ft²": linearConversion(0.092903),
  "yd²": linearConversion(0.836127),
  "mi²": linearConversion(2.59e+6),
  "ac": linearConversion(4046.86),
  "a": linearConversion(100),
  "ha": linearConversion(10000)
});

export const squareMegameters = area["Mm²"];
export const squareKilometers = area["km²"];
export const squareMeters = area["m²"];
export const squareCentimeters = area["cm²"];
export const squareMillimeters = area["mm²"];
export const squareMicrometers = area["µm²"];
export const squareNanometers = area["nm²"];
export const squareInches = area["in²"];
export const squareFeet = area["ft²"];
export const squareYards = area["yd²"];
export const squareMiles = area["mi²"];
export const acres = area["ac"];
export const ares = area["a"];
export const hectares = area["ha"];
