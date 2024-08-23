import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../dimension";
import {SpeedSymbol} from "./symbols";

export const speed = DimensionMeasurement<SpeedSymbol>({
  "m/s": linearConversion(1.0),
  "km/h": linearConversion(0.277778),
  "mph": linearConversion(0.44704),
  "kn": linearConversion(0.514444)
});

export const metersPerSecond = speed["m/s"];
export const kilometersPerHour = speed["km/h"];
export const milesPerHour = speed["mph"];
export const knots = speed["kn"];
