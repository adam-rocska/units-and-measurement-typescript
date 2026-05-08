# TypeScript Units and Measurement

[![NPM Version](https://img.shields.io/npm/v/@adam-rocska/units-and-measurement.svg)](https://www.npmjs.com/package/@adam-rocska/units-and-measurement)
[![License](https://img.shields.io/npm/l/@adam-rocska/units-and-measurement)](https://github.com/adam-rocska/units-and-measurement-typescript/blob/master/LICENSE)

`@adam-rocska/units-and-measurement` is a TypeScript library for
representing measurements, converting between known units, and comparing or
combining compatible measurements without repeating conversion code.

It supports four measurement shapes:

- String measurements such as `"15px"`.
- Tuple measurements such as `[15, "px"]`.
- Object measurements such as `{ value: 15, unit: "px" }`.
- Dimension measurements such as `inches(11)`, with same-dimension conversion
  properties like `.cm`, `.m`, and `.ft`.

## Installation

```bash
pnpm add @adam-rocska/units-and-measurement
```

```bash
npm install @adam-rocska/units-and-measurement
```

The package targets Node.js 20 and newer and ships TypeScript declarations.

## Quick Start

```typescript
import {dimension} from "@adam-rocska/units-and-measurement";
import {add, areEqual} from "@adam-rocska/units-and-measurement/operations";
import {
  centimeters,
  inches,
  meters,
  type Length,
} from "@adam-rocska/units-and-measurement/length";

const pageWidth: Length = inches(8.5);
const margin = centimeters(2);

console.log(pageWidth.cm.value);
console.log(pageWidth.cm.unit);

const usableWidth = add(pageWidth, margin);

if (usableWidth !== undefined && dimension.isMeasurement(usableWidth)) {
  console.log(dimension.toFixed(usableWidth.cm, 2).value);
}

if (areEqual(meters(1), centimeters(100))) {
  console.log("Same length.");
}
```

## Package Entry Points

Use the root package for generic measurement helpers and representation
namespaces:

```typescript
import {
  object,
  string,
  tuple,
  unit,
  value,
} from "@adam-rocska/units-and-measurement";

const asString = string.measurement(12, "px");
const asTuple = tuple.measurement(12, "px");
const asObject = object.measurement(12, "px");

console.log(value(asString), unit(asTuple), asObject.value);
```

Use the operations submodule for arithmetic, comparison, and common-unit
conversion:

```typescript
import {add, greaterThan, toCommonUnit} from "@adam-rocska/units-and-measurement/operations";
import {centimeters, meters} from "@adam-rocska/units-and-measurement/length";

const total = add(meters(2), centimeters(50));
const normalized = toCommonUnit(meters(2), centimeters(50));

console.log(total);
console.log(normalized);
console.log(greaterThan(meters(2), centimeters(50)));
```

Use dimension submodules when you want ready-made unit conversion factories:

```typescript
import {kilometers, meters} from "@adam-rocska/units-and-measurement/length";
import {celsius, fahrenheit} from "@adam-rocska/units-and-measurement/temperature";

console.log(kilometers(1).m.value);
console.log(meters(1609.34).mi.value);
console.log(celsius(0).K.value);
console.log(fahrenheit(32)["°C"].value);
```

## Built-In Dimensions

Each dimension submodule exports:

- A symbol union type, such as `LengthSymbol`.
- A symbol list, such as `lengthSymbols`.
- A symbol predicate, such as `isLengthSymbol`.
- A dimension measurement type, such as `Length`.
- The dimension object, such as `length`.
- Named factory aliases, such as `meters`, `inches`, and `centimeters`.

Available dimension entry points:

| Import path suffix | Dimension object | Measurement type |
| ------------------ | ---------------- | ---------------- |
| `/acceleration` | `acceleration` | `Acceleration` |
| `/angle` | `angle` | `Angle` |
| `/area` | `area` | `Area` |
| `/concentration-mass` | `concentrationMass` | `ConcentrationMass` |
| `/dispersion` | `dispersion` | `Dispersion` |
| `/duration` | `duration` | `Duration` |
| `/electric-charge` | `electricCharge` | `ElectricCharge` |
| `/electric-current` | `electricCurrent` | `ElectricCurrent` |
| `/electric-potential-difference` | `electricPotentialDifference` | `ElectricPotentialDifference` |
| `/electric-resistance` | `electricResistance` | `ElectricResistance` |
| `/energy` | `energy` | `Energy` |
| `/frequency` | `frequency` | `Frequency` |
| `/illuminance` | `illuminance` | `Illuminance` |
| `/information` | `information` | `Information` |
| `/length` | `length` | `Length` |
| `/mass` | `mass` | `Mass` |
| `/power` | `power` | `Power` |
| `/pressure` | `pressure` | `Pressure` |
| `/speed` | `speed` | `Speed` |
| `/temperature` | `temperature` | `Temperature` |
| `/volume` | `volume` | `Volume` |

More detail is available in [docs/dimensions.md](docs/dimensions.md).

## Custom Dimensions

Custom dimensions can be created from conversion rules. The conversion base is
the unit whose coefficient is `1`.

```typescript
import {dimension as d} from "@adam-rocska/units-and-measurement";

type CurrencySymbol = "USD" | "cent";

const currency = d.dimension<CurrencySymbol>({
  USD: d.linearConversion(1),
  cent: d.linearConversion(0.01),
});

const invoiceTotal = currency.USD(19.99);

console.log(invoiceTotal.cent.value);
```

## Documentation

- [Usage guide](docs/usage.md)
- [Dimension reference](docs/dimensions.md)
- [Development guide](docs/development.md)
- [Contribution guide](CONTRIBUTING.md)

## Development

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm lint
pnpm check
pnpm build
```

`pnpm check` runs linting, TypeScript checks, and package export validation.
