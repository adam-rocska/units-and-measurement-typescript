import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {ElectricChargeSymbol} from "./electric-charge-symbol";

export class ElectricChargeDimension extends Dimension<ElectricChargeSymbol> {
  public static readonly coulombs = new ElectricChargeDimension("C", new LinearUnitConverter(1.0));

  public static readonly megaampereHours = new ElectricChargeDimension("MAh", new LinearUnitConverter(3.6e9));

  public static readonly kiloampereHours = new ElectricChargeDimension("kAh", new LinearUnitConverter(3600000.0));

  public static readonly ampereHours = new ElectricChargeDimension("Ah", new LinearUnitConverter(3600.0));

  public static readonly milliampereHours = new ElectricChargeDimension("mAh", new LinearUnitConverter(3.6));

  public static readonly microampereHours = new ElectricChargeDimension("µAh", new LinearUnitConverter(0.0036));

}
