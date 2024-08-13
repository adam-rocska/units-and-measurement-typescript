import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {ElectricResistanceSymbol} from "./electric-resistance-symbol";

export class ElectricResistanceDimension extends Dimension<ElectricResistanceSymbol> {
  public static readonly megaohms = new ElectricResistanceDimension("MΩ", new LinearUnitConverter(1000000.0));

  public static readonly kiloohms = new ElectricResistanceDimension("kΩ", new LinearUnitConverter(1000.0));

  public static readonly ohms = new ElectricResistanceDimension("Ω", new LinearUnitConverter(1.0));

  public static readonly milliohms = new ElectricResistanceDimension("mΩ", new LinearUnitConverter(0.001));

  public static readonly microohms = new ElectricResistanceDimension("µΩ", new LinearUnitConverter(0.000001));

}
