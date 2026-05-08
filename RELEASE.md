# 1.2.0

Adds a public `proportion` operation for calculating numeric ratios between
measurements, including compatible unit conversion when dimension information
is available.

## Major Changes

- No major changes were made.

## Minor Changes

- Added `proportion` to
  `@adam-rocska/units-and-measurement/operations`.
- Same-unit measurements are compared directly regardless of representation,
  including string, tuple, object, and dimension measurements.
- Different-unit measurements are converted before calculating the ratio when
  at least one side is a dimension measurement and both units belong to the
  same dimension.
- Unsupported different-unit plain measurements and incompatible dimension
  measurements return `undefined` instead of guessing at a conversion.

## Patch Changes

- Added branch-complete unit coverage for `proportion`, including same-unit
  representations, conversion from either side, incompatible dimensions, and
  zero-denominator behavior.
- Added a user-facing proportionality example suite covering plain
  measurements, built-in dimension conversions, and unsupported conversions.
- Updated the README, usage guide, and package description to document ratio
  operations.
