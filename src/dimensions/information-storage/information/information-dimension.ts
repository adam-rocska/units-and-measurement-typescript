import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {InformationSymbol} from "./information-symbol";

export class InformationDimension extends Dimension<InformationSymbol> {
  public static readonly bits = new InformationDimension("b", new LinearUnitConverter(1));

  public static readonly bytes = new InformationDimension("B", new LinearUnitConverter(8));

  public static readonly kilobits = new InformationDimension("kb", new LinearUnitConverter(1000));

  public static readonly megabits = new InformationDimension("Mb", new LinearUnitConverter(1000e2));

  public static readonly gigabits = new InformationDimension("Gb", new LinearUnitConverter(1000e3));

  public static readonly terabits = new InformationDimension("Tb", new LinearUnitConverter(1000e4));

  public static readonly petabits = new InformationDimension("Pb", new LinearUnitConverter(1000e5));

  public static readonly exabits = new InformationDimension("Eb", new LinearUnitConverter(1000e6));

  public static readonly zettabits = new InformationDimension("Zb", new LinearUnitConverter(1000e7));

  public static readonly yottabits = new InformationDimension("Yb", new LinearUnitConverter(1000e8));

  public static readonly kibibits = new InformationDimension("Kib", new LinearUnitConverter(1024));

  public static readonly kilobytes = new InformationDimension("KB", new LinearUnitConverter(8192));

  public static readonly mebibits = new InformationDimension("Mib", new LinearUnitConverter(1024e2));

  public static readonly megabytes = new InformationDimension("MB", new LinearUnitConverter(8192e2));

  public static readonly gibibits = new InformationDimension("Gib", new LinearUnitConverter(1024e3));

  public static readonly gigabytes = new InformationDimension("GB", new LinearUnitConverter(8192e3));

  public static readonly tebibits = new InformationDimension("Tib", new LinearUnitConverter(1024e4));

  public static readonly terabytes = new InformationDimension("TB", new LinearUnitConverter(8192e4));

  public static readonly pebibits = new InformationDimension("Pib", new LinearUnitConverter(1024e5));

  public static readonly petabytes = new InformationDimension("PB", new LinearUnitConverter(8192e5));

  public static readonly exbibits = new InformationDimension("Eib", new LinearUnitConverter(1024e6));

  public static readonly exabytes = new InformationDimension("EB", new LinearUnitConverter(8192e6));

  public static readonly zebibits = new InformationDimension("Zib", new LinearUnitConverter(1024e7));

  public static readonly zettabytes = new InformationDimension("ZB", new LinearUnitConverter(8192e7));

  public static readonly yobibits = new InformationDimension("Yib", new LinearUnitConverter(1024e8));

  public static readonly yottabytes = new InformationDimension("YB", new LinearUnitConverter(8192e8));

}
