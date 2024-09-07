import {linearConversion, dimension} from "../dimension";
import {TemperatureSymbol} from "./symbols";

export const temperature = dimension<TemperatureSymbol>({
  "K": linearConversion(1, 0),
  "°C": linearConversion(1.0, 273.15),
  "°F": linearConversion(0.55555555555556, 255.37222222222427),
  "°R": linearConversion(0.55555555555556, 0)
});

export const kelvin = temperature["K"];
export const celsius = temperature["°C"];
export const fahrenheit = temperature["°F"];
export const rankine = temperature["°R"];
