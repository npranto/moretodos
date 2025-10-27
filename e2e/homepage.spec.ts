import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the main heading and navigation', async ({ page }) => {
    await page.goto('/');

    // Check that the main heading is visible
    await expect(
      page.getByRole('heading', { name: 'MoreTodos' })
    ).toBeVisible();

    // Check that navigation buttons are present
    await expect(page.getByRole('link', { name: 'Todos' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
  });

  test('should display component examples section', async ({ page }) => {
    await page.goto('/');

    // Check that the component examples section exists
    await expect(
      page.getByRole('heading', { name: 'Component Examples' })
    ).toBeVisible();

    // Check that buttons with different variants are present
    await expect(page.getByRole('button', { name: 'Primary' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Outline' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Secondary' })).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Test Todos navigation
    await page.getByRole('link', { name: 'Todos' }).click();
    await expect(page).toHaveURL('/todos');

    // Go back to homepage
    await page.goto('/');

    // Test Projects navigation
    await page.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL('/projects');
  });

  test('should be responsive and load without errors', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: 'MoreTodos' })
    ).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await expect(
      page.getByRole('heading', { name: 'MoreTodos' })
    ).toBeVisible();
  });
});
