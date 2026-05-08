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

# 1.0.1

Modernizes the package maintenance, validation, and publishing
tooling without changing the runtime API.

## Major Changes

- No major changes were made.

## Minor Changes

- No minor changes were made.

## Patch Changes

- Migrated the full test suite from Jest and SWC/Jest to Vitest `4.1.5`
  while preserving the existing assertions and test structure.
- Replaced the legacy ESLint configuration with ESLint `10.3.0` flat
  config while preserving the package lint rules.
- Upgraded the TypeScript build and validation toolchain, including
  TypeScript `6.0.3`, bunchee `6.10.0`, pnpm `10.33.3`, and current Node
  type definitions.
- Added explicit Vitest imports in tests instead of relying on global test
  APIs.
- Added dedicated `typecheck`, `test:watch`, and `test:coverage` scripts,
  and tightened `check` to run linting, type checking, and package export
  validation.
- Modernized CI with a Node `20`/`22`/`24` verification matrix and a separate
  quality job.
- Modernized the npm release workflow for GitHub release publishing and npm
  trusted publishing.
- Removed stale Jest package metadata and old package manager configuration.
- Cleared current dependency drift and npm audit findings.
- Refreshed package documentation and npm metadata for the modernized
  package setup.
