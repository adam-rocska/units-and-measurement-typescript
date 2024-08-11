import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {FrequencySymbol} from "./frequency-symbol";

export class FrequencyDimension extends Dimension<FrequencySymbol> {
  public static readonly terahertz = new FrequencyDimension("THz", new LinearUnitConverter(1000000000000));

  public static readonly gigahertz = new FrequencyDimension("GHz", new LinearUnitConverter(1000000000));

  public static readonly megahertz = new FrequencyDimension("MHz", new LinearUnitConverter(1000000));

  public static readonly kilohertz = new FrequencyDimension("kHz", new LinearUnitConverter(1000));

  public static readonly hertz = new FrequencyDimension("Hz", new LinearUnitConverter(1));

  public static readonly millihertz = new FrequencyDimension("mHz", new LinearUnitConverter(0.001));

  public static readonly microhertz = new FrequencyDimension("µHz", new LinearUnitConverter(0.000001));

  public static readonly nanohertz = new FrequencyDimension("nHz", new LinearUnitConverter(1e-9));

}
