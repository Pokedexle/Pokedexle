# Pokedexle

Pokedexle is currently set up as a Pokédex-style and Wordle-style fan project repository, with an initial Angular workspace and contribution/quality governance.

## Status

- Version: `v0.0.0`
- Phase: initial bootstrap
- Current focus: repository setup, code quality automation, and contribution policies

## Purpose

At this stage, the repository is intended to:

- establish a clean technical foundation
- enforce basic quality checks in CI
- define contribution and community standards early

## Tech Stack

Based on current repository configuration:

- Angular 20.x
- TypeScript
- ESLint + angular-eslint
- Vitest (via Angular test tooling) with coverage
- GitHub Actions (quality pipeline and PR branch policy)
- Prettier

## Getting Started

### Prerequisites

- Node.js `22.x` (minimum `22.12.0`, see [.nvmrc](.nvmrc))

### Install

```bash
npm install
```

### Run Locally

```bash
npm run start
```

### Common Commands

```bash
npm run lint
npm run test
npm run test:ci
npm run quality:local
npm run build
```

## Quality And PR Policy

The repository includes automated checks and policies defined in:

- [.github/workflows/quality.yml](.github/workflows/quality.yml)
- [.github/workflows/pr-policy.yml](.github/workflows/pr-policy.yml)
- [eslint.config.js](eslint.config.js)
- [scripts/check-coverage.mjs](scripts/check-coverage.mjs)
- [scripts/check-file-naming.mjs](scripts/check-file-naming.mjs)

Current CI validates quality checks and branch naming on pull requests.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution rules, branch naming, and local quality expectations.

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community behavior standards.

## License

See [LICENSE.md](LICENSE.md).

## Initialization Note

This is an initialization-phase README for `v0.0.0`.  
Project scope and documentation are expected to evolve as implementation milestones are delivered.
