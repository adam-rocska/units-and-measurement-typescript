import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {AreaSymbol} from "./area-symbol";

export class AreaDimension extends Dimension<AreaSymbol> {
  public static readonly squareMegameters = new AreaDimension("Mm²", new LinearUnitConverter(1e12));
  public static readonly squareKilometers = new AreaDimension("km²", new LinearUnitConverter(1000000.0));
  public static readonly squareMeters = new AreaDimension("m²", new LinearUnitConverter(1.0));
  public static readonly squareCentimeters = new AreaDimension("cm²", new LinearUnitConverter(0.0001));
  public static readonly squareMillimeters = new AreaDimension("mm²", new LinearUnitConverter(0.000001));
  public static readonly squareMicrometers = new AreaDimension("µm²", new LinearUnitConverter(1e-12));
  public static readonly squareNanometers = new AreaDimension("nm²", new LinearUnitConverter(1e-18));
  public static readonly squareInches = new AreaDimension("in²", new LinearUnitConverter(0.00064516));
  public static readonly squareFeet = new AreaDimension("ft²", new LinearUnitConverter(0.092903));
  public static readonly squareYards = new AreaDimension("yd²", new LinearUnitConverter(0.836127));
  public static readonly squareMiles = new AreaDimension("mi²", new LinearUnitConverter(2.59e+6));
  public static readonly acres = new AreaDimension("ac", new LinearUnitConverter(4046.86));
  public static readonly ares = new AreaDimension("a", new LinearUnitConverter(100));
  public static readonly hectares = new AreaDimension("ha", new LinearUnitConverter(10000));
}