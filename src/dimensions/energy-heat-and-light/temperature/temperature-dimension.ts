import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {TemperatureSymbol} from "./temperature-symbol";

export class TemperatureDimension extends Dimension<TemperatureSymbol> {
  public static readonly kelvin = new TemperatureDimension("K", new LinearUnitConverter(1,(0)));

  public static readonly celsius = new TemperatureDimension("°C", new LinearUnitConverter(1,(273.15)));

  public static readonly fahrenheit = new TemperatureDimension("°F", new LinearUnitConverter(0.55555555555556,(255.37222222222428)));

  public static readonly rankine = new TemperatureDimension("°R", new LinearUnitConverter(0.55555555555556,(0)));

}
