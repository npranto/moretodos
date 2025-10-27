# MoreTodos

A modern, feature-rich todo application built with Next.js 16, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** 20.x or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**/ **pnpm**
- **Git** ([Download](https://git-scm.com/))
- **VS Code** or your preferred IDE (optional but recommended)

### Verify Installation

```bash
node --version  # Should be v20.x or higher
npm --version   # Should be 10.x or higher
git --version   # Should be 2.x or higher
```

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/moretodos.git
cd moretodos
```

### 2. Install Dependencies

```bash
npm ci
```

> **Note**: We use `npm ci` instead of `npm install` for faster, reliable, reproducible builds. This is also what our CI/CD pipeline uses.

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### 4. First Run Checklist

- [ ] Development server starts without errors
- [ ] Application loads in browser
- [ ] Hot reload works when you edit files
- [ ] All tests pass (see Testing section below)

## Available Scripts

| Script                 | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start development server with hot reload  |
| `npm run build`        | Build the application for production      |
| `npm start`            | Start production server (run after build) |
| `npm run lint`         | Run ESLint to check code quality          |
| `npm run format`       | Format code with Prettier                 |
| `npm run format:check` | Check if code is properly formatted       |
| `npm test`             | Run unit tests with Jest                  |
| `npm run test:watch`   | Run tests in watch mode                   |
| `npm run e2e:test`     | Run Playwright E2E tests                  |
| `npm run e2e:test:ui`  | Run E2E tests with interactive UI         |
| `npm run e2e:ci`       | Run E2E tests in CI mode                  |

## Development Workflow

### Making Changes

1. **Start the dev server**: `npm run dev`
2. **Edit files**: The application will automatically reload when you save changes
3. **Code formatting**: Code is automatically formatted on commit via Husky hooks
4. **Run tests**: Use `npm test` or `npm run test:watch` for unit tests

### Code Quality

This project enforces code quality through:

- **ESLint**: Catches potential errors and enforces coding standards
- **Prettier**: Automatically formats code for consistency
- **Husky**: Pre-commit hooks that run formatting and linting
- **lint-staged**: Only formats staged files for faster commits

## Testing

### Unit Tests

We use Jest and React Testing Library for unit testing:

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch
```

### E2E Tests

We use Playwright for end-to-end testing:

```bash
# Run E2E tests
npm run e2e:test

# Run E2E tests with interactive UI
npm run e2e:test:ui

# Run E2E tests in CI mode
npm run e2e:ci
```

### CI/CD Testing

Our GitHub Actions automatically run:

- **Unit tests** on every pull request
- **E2E tests** on every pull request
- Tests run in parallel for faster feedback

## Project Structure

```
moretodos/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript type definitions
├── e2e/                    # Playwright E2E tests
├── docs/                   # Project documentation
├── .github/workflows/      # GitHub Actions CI/CD
└── public/                # Static assets
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Testing**: Jest, React Testing Library, Playwright
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
- **Deployment**: Vercel

## Deployment Workflow

This project uses automatic deployments via Vercel with automated version bumping and Git tagging.

### How It Works

- **Preview Deployments**: Every pull request automatically gets a preview deployment URL from Vercel
- **Production Deployments**: Merging to the `master` branch triggers a production deployment
- **Version Bumping**: On merge to master, the version is automatically bumped based on PR labels
- **Git Tagging**: After version bump, a Git tag is created with format `v{version}` (e.g., `v1.0.0`)

### Version Bumping

Add one of the following labels to your PR title to control the version bump:

- `[version:major]` - Bumps major version (1.0.0 → 2.0.0)
- `[version:minor]` - Bumps minor version (1.0.0 → 1.1.0)
- `[version:patch]` - Bumps patch version (1.0.0 → 1.0.1)

**Default Behavior**: If no label is present, the version is bumped by patch version.

### Example Workflow

1. Create a PR with new features
2. Add `[version:minor]` to the PR title
3. Merge the PR to master
4. GitHub Actions automatically bumps version (e.g., 1.0.0 → 1.1.0)
5. A Git tag `v1.1.0` is created
6. Vercel deploys the new version to production

## Troubleshooting

### Common Issues

#### Port 3000 Already in Use

```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

#### Node Version Mismatch

```bash
# Check your Node version
node --version

# If you need to switch versions, use nvm
nvm install 20
nvm use 20
```

#### Playwright Browser Installation Issues

```bash
# Install Playwright browsers
npx playwright install

# Install system dependencies (Linux)
npx playwright install-deps
```

#### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm ci
```

#### ESLint/Prettier Issues

```bash
# Fix auto-fixable ESLint issues
npm run lint -- --fix

# Format all files
npm run format
```

### Getting Help

If you encounter issues not covered here:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Playwright documentation](https://playwright.dev/)
3. Check existing [GitHub Issues](https://github.com/your-username/moretodos/issues)
4. Create a new issue with detailed error information

## Contributing

We welcome contributions! Here's how to get started:

### 1. Fork and Clone

```bash
git clone https://github.com/your-username/moretodos.git
cd moretodos
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

- Follow the existing code style (automatically enforced by Prettier)
- Write tests for new functionality
- Update documentation if needed

### 4. Test Your Changes

```bash
# Run unit tests
npm test

# Run E2E tests
npm run e2e:test

# Check code formatting
npm run format:check
```

### 5. Commit and Push

```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

- Use descriptive PR titles
- Add version labels if needed: `[version:major]`, `[version:minor]`, or `[version:patch]`
- Ensure all CI checks pass

### Code Style

- Code is automatically formatted with Prettier
- ESLint enforces coding standards
- Pre-commit hooks ensure code quality
- Follow TypeScript best practices

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/) - Learn React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS
- [Playwright Documentation](https://playwright.dev/) - Learn Playwright testing
