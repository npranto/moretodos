This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment Workflow

This project uses automatic deployments via Vercel with automated version bumping and Git tagging.

### How It Works

- **Preview Deployments**: Every pull request automatically gets a preview deployment URL from Vercel
- **Production Deployments**: Merging to the `master` branch triggers a production deployment
- **Version Bumping**: On merge to master, the version is automatically bumped based on PR labels
- **Git Tagging**: After version bump, a Git tag is created with format `v{version}` (e.g., `v1.0.0`)

### Version Bumping

Add one of the following labels to your PR to control the version bump:

- `version:major` - Bumps major version (1.0.0 → 2.0.0)
- `version:minor` - Bumps minor version (1.0.0 → 1.1.0)
- `version:patch` - Bumps patch version (1.0.0 → 1.0.1)

**Default Behavior**: If no label is present, the version is bumped by patch version.

### Example Workflow

1. Create a PR with new features
2. Add `version:minor` label to the PR
3. Merge the PR to master
4. GitHub Actions automatically bumps version (e.g., 1.0.0 → 1.1.0)
5. A Git tag `v1.1.0` is created
6. Vercel deploys the new version to production
