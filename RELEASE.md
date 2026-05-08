# 1.1.0

Adds public dimension measurement types and broader built-in unit
normalization, while substantially improving documentation, executable user
examples, and pnpm 11 based project maintenance.

## Major Changes

- No major changes were made.

## Minor Changes

- Added exported dimension measurement type aliases for every built-in
  dimension module, such as `Length`, `Area`, `Volume`, `Temperature`,
  `Energy`, `Information`, and the electrical dimension types.
- Extended common-unit conversion so plain built-in measurements can be
  normalized across compatible units even when they are represented as
  strings, tuples, or objects instead of dimension measurements.
- Extended the arithmetic and comparison helpers that use common-unit
  conversion, such as `add`, `subtract`, `areEqual`, and ordering
  comparisons, to benefit from the broader built-in conversion support.

## Patch Changes

- Rewrote the main README around installation, package entry points,
  measurement representations, operations, built-in dimensions, and custom
  dimensions.
- Replaced the contribution guide with concrete local setup, pull request,
  test layout, commit style, and documentation expectations.
- Added dedicated usage, dimension reference, and development documentation
  under `docs/`.
- Added user-facing tests that double as package examples for measurement
  representations, built-in conversions, arithmetic, temperature offsets,
  custom dimensions, symbol predicates, formatting, non-length dimensions, and
  incompatible unit handling.
- Upgraded the expected package manager from pnpm `10.33.3` to pnpm `11.0.8`.
- Updated Node type definitions from `25.6.0` to `25.6.2`.
- Added pnpm workspace settings for pnpm 11, including explicit approval for
  the `@swc/core` build script and the existing `flatted` override.
- Updated CI and npm release workflows to use the pnpm version declared in
  `package.json` instead of pinning a second pnpm version in workflow YAML.
- Kept CI verification on Node `20`, `22`, and `24` while installing
  dependencies under Node `24`, which is required by pnpm `11`.
- Ignored the local `.npm-cache` directory used by package export validation.
