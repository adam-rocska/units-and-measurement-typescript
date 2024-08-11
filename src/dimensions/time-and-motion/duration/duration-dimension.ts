import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {DurationSymbol} from "./duration-symbol";

export class DurationDimension extends Dimension<DurationSymbol> {
  public static readonly seconds = new DurationDimension("sec", new LinearUnitConverter(1));

  public static readonly minutes = new DurationDimension("min", new LinearUnitConverter(60));

  public static readonly hours = new DurationDimension("hr", new LinearUnitConverter(3600));

}
