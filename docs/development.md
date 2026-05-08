# Development Guide

This project is a TypeScript package with modular entry points for generic
measurements, operations, and built-in dimensions.

## Toolchain

- Node.js 20 or newer.
- pnpm 10.
- TypeScript 6.
- Vitest 4.
- ESLint 10 flat config.
- bunchee for package builds.
- `@arethetypeswrong/cli` for package export validation.

## Useful Commands

```bash
pnpm install
pnpm test
pnpm test:watch
pnpm test:coverage
pnpm typecheck
pnpm lint
pnpm check
pnpm build
```

`pnpm check` is the broadest local validation command. It runs linting, both
TypeScript projects, and package type export checks.

## Source Layout

| Path | Purpose |
| ---- | ------- |
| `src/index.ts` | Root package exports. |
| `src/string` | String measurement representation. |
| `src/tuple` | Tuple measurement representation. |
| `src/object` | Object measurement representation. |
| `src/dimension` | Generic dimension creation and conversion support. |
| `src/operations` | Arithmetic, comparison, and common-unit operations. |
| `src/<dimension>` | Built-in dimension module. |
| `test/unit` | Module-level unit tests. |
| `test/user` | User-facing examples and UAT-style tests. |

## Adding or Changing a Dimension

1. Update `src/<dimension>/symbols.ts` with the supported unit symbols and
   predicate.
2. Update `src/<dimension>/dimension.ts` with conversion rules, the dimension
   object, a measurement type alias, and named factory aliases.
3. Add or update unit tests under `test/unit/<dimension>`.
4. Add a user-facing example under `test/user` when the public usage pattern
   changes.
5. Update README or `docs/dimensions.md` when entry points, base units, or
   examples change.

## Operations Behavior

`add`, `subtract`, comparisons, and `toCommonUnit` look for a shared dimension.
They can use conversion alternatives attached to dimension measurements or the
package's built-in dimensions. If a common unit cannot be found, they return
`undefined` instead of guessing.

Single-measurement arithmetic helpers such as `multiply`, `divide`, `power`,
`root`, and `logarithm` preserve the input measurement's representation and
unit.

## Documentation Checks

Markdown is not compiled by the package build, so examples need manual care:

- Prefer examples that mirror `test/user`.
- Use exported package paths, not internal `src` paths.
- Mention failure cases where functions can return `undefined`.
- Keep unit symbols exactly aligned with `symbols.ts`.
