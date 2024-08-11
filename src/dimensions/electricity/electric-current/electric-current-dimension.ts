import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {ElectricCurrentSymbol} from "./electric-current-symbol";

export class ElectricCurrentDimension extends Dimension<ElectricCurrentSymbol> {
  public static readonly megaamperes = new ElectricCurrentDimension("MA", new LinearUnitConverter(1000000));

  public static readonly kiloamperes = new ElectricCurrentDimension("kA", new LinearUnitConverter(1000));

  public static readonly amperes = new ElectricCurrentDimension("A", new LinearUnitConverter(1));

  public static readonly milliamperes = new ElectricCurrentDimension("mA", new LinearUnitConverter(0.001));

  public static readonly microamperes = new ElectricCurrentDimension("µA", new LinearUnitConverter(0.000001));

}
