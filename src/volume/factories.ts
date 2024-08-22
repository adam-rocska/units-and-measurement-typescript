import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../factory";
import {VolumeSymbol} from "./symbols";

export const volume = DimensionMeasurement<VolumeSymbol>({
  "ML": linearConversion(1000000.0),
  "kL": linearConversion(1000.0),
  "L": linearConversion(1.0),
  "dL": linearConversion(0.1),
  "cL": linearConversion(0.01),
  "mL": linearConversion(0.001),
  "km³": linearConversion(1e12),
  "m³": linearConversion(1000.0),
  "dm³": linearConversion(1.0),
  "mm³": linearConversion(0.000001),
  "in³": linearConversion(0.0163871),
  "ft³": linearConversion(28.3168),
  "yd³": linearConversion(764.555),
  "mi³": linearConversion(4.168e+12),
  "af": linearConversion(1.233e+6),
  "bsh": linearConversion(35.2391),
  "tsp": linearConversion(0.00492892),
  "tbsp": linearConversion(0.0147868),
  "fl oz": linearConversion(0.0295735),
  "cup": linearConversion(0.24),
  "pt": linearConversion(0.473176),
  "qt": linearConversion(0.946353),
  "gal": linearConversion(3.78541),
  "tsp": linearConversion(0.00591939),
  "tbsp": linearConversion(0.0177582),
  "fl oz": linearConversion(0.0284131),
  "pt": linearConversion(0.568261),
  "qt": linearConversion(1.13652),
  "gal": linearConversion(4.54609),
  "metric cup": linearConversion(0.25)
});

export const megaliters = volume["ML"];
export const kiloliters = volume["kL"];
export const liters = volume["L"];
export const deciliters = volume["dL"];
export const centiliters = volume["cL"];
export const milliliters = volume["mL"];
export const cubicKilometers = volume["km³"];
export const cubicMeters = volume["m³"];
export const cubicDecimeters = volume["dm³"];
export const cubicMillimeters = volume["mm³"];
export const cubicInches = volume["in³"];
export const cubicFeet = volume["ft³"];
export const cubicYards = volume["yd³"];
export const cubicMiles = volume["mi³"];
export const acreFeet = volume["af"];
export const bushels = volume["bsh"];
export const teaspoons = volume["tsp"];
export const tablespoons = volume["tbsp"];
export const fluidOunces = volume["fl oz"];
export const cups = volume["cup"];
export const pints = volume["pt"];
export const quarts = volume["qt"];
export const gallons = volume["gal"];
export const imperialTeaspoons = volume["tsp"];
export const imperialTablespoons = volume["tbsp"];
export const imperialFluidOunces = volume["fl oz"];
export const imperialPints = volume["pt"];
export const imperialQuarts = volume["qt"];
export const imperialGallons = volume["gal"];
export const metricCups = volume["metric cup"];
