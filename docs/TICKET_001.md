# Ticket #1: Initial Next.js Project Setup

## Phase 1: Project Setup & Foundation

### Description

Set up the foundational Next.js project with all necessary configurations, tooling, and development environment.

### Tasks

1. ✅ Initialize Next.js 14+ project with App Router
2. ✅ Configure TypeScript with strict mode
3. ✅ Set up ESLint and Prettier
4. ✅ Create basic folder structure (/app, /components, /lib, /types)
5. ✅ Set up Tailwind CSS for styling
6. ✅ Configure path aliases (@/ for imports)
7. ✅ Install testing dependencies (@testing-library/react, @testing-library/jest-dom, jest, @playwright/test) and configure Jest with Next.js test utilities
8. ✅ Set up Prettier configuration (.prettierrc, .prettierignore)
9. ✅ Install and configure Husky for git hooks, set up lint-staged for pre-commit code quality
10. ✅ Add in Github Actions to run Unit Tests and e2e tests as 2 separate actions that run synchronously automatically on pull request creation.
11. Setup automatic deployments via Vercel, auto bump version on merge to master, auto tag creation based on bump version, i,e., "v1.0.0", create preview links on pull requests and have master branch changes deployed to production site
12. [SKIP] Install and configure commitlint for conventional commits
13. ✅ Create .env.example with all required variables
14. [SKIP] Set up environment variable validation with Zod
15. Create comprehensive README with setup instructions
16. Add NPM scripts for lint, format, test, type-check
17. Configure .vscode/settings.json for consistent IDE experience

### Priority

High - Foundation ticket

### Dependencies

None

### Estimated Effort

4-6 hours
