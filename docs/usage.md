# Usage Guide

This guide shows the main ways to represent measurements and the helpers that
work across those representations.

## Measurement Shapes

The root package exports representation namespaces for strings, tuples, and
objects.

```typescript
import {
  object,
  string,
  tuple,
  unit,
  value,
} from "@adam-rocska/units-and-measurement";

const cssWidth = string.measurement(320, "px");
const chartPoint = tuple.measurement(12, "ms");
const payloadSize = object.measurement(4, "kB");

console.log(value(cssWidth), unit(cssWidth));
console.log(value(chartPoint), unit(chartPoint));
console.log(value(payloadSize), unit(payloadSize));
```

String measurements are literal strings, tuple measurements are readonly
`[value, unit]` tuples, and object measurements expose `value` and `unit`
properties.

## Dimension Measurements

Dimension measurements are created by submodule factories. They carry
same-dimension conversion properties.

```typescript
import {
  centimeters,
  inches,
  meters,
  type Length,
} from "@adam-rocska/units-and-measurement/length";

const pageWidth: Length = inches(8.5);

console.log(pageWidth.in.value);
console.log(pageWidth.cm.value);
console.log(pageWidth.m.value);

const shortDistance = centimeters(12);
const longDistance = meters(3);

console.log(shortDistance.m.value);
console.log(longDistance.cm.value);
```

The object returned by `inches(8.5)` is still a measurement. It has `value` and
`unit`, and it also has conversion properties for every known length unit.

## Arithmetic

Arithmetic helpers convert compatible measurements to the first measurement's
unit before calculating. They return `undefined` when no common unit can be
found.

```typescript
import {unit, value} from "@adam-rocska/units-and-measurement";
import {add, divide, multiply, subtract} from "@adam-rocska/units-and-measurement/operations";
import {centimeters, meters} from "@adam-rocska/units-and-measurement/length";

const total = add(meters(2), centimeters(50));
const remaining = subtract(meters(2), centimeters(50));
const doubled = multiply(meters(2), 2);
const halved = divide(meters(2), 2);

if (total !== undefined) {
  console.log(value(total), unit(total));
}

if (remaining !== undefined) {
  console.log(value(remaining));
}

console.log(value(doubled), value(halved));
```

`add` and `subtract` accept two or more compatible measurements. `multiply`,
`divide`, `power`, `root`, and `logarithm` operate on one measurement and one
number.

## Proportions

`proportion` returns the numeric ratio between two measurements. Measurements
with the same unit are compared directly. Measurements with different units are
converted only when at least one input is a dimension measurement.

```typescript
import {string} from "@adam-rocska/units-and-measurement";
import {proportion} from "@adam-rocska/units-and-measurement/operations";
import {centimeters, meters} from "@adam-rocska/units-and-measurement/length";

console.log(proportion(string.measurement(640, "px"), string.measurement(320, "px")));
console.log(proportion(meters(2), centimeters(50)));
console.log(proportion(meters(2), string.measurement(50, "cm")));
console.log(proportion(string.measurement(1, "m"), string.measurement(100, "cm")));
```

The final example returns `undefined`: plain measurements with different units
are not converted for `proportion` unless a dimension measurement provides the
conversion context.

## Comparisons

Comparison helpers also convert compatible measurements first. They return
`undefined` when the measurements cannot be converted to a common unit.

```typescript
import {
  areEqual,
  greaterThan,
  lessThanOrEqual,
} from "@adam-rocska/units-and-measurement/operations";
import {centimeters, meters} from "@adam-rocska/units-and-measurement/length";

console.log(areEqual(meters(1), centimeters(100)));
console.log(greaterThan(meters(2), centimeters(150)));
console.log(lessThanOrEqual(centimeters(50), meters(1)));
```

## Formatting Values

The root `toFixed` and `toPrecision` helpers preserve the measurement shape.
For dimension-specific typing, use the helpers exposed by the root `dimension`
namespace.

```typescript
import {dimension, toFixed} from "@adam-rocska/units-and-measurement";
import {inches} from "@adam-rocska/units-and-measurement/length";

const width = inches(8.5);
const genericRounded = toFixed(width.cm, 2);
const dimensionRounded = dimension.toFixed(width.cm, 2);

console.log(genericRounded);
console.log(dimensionRounded.value, dimensionRounded.unit);
```

## Custom Dimensions

Use `dimension.dimension` with conversion rules when the built-in dimensions do
not cover your domain.

```typescript
import {dimension as d} from "@adam-rocska/units-and-measurement";

type TimeSymbol = "s" | "min" | "h";

const time = d.dimension<TimeSymbol>({
  s: d.linearConversion(1),
  min: d.linearConversion(60),
  h: d.linearConversion(3600),
});

const buildTime = time.min(3);

console.log(buildTime.s.value);
console.log(buildTime.h.value);
```

For offset conversions, pass the constant as the second argument. Built-in
temperature conversions use this form.

```typescript
import {dimension as d} from "@adam-rocska/units-and-measurement";

type TemperatureSymbol = "K" | "C";

const temperature = d.dimension<TemperatureSymbol>({
  K: d.linearConversion(1, 0),
  C: d.linearConversion(1, 273.15),
});

console.log(temperature.C(0).K.value);
```
