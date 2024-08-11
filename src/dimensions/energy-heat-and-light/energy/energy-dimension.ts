import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {EnergySymbol} from "./energy-symbol";

export class EnergyDimension extends Dimension<EnergySymbol> {
  public static readonly kilojoules = new EnergyDimension("kJ", new LinearUnitConverter(1000));

  public static readonly joules = new EnergyDimension("J", new LinearUnitConverter(1));

  public static readonly kilocalories = new EnergyDimension("kCal", new LinearUnitConverter(4184));

  public static readonly calories = new EnergyDimension("cal", new LinearUnitConverter(4.184));

  public static readonly kilowattHours = new EnergyDimension("kWh", new LinearUnitConverter(3600000));

  public static readonly wattHours = new EnergyDimension("Wh", new LinearUnitConverter(3600));

  public static readonly electronvolts = new EnergyDimension("eV", new LinearUnitConverter(1.60218e-19));

}
