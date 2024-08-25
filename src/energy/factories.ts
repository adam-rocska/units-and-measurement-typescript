import {linearConversion, DimensionMeasurement} from "../dimension";
import {EnergySymbol} from "./symbols";

export const energy = DimensionMeasurement<EnergySymbol>({
  "kJ": linearConversion(1000.0),
  "J": linearConversion(1.0),
  "kCal": linearConversion(4184.0),
  "cal": linearConversion(4.184),
  "kWh": linearConversion(3600000.0),
  "Wh": linearConversion(3600.0),
  "eV": linearConversion(1.60218e-19)
});

export const kilojoules = energy["kJ"];
export const joules = energy["J"];
export const kilocalories = energy["kCal"];
export const calories = energy["cal"];
export const kilowattHours = energy["kWh"];
export const wattHours = energy["Wh"];
export const electronvolts = energy["eV"];
