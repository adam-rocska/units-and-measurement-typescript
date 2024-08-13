import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {ElectricPotentialDifferenceSymbol} from "./electric-potential-difference-symbol";

export class ElectricPotentialDifferenceDimension extends Dimension<ElectricPotentialDifferenceSymbol> {
  public static readonly megavolts = new ElectricPotentialDifferenceDimension("MV", new LinearUnitConverter(1000000.0));

  public static readonly kilovolts = new ElectricPotentialDifferenceDimension("kV", new LinearUnitConverter(1000.0));

  public static readonly volts = new ElectricPotentialDifferenceDimension("V", new LinearUnitConverter(1.0));

  public static readonly millivolts = new ElectricPotentialDifferenceDimension("mV", new LinearUnitConverter(0.001));

  public static readonly microvolts = new ElectricPotentialDifferenceDimension("µV", new LinearUnitConverter(0.000001));

}
