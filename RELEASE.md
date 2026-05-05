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
