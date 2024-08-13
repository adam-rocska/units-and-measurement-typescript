import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {MassSymbol} from "./mass-symbol";

export class MassDimension extends Dimension<MassSymbol> {
  public static readonly kilograms = new MassDimension("kg", new LinearUnitConverter(1.0));

  public static readonly grams = new MassDimension("g", new LinearUnitConverter(0.001));

  public static readonly decigrams = new MassDimension("dg", new LinearUnitConverter(0.0001));

  public static readonly centigrams = new MassDimension("cg", new LinearUnitConverter(0.00001));

  public static readonly milligrams = new MassDimension("mg", new LinearUnitConverter(0.000001));

  public static readonly micrograms = new MassDimension("µg", new LinearUnitConverter(1e-9));

  public static readonly nanograms = new MassDimension("ng", new LinearUnitConverter(1e-12));

  public static readonly picograms = new MassDimension("pg", new LinearUnitConverter(1e-15));

  public static readonly ounces = new MassDimension("oz", new LinearUnitConverter(0.0283495));

  public static readonly pounds = new MassDimension("lb", new LinearUnitConverter(0.453592));

  public static readonly stones = new MassDimension("st", new LinearUnitConverter(0.157473));

  public static readonly metricTons = new MassDimension("t", new LinearUnitConverter(1000));

  public static readonly shortTons = new MassDimension("ton", new LinearUnitConverter(907.185));

  public static readonly carats = new MassDimension("ct", new LinearUnitConverter(0.0002));

  public static readonly ouncesTroy = new MassDimension("oz t", new LinearUnitConverter(0.03110348));

  public static readonly slugs = new MassDimension("slug", new LinearUnitConverter(14.5939));

}
