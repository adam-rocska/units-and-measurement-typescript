import {linearConversion, dimension} from "../dimension";
import {MassSymbol} from "./symbols";

export const mass = dimension<MassSymbol>({
  "kg": linearConversion(1.0),
  "g": linearConversion(0.001),
  "dg": linearConversion(0.0001),
  "cg": linearConversion(0.00001),
  "mg": linearConversion(0.000001),
  "µg": linearConversion(1e-9),
  "ng": linearConversion(1e-12),
  "pg": linearConversion(1e-15),
  "oz": linearConversion(0.0283495),
  "lb": linearConversion(0.453592),
  "st": linearConversion(0.157473),
  "t": linearConversion(1000),
  "ton": linearConversion(907.185),
  "ct": linearConversion(0.0002),
  "oz t": linearConversion(0.03110348),
  "slug": linearConversion(14.5939)
});

export const kilograms = mass["kg"];
export const grams = mass["g"];
export const decigrams = mass["dg"];
export const centigrams = mass["cg"];
export const milligrams = mass["mg"];
export const micrograms = mass["µg"];
export const nanograms = mass["ng"];
export const picograms = mass["pg"];
export const ounces = mass["oz"];
export const pounds = mass["lb"];
export const stones = mass["st"];
export const metricTons = mass["t"];
export const shortTons = mass["ton"];
export const carats = mass["ct"];
export const ouncesTroy = mass["oz t"];
export const slugs = mass["slug"];
