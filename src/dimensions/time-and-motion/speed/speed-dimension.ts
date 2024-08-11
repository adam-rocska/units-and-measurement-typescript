import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {SpeedSymbol} from "./speed-symbol";

export class SpeedDimension extends Dimension<SpeedSymbol> {
  public static readonly metersPerSecond = new SpeedDimension("m/s", new LinearUnitConverter(1));

  public static readonly kilometersPerHour = new SpeedDimension("km/h", new LinearUnitConverter(0.277778));

  public static readonly milesPerHour = new SpeedDimension("mph", new LinearUnitConverter(0.44704));

  public static readonly knots = new SpeedDimension("kn", new LinearUnitConverter(0.514444));

}
