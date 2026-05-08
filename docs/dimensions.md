# Dimension Reference

Built-in dimensions are published as package subpaths:

```typescript
import {meters, type Length} from "@adam-rocska/units-and-measurement/length";
```

Every dimension submodule follows the same export pattern:

- `<Name>Symbol`, a union of supported unit symbols.
- `<name>Symbols`, the readonly list of supported unit symbols.
- `is<Name>Symbol(candidate)`, a type predicate for unit symbols.
- `<Name>`, a measurement type alias for that dimension.
- `<name>`, the dimension object keyed by unit symbol.
- Named factories for the unit symbols, such as `meters` or `kilometers`.

The conversion base is the unit with coefficient `1` in the implementation.
Dimension measurements expose conversion properties for all units in the same
dimension.

```typescript
import {kilometers} from "@adam-rocska/units-and-measurement/length";

const distance = kilometers(1);

console.log(distance.kM.value);
console.log(distance.m.value);
console.log(distance.mi.value);
```

## Built-In Dimension Modules

| Import path suffix | Base unit | Dimension object | Measurement type |
| ------------------ | --------- | ---------------- | ---------------- |
| `/acceleration` | `m/s²` | `acceleration` | `Acceleration` |
| `/angle` | `°` | `angle` | `Angle` |
| `/area` | `m²` | `area` | `Area` |
| `/concentration-mass` | `g/L` | `concentrationMass` | `ConcentrationMass` |
| `/dispersion` | `ppm` | `dispersion` | `Dispersion` |
| `/duration` | `sec` | `duration` | `Duration` |
| `/electric-charge` | `C` | `electricCharge` | `ElectricCharge` |
| `/electric-current` | `A` | `electricCurrent` | `ElectricCurrent` |
| `/electric-potential-difference` | `V` | `electricPotentialDifference` | `ElectricPotentialDifference` |
| `/electric-resistance` | `Ω` | `electricResistance` | `ElectricResistance` |
| `/energy` | `J` | `energy` | `Energy` |
| `/frequency` | `Hz` | `frequency` | `Frequency` |
| `/illuminance` | `lx` | `illuminance` | `Illuminance` |
| `/information` | `b` | `information` | `Information` |
| `/length` | `m` | `length` | `Length` |
| `/mass` | `kg` | `mass` | `Mass` |
| `/power` | `W` | `power` | `Power` |
| `/pressure` | `N/m²` | `pressure` | `Pressure` |
| `/speed` | `m/s` | `speed` | `Speed` |
| `/temperature` | `K` | `temperature` | `Temperature` |
| `/volume` | `L` | `volume` | `Volume` |

## Import Examples

```typescript
import {liters} from "@adam-rocska/units-and-measurement/volume";
import {kilograms} from "@adam-rocska/units-and-measurement/mass";
import {watts} from "@adam-rocska/units-and-measurement/power";

const bottle = liters(2);
const packageMass = kilograms(1.2);
const draw = watts(65);

console.log(bottle.mL.value);
console.log(packageMass.g.value);
console.log(draw.kW.value);
```

## Symbol Predicates

Symbol predicates are useful at runtime before accepting user-provided unit
names.

```typescript
import {
  isLengthSymbol,
  length,
  meters,
  type LengthSymbol,
} from "@adam-rocska/units-and-measurement/length";

function makeLength(value: number, unit: string) {
  if (!isLengthSymbol(unit)) return undefined;

  const safeUnit: LengthSymbol = unit;
  return length[safeUnit](value);
}
```

## Temperature

Temperature uses offset conversions. The base unit is Kelvin, while Celsius,
Fahrenheit, and Rankine use constants in addition to coefficients.

```typescript
import {celsius, fahrenheit, kelvin} from "@adam-rocska/units-and-measurement/temperature";

console.log(celsius(0).K.value);
console.log(fahrenheit(32)["°C"].value);
console.log(kelvin(273.15)["°F"].value);
```

## Common-Unit Conversion

Operations can convert measurements that belong to the same built-in
dimension, even when the inputs are plain strings, tuples, or objects.

```typescript
import {object, value} from "@adam-rocska/units-and-measurement";
import {toCommonUnit} from "@adam-rocska/units-and-measurement/operations";

const result = toCommonUnit(
  object.measurement(1, "m"),
  object.measurement(25, "cm")
);

if (result !== undefined) {
  console.log(result.map(value));
}
```
