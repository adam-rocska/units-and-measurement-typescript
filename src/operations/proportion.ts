import * as dimension from "../dimension";
import {type Measurement} from "../measurement";
import {unit} from "../unit";
import {value} from "../value";
import {toCommonUnit} from "./to-common-unit";

/**
 * Returns the ratio between two compatible measurements.
 *
 * Measurements with the same unit are compared directly. Measurements with
 * different units are converted only when at least one input is a dimension
 * measurement.
 */
export function proportion<
  NumeratorUnit extends string,
  DenominatorUnit extends string
>(
  numerator: Measurement<NumeratorUnit>,
  denominator: Measurement<DenominatorUnit>
): number | undefined {
  const numeratorUnit: string = unit(numerator);
  const denominatorUnit: string = unit(denominator);

  if (numeratorUnit === denominatorUnit) {
    return value(numerator) / value(denominator);
  }

  if (!dimension.isMeasurement(numerator) && !dimension.isMeasurement(denominator)) {
    return undefined;
  }

  const commonUnit = toCommonUnit<NumeratorUnit | DenominatorUnit>(
    numerator,
    denominator
  );
  if (commonUnit === undefined) return undefined;

  return value(commonUnit[0]!) / value(commonUnit[1]!);
}
