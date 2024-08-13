import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {DispersionSymbol} from "./dispersion-symbol";

export class DispersionDimension extends Dimension<DispersionSymbol> {
  public static readonly partsPerMillion = new DispersionDimension("ppm", new LinearUnitConverter(1));

  public static readonly partsPerBillion = new DispersionDimension("ppb", new LinearUnitConverter(1e-3));

  public static readonly partsPerTrillion = new DispersionDimension("ppt", new LinearUnitConverter(1e-6));

}
