# Contributing

This document explains how to contribute to this repository based on the current project configuration and CI rules.

## Development And Quality Expectations

The repository includes automated quality checks and local scripts:

- Node.js version is defined in [.nvmrc](.nvmrc) (`22.12.0`).
- Engine compatibility is defined in [package.json](package.json).
- Formatting preferences are defined in [.editorconfig](.editorconfig) and [.prettierrc](.prettierrc).
- CI quality workflow is defined in [.github/workflows/quality.yml](.github/workflows/quality.yml).
- PR branch policy workflow is defined in [.github/workflows/pr-policy.yml](.github/workflows/pr-policy.yml).

Automated CI quality checks currently run:

- ESLint checks (`npm run lint`)
- Unit tests with coverage (`npm run test:ci`)
- Coverage threshold validation (`npm run check:coverage`)
- File naming validation (`npm run check:file-naming`)
- Production build (`npm run build`)

These checks are executed by `npm run quality:ci`.

## Naming Conventions Enforced In This Repository

### Angular Selector Naming

From [eslint.config.js](eslint.config.js):

- Component selectors:
- type: `element`
- prefix: `app`
- style: `kebab-case`
- Directive selectors:
- type: `attribute`
- prefix: `app`
- style: `camelCase`

### TypeScript Naming

From [eslint.config.js](eslint.config.js):

- Default identifiers: `camelCase`
- Type-like identifiers (classes, interfaces, types, enums): `PascalCase`
- Leading underscore is allowed for default identifiers.

### File Naming

From [scripts/check-file-naming.mjs](scripts/check-file-naming.mjs):

- Validated file types in `src`: `.ts`, `.html`, `.scss`
- Expected format: lowercase kebab-case segments, optionally separated by dots
- Examples:
- `pokemon-card.component.ts`
- `app.routes.ts`
- `feature-list.page.html`

Excluded from this check:

- `src/index.html`
- `src/main.ts`
- `src/styles.scss`

## Branch Naming Convention

Branch names are validated in CI by [pr-policy.yml](.github/workflows/pr-policy.yml).

Required pattern:

`("fix"|"feature"|"devops"|"docs"|"release"|"chore")/issue-name`

Regex currently enforced:

`^(feature|fix|devops|docs|release|chore)/[A-Za-z0-9._-]+$`

Examples:

- `feature/pokedex-search`
- `fix/router-null-state`
- `devops/github-quality-pipeline`
- `docs/update-contributing-guide`
- `release/v1.0.0`
- `chore/dependency-updates`

## Pull Request Expectations

### Rules Currently Enforced By CI

- Branch naming is validated on PR events by [pr-policy.yml](.github/workflows/pr-policy.yml).
- Quality checks run on PRs via [quality.yml](.github/workflows/quality.yml) through `npm run quality:ci`.

### PR Title And PR Body

- PR title format is **not currently validated automatically** by repository workflows.
- PR body issue/ticket reference is **not currently validated automatically** by repository workflows.

Contributors should still keep PR titles and descriptions clear and include relevant context for reviewers.

### Before Merge

The repository runs automated quality checks in CI.  
Whether these checks are strictly blocking merge depends on GitHub branch protection/ruleset configuration.

## Local Quality Checks Before Opening A PR

Run the same checks locally before opening a PR:

```bash
npm run quality:local
```

Useful individual commands:

```bash
npm run lint
npm run test:ci
npm run check:coverage
npm run check:file-naming
npm run build
```

Coverage thresholds (default values) are enforced by [scripts/check-coverage.mjs](scripts/check-coverage.mjs):

- lines: `80`
- branches: `70`
- functions: `80`

They can be overridden with:

- `COVERAGE_LINES`
- `COVERAGE_BRANCHES`
- `COVERAGE_FUNCTIONS`

## External Requests Policy (Important)

External contributors must **not** open a new GitHub issue for feature requests, bug reports, or other requests.

Please contact maintainers by email instead:

- `corentinjere@gmail.com`
- `louis.tnlsvt@gmail.com`

## Contribution Workflow

1. Create a branch that matches the required pattern.
2. Implement your change.
3. Run local checks (`npm run quality:local`).
4. Open a Pull Request.
5. Ensure CI checks pass.
6. Address review feedback and update the PR as needed.

Repository checks and conventions are configuration-driven and may evolve with the tooling over time.
