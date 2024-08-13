import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {AccelerationSymbol} from "./acceleration-symbol";

export class AccelerationDimension extends Dimension<AccelerationSymbol> {
  public static readonly metersPerSecondSquared = new AccelerationDimension("m/s²", new LinearUnitConverter(1.0));

  public static readonly gravity = new AccelerationDimension("g", new LinearUnitConverter(9.81));

}
