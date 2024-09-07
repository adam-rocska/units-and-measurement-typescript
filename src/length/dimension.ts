import {linearConversion, dimension} from "../dimension";
import {LengthSymbol} from "./symbols";

export const length = dimension<LengthSymbol>({
  "Mm": linearConversion(1E6),
  "kM": linearConversion(1E3),
  "hm": linearConversion(1E2),
  "dam": linearConversion(1E1),
  "m": linearConversion(1),
  "dm": linearConversion(1E-1),
  "cm": linearConversion(1E-2),
  "mm": linearConversion(1E-3),
  "µm": linearConversion(1E-6),
  "nm": linearConversion(1e-9),
  "pm": linearConversion(1e-12),
  "tw": linearConversion((127 / 7200) / 1000),
  "pt": linearConversion((127 / 360) / 1000),
  "P": linearConversion((127 / 30) / 1000),
  "in": linearConversion((127 / 5) / 1000),
  "ft": linearConversion(0.3048),
  "yd": linearConversion(0.9144),
  "mi": linearConversion(1609.34),
  "smi": linearConversion(10000),
  "ly": linearConversion(9.461e+15),
  "NM": linearConversion(1852),
  "ftm": linearConversion(1.8288),
  "fur": linearConversion(201.168),
  "ua": linearConversion(1.496e+11),
  "pc": linearConversion(3.086e+16)
});

export const megameters = length["Mm"];
export const kilometers = length["kM"];
export const hectometers = length["hm"];
export const decameters = length["dam"];
export const meters = length["m"];
export const decimeters = length["dm"];
export const centimeters = length["cm"];
export const millimeters = length["mm"];
export const micrometers = length["µm"];
export const nanometers = length["nm"];
export const picometers = length["pm"];
export const twips = length["tw"];
export const points = length["pt"];
export const picas = length["P"];
export const inches = length["in"];
export const feet = length["ft"];
export const yards = length["yd"];
export const miles = length["mi"];
export const scandinavianMiles = length["smi"];
export const lightyears = length["ly"];
export const nauticalMiles = length["NM"];
export const fathoms = length["ftm"];
export const furlongs = length["fur"];
export const astronomicalUnits = length["ua"];
export const parsecs = length["pc"];
