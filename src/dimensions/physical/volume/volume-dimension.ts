import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {VolumeSymbol} from "./volume-symbol";

export class VolumeDimension extends Dimension<VolumeSymbol> {
  public static readonly megaliters = new VolumeDimension("ML", new LinearUnitConverter(1000000.0));

  public static readonly kiloliters = new VolumeDimension("kL", new LinearUnitConverter(1000.0));

  public static readonly liters = new VolumeDimension("L", new LinearUnitConverter(1.0));

  public static readonly deciliters = new VolumeDimension("dL", new LinearUnitConverter(0.1));

  public static readonly centiliters = new VolumeDimension("cL", new LinearUnitConverter(0.01));

  public static readonly milliliters = new VolumeDimension("mL", new LinearUnitConverter(0.001));

  public static readonly cubicKilometers = new VolumeDimension("km³", new LinearUnitConverter(1e12));

  public static readonly cubicMeters = new VolumeDimension("m³", new LinearUnitConverter(1000.0));

  public static readonly cubicDecimeters = new VolumeDimension("dm³", new LinearUnitConverter(1.0));

  public static readonly cubicMillimeters = new VolumeDimension("mm³", new LinearUnitConverter(0.000001));

  public static readonly cubicInches = new VolumeDimension("in³", new LinearUnitConverter(0.0163871));

  public static readonly cubicFeet = new VolumeDimension("ft³", new LinearUnitConverter(28.3168));

  public static readonly cubicYards = new VolumeDimension("yd³", new LinearUnitConverter(764.555));

  public static readonly cubicMiles = new VolumeDimension("mi³", new LinearUnitConverter(4.168e+12));

  public static readonly acreFeet = new VolumeDimension("af", new LinearUnitConverter(1.233e+6));

  public static readonly bushels = new VolumeDimension("bsh", new LinearUnitConverter(35.2391));

  public static readonly teaspoons = new VolumeDimension("tsp", new LinearUnitConverter(0.00492892));

  public static readonly tablespoons = new VolumeDimension("tbsp", new LinearUnitConverter(0.0147868));

  public static readonly fluidOunces = new VolumeDimension("fl oz", new LinearUnitConverter(0.0295735));

  public static readonly cups = new VolumeDimension("cup", new LinearUnitConverter(0.24));

  public static readonly pints = new VolumeDimension("pt", new LinearUnitConverter(0.473176));

  public static readonly quarts = new VolumeDimension("qt", new LinearUnitConverter(0.946353));

  public static readonly gallons = new VolumeDimension("gal", new LinearUnitConverter(3.78541));

  public static readonly imperialTeaspoons = new VolumeDimension("tsp", new LinearUnitConverter(0.00591939));

  public static readonly imperialTablespoons = new VolumeDimension("tbsp", new LinearUnitConverter(0.0177582));

  public static readonly imperialFluidOunces = new VolumeDimension("fl oz", new LinearUnitConverter(0.0284131));

  public static readonly imperialPints = new VolumeDimension("pt", new LinearUnitConverter(0.568261));

  public static readonly imperialQuarts = new VolumeDimension("qt", new LinearUnitConverter(1.13652));

  public static readonly imperialGallons = new VolumeDimension("gal", new LinearUnitConverter(4.54609));

  public static readonly metricCups = new VolumeDimension("metric cup", new LinearUnitConverter(0.25));

}
