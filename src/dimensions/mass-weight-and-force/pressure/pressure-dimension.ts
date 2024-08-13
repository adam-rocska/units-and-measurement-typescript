import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {PressureSymbol} from "./pressure-symbol";

export class PressureDimension extends Dimension<PressureSymbol> {
  public static readonly newtonsPerMetersSquared = new PressureDimension("N/m²", new LinearUnitConverter(1.0));

  public static readonly gigapascals = new PressureDimension("GPa", new LinearUnitConverter(1e9));

  public static readonly megapascals = new PressureDimension("MPa", new LinearUnitConverter(1000000.0));

  public static readonly kilopascals = new PressureDimension("kPa", new LinearUnitConverter(1000.0));

  public static readonly hectopascals = new PressureDimension("hPa", new LinearUnitConverter(100.0));

  public static readonly inchesOfMercury = new PressureDimension("inHg", new LinearUnitConverter(3386.39));

  public static readonly bars = new PressureDimension("bar", new LinearUnitConverter(100000));

  public static readonly millibars = new PressureDimension("mbar", new LinearUnitConverter(100));

  public static readonly millimetersOfMercury = new PressureDimension("mmHg", new LinearUnitConverter(133.322));

  public static readonly poundsForcePerSquareInch = new PressureDimension("psi", new LinearUnitConverter(6894.76));

}
