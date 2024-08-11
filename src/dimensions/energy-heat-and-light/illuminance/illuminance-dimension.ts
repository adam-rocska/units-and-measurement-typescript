import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {IlluminanceSymbol} from "./illuminance-symbol";

export class IlluminanceDimension extends Dimension<IlluminanceSymbol> {
  public static readonly lux = new IlluminanceDimension("lx", new LinearUnitConverter(1));

}
