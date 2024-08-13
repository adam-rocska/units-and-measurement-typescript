import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {PowerSymbol} from "./power-symbol";

export class PowerDimension extends Dimension<PowerSymbol> {
  public static readonly terawatts = new PowerDimension("TW", new LinearUnitConverter(1e12));

  public static readonly gigawatts = new PowerDimension("GW", new LinearUnitConverter(1e9));

  public static readonly megawatts = new PowerDimension("MW", new LinearUnitConverter(1000000.0));

  public static readonly kilowatts = new PowerDimension("kW", new LinearUnitConverter(1000.0));

  public static readonly watts = new PowerDimension("W", new LinearUnitConverter(1));

  public static readonly milliwatts = new PowerDimension("mW", new LinearUnitConverter(0.001));

  public static readonly microwatts = new PowerDimension("µW", new LinearUnitConverter(0.000001));

  public static readonly nanowatts = new PowerDimension("nW", new LinearUnitConverter(1e-9));

  public static readonly picowatts = new PowerDimension("pW", new LinearUnitConverter(1e-12));

  public static readonly femtowatts = new PowerDimension("fW", new LinearUnitConverter(1e-15));

  public static readonly horsepower = new PowerDimension("hp", new LinearUnitConverter(745.7));

}
