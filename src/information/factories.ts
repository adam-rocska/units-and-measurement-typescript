import {linearConversion} from "../conversion";
import {DimensionMeasurement} from "../factory";
import {InformationSymbol} from "./symbols";

export const information = DimensionMeasurement<InformationSymbol>({
  "b": linearConversion(1),
  "B": linearConversion(8),
  "kb": linearConversion(1000),
  "Mb": linearConversion(1000e2),
  "Gb": linearConversion(1000e3),
  "Tb": linearConversion(1000e4),
  "Pb": linearConversion(1000e5),
  "Eb": linearConversion(1000e6),
  "Zb": linearConversion(1000e7),
  "Yb": linearConversion(1000e8),
  "Kib": linearConversion(1024),
  "KB": linearConversion(8192),
  "Mib": linearConversion(1024e2),
  "MB": linearConversion(8192e2),
  "Gib": linearConversion(1024e3),
  "GB": linearConversion(8192e3),
  "Tib": linearConversion(1024e4),
  "TB": linearConversion(8192e4),
  "Pib": linearConversion(1024e5),
  "PB": linearConversion(8192e5),
  "Eib": linearConversion(1024e6),
  "EB": linearConversion(8192e6),
  "Zib": linearConversion(1024e7),
  "ZB": linearConversion(8192e7),
  "Yib": linearConversion(1024e8),
  "YB": linearConversion(8192e8)
});

export const bits = information["b"];
export const bytes = information["B"];
export const kilobits = information["kb"];
export const megabits = information["Mb"];
export const gigabits = information["Gb"];
export const terabits = information["Tb"];
export const petabits = information["Pb"];
export const exabits = information["Eb"];
export const zettabits = information["Zb"];
export const yottabits = information["Yb"];
export const kibibits = information["Kib"];
export const kilobytes = information["KB"];
export const mebibits = information["Mib"];
export const megabytes = information["MB"];
export const gibibits = information["Gib"];
export const gigabytes = information["GB"];
export const tebibits = information["Tib"];
export const terabytes = information["TB"];
export const pebibits = information["Pib"];
export const petabytes = information["PB"];
export const exbibits = information["Eib"];
export const exabytes = information["EB"];
export const zebibits = information["Zib"];
export const zettabytes = information["ZB"];
export const yobibits = information["Yib"];
export const yottabytes = information["YB"];
