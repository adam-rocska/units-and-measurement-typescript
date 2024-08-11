import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {AngleSymbol} from "./angle-symbol";

export class AngleDimension extends Dimension<AngleSymbol> {
  public static readonly degrees = new AngleDimension("°", new LinearUnitConverter(1));

  public static readonly arcMinutes = new AngleDimension("ʹ", new LinearUnitConverter(0.016667));

  public static readonly arcSeconds = new AngleDimension("ʺ", new LinearUnitConverter(0.00027778));

  public static readonly radians = new AngleDimension("rad", new LinearUnitConverter(57.2958));

  public static readonly gradians = new AngleDimension("grad", new LinearUnitConverter(0.9));

  public static readonly revolutions = new AngleDimension("rev", new LinearUnitConverter(360));

}
