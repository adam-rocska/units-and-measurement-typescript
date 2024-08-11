import {Dimension} from "../../../dimension";
import {LinearUnitConverter} from "../../../unit-converters/linear-unit-converter";
import {ConcentrationMassSymbol} from "./concentration-mass-symbol";

export class ConcentrationMassDimension extends Dimension<ConcentrationMassSymbol> {
  public static readonly gramsPerLiter = new ConcentrationMassDimension("g/L", new LinearUnitConverter(1));

  public static readonly milligramsPerDeciliter = new ConcentrationMassDimension("mg/dL", new LinearUnitConverter(0.01));

}
