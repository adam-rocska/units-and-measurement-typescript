# Contributing

Thanks for helping keep this package small, typed, and predictable. Changes
should preserve the existing public API unless the change is intentionally
breaking and documented as such.

## Local Setup

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm lint
pnpm check
```

The project targets Node.js 20 and newer, pnpm 10, TypeScript 6, ESLint 10,
and Vitest 4.

## Pull Request Expectations

- Keep changes focused. Separate feature work, documentation work, dependency
  updates, and test-only work when practical.
- Add tests for behavior changes. A bug fix should include a regression test
  that fails before the fix and passes after it.
- Add user tests for public API changes. User tests live under `test/user` and
  should double as realistic usage examples.
- Keep unit tests close to the module they cover under `test/unit`.
- Update README or docs when public behavior, entry points, examples, or
  supported dimensions change.
- Run `pnpm check` before publishing a branch when dependencies are available.

## Test Layout

| Change type | Expected test location |
| ----------- | ---------------------- |
| Bug fix | `test/bug/*` |
| Public API feature | `test/user/*` |
| Internal helper behavior | `test/unit/*` |
| Dimension unit or symbol change | `test/unit/<dimension>/*` and often `test/user/*` |

## Commit Style

Project history uses short emoji-prefixed commit subjects. A good subject is
specific, under 60 characters, and understandable without opening the diff.

Examples:

```text
✨ Add length measurement type alias
📝 Expand dimension usage docs
🧪 Cover common length operations
```

Use additional Markdown paragraphs in the commit body only when the details
will help reviewers understand the change.

## Documentation Style

Documentation should be accurate before it is clever.

- Prefer runnable examples over abstract explanations.
- Name the exact import path a user should use.
- Mention `undefined` return paths for operations that can fail to find a
  common unit.
- Keep generated or mechanical unit tables aligned with the implementation.
- Avoid promising runtime validation or parsing behavior that the code does
  not provide.
