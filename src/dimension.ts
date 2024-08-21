import {Conversion, ConversionFactory, ConversionMap} from "./conversion";
import {Measurement} from "./measurement";
import {Unit} from "./unit";

export type DimensionMeasurement<
  UnitSymbol extends string,
  Value extends number = number
> = Measurement<UnitSymbol, Value>;

export type Dimension<
  UnitSymbol extends string
> = {[unitSymbol in UnitSymbol]: Unit<unitSymbol>;}

export function Dimension<
  UnitSymbol extends string,
  ConvertedBy extends ConversionFactory,
  UsingMap extends ConversionMap<ConvertedBy, UnitSymbol>
>(
  conversionFactory: ConvertedBy,
  conversionMap: UsingMap
): Dimension<UnitSymbol> {
  const conversions = new Map<UnitSymbol, Conversion>();
  const isBase = ([fromBase, toBase]: Conversion) => fromBase(1) === 1 && toBase(1) === 1;
  for (const [unit, ...parameters] of conversionMap) {
    conversions.set(unit, conversionFactory(...parameters));
    if (isBase(conversions.get(unit)!)) {
      /// TODO: Here I'll store the base unit for the default dimension creation process; will be used by the constructor and the factory cases.
    }
  }

  /// return dimension;
  return new Proxy({}, {
    has: (_, unit: UnitSymbol) => conversions.has(unit),
    isExtensible: () => false,
    preventExtensions: () => true,
    set: () => false,
    setPrototypeOf: () => false,
    deleteProperty: () => false,
    getPrototypeOf: () => null,
    defineProperty: () => false,
    ownKeys: () => Array.from(conversions.keys()),
    getOwnPropertyDescriptor: () => ({
      configurable: false,
      enumerable: true,
      writable: false,
      /// TODO: Normally it's supposed to either have only a getter or only a value. I must research whether it's a contract fuckup from the TS folks, or my understanding is wrong.
      get value() {return 123;},
      get: () => {}
    }),
    apply: (_, __, args) => {}, /// TODO: Default / Base factory implementation comes here.
    construct: (_, args) => ({}), /// TODO: Default / Base constructor implementation comes here.
    get: () => {} /// TODO: Dynamically resolve and return the specific unit's dimension
  });

}
