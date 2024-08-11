import defaultLocale from "./default-locale";
import {Unit} from "./unit";
import {UnitConverter} from "./unit-converter";

/**
 * An abstract class representing a dimension of measurement.
 */
export abstract class Dimension<Symbol extends string> extends Unit<Symbol> {
  /**
   * The converter for this dimension.
   */
  public readonly converter: UnitConverter;

  /**
   * The locale to use for human-readable representations
   * of this dimension.
   *
   * It's by design mutable so that it can be changed at runtime!
   */
  public locale: Intl.Locale = defaultLocale;

  /**
   * Creates a new dimension.
   * @param symbol  The symbol for the dimension.
   * @param converter  The converter for the dimension.
   */
  public constructor(
    symbol: Symbol,
    converter: UnitConverter,
  ) {
    super(symbol);
    this.converter = converter;
  }
}