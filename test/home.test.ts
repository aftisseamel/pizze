import { expect, test } from '@playwright/test';

test.describe('Bella Napoli', () => {
  test('should navigate to the home page', async ({ page }) => {
    await page.goto('https://artred02.fr/');
    await expect(page).toHaveTitle(/Bella Napoli/);
  });

  test('should navigate to the menu section', async ({ page }) => {
    await page.goto('https://artred02.fr/');
    await page.click('a[href="#menu"]');
    const menuSection = await page.locator('h2:has-text("Notre Menu")');
    await expect(menuSection).toBeVisible();
  });

  test('should filter vegetarian pizzas', async ({ page }) => {
    await page.goto('https://artred02.fr/');
    await page.click('button:has-text("Pizzas")');
    await page.selectOption('select', 'vegetarian');
    const vegetarianPizza = await page.locator('h3:has-text("Margherita")');
    await expect(vegetarianPizza).toBeVisible();
  });
  test('should navigate to the backoffice', async ({ page }) => {
    await page.goto('https://backoffice.artred02.fr/api/getProducts');
    await expect(page).toHaveTitle(/Backoffice/);
  });
});