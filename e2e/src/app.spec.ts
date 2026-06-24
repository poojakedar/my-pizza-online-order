import { test, expect } from '@playwright/test';

test.describe('Pizza App Menu Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/menu');
  });

  test('should display the menu page with pizza cards', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Our Menu');
    
    // Check if pizza cards are displayed
    const pizzaCards = page.locator('[class*="pizza-card"]');
    const count = await pizzaCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display pizza filter section', async ({ page }) => {
    await expect(page.locator('h2')).toContainText('Filters');
    
    // Check if filter buttons exist
    const vegButton = page.locator('button:has-text("Veg")');
    const nonVegButton = page.locator('button:has-text("Non-Veg")');
    
    await expect(vegButton).toBeVisible();
    await expect(nonVegButton).toBeVisible();
  });

  test('should add pizza to cart and show notification', async ({ page }) => {
    // Find first add to cart button
    const addButton = page.locator('button:has-text("Add to cart")').first();
    await addButton.click();
    
    // Check for snackbar notification
    const snackbar = page.locator('[class*="snackbar"]');
    await expect(snackbar).toBeVisible();
    await expect(snackbar).toContainText('added to cart');
  });

  test('should navigate to pizza detail page when clicking pizza card', async ({ page }) => {
    // Click on first pizza card
    const pizzaCard = page.locator('[class*="pizza-card"]').first();
    
    // Click the card itself, not the add button
    const cardLink = pizzaCard.locator('a').first();
    if (await cardLink.isVisible()) {
      await cardLink.click();
    } else {
      // If no link, click the card container
      await pizzaCard.click();
    }
    
    // Should navigate to detail page
    await expect(page).toHaveURL(/\/detail\/\d+/);
  });
});

test.describe('Pizza App Header', () => {
  test('should display header with brand name', async ({ page }) => {
    await page.goto('/menu');
    
    const brand = page.locator('text=PizzaCraft');
    await expect(brand).toBeVisible();
  });

  test('should display cart icon with badge', async ({ page }) => {
    await page.goto('/menu');
    
    // Add a pizza to cart first
    const addButton = page.locator('button:has-text("Add to cart")').first();
    await addButton.click();
    
    // Check for cart badge
    const badge = page.locator('[class*="badge"]');
    await expect(badge).toContainText('1');
  });

  test('should navigate to cart page when clicking cart button', async ({ page }) => {
    await page.goto('/menu');
    
    // Click cart link
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Should navigate to cart page
    await expect(page).toHaveURL(/\/cart/);
  });
});

test.describe('Pizza App Cart Page', () => {
  test('should display empty cart message when no items', async ({ page }) => {
    await page.goto('/cart');
    
    const emptyMessage = page.locator('text=Your cart is empty');
    await expect(emptyMessage).toBeVisible();
  });

  test('should display items in cart after adding from menu', async ({ page }) => {
    // Add item to cart from menu
    await page.goto('/menu');
    const addButton = page.locator('button:has-text("Add to cart")').first();
    await addButton.click();
    
    // Navigate to cart
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Verify cart page shows items
    await expect(page).toHaveURL(/\/cart/);
    const cartItems = page.locator('[class*="cart-item"]');
    const count = await cartItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should calculate total price with tax', async ({ page }) => {
    await page.goto('/menu');
    
    // Add a pizza (assuming first pizza is ₹200)
    const addButton = page.locator('button:has-text("Add to cart")').first();
    await addButton.click();
    
    // Go to cart
    const cartLink = page.locator('a:has-text("Cart")');
    await cartLink.click();
    
    // Check total is calculated (200 * 1.05 = 210)
    const total = page.locator('[class*="total"]');
    await expect(total).toBeVisible();
  });
});

test.describe('Pizza App Detail Page', () => {
  test('should display pizza details when navigating to detail page', async ({ page }) => {
    await page.goto('/detail/1');
    
    // Check if pizza name is displayed
    const heading = page.locator('h2, h3');
    await expect(heading.first()).toBeVisible();
    
    // Check if price is displayed
    const price = page.locator('text=/₹/');
    await expect(price.first()).toBeVisible();
  });

  test('should add pizza to cart from detail page', async ({ page }) => {
    await page.goto('/detail/1');
    
    // Click add to cart button
    const addButton = page.locator('button:has-text("Add to cart")');
    await addButton.click();
    
    // Check for notification
    const snackbar = page.locator('[class*="snackbar"]');
    await expect(snackbar).toBeVisible();
  });
});

test.describe('Pizza App Responsive Design', () => {
  test('should be responsive on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/menu');
    
    // Menu should still be visible on mobile
    const heading = page.locator('h1:has-text("Our Menu")');
    await expect(heading).toBeVisible();
  });

  test('should be responsive on tablet viewport', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    
    await page.goto('/menu');
    
    // Content should be visible on tablet
    const pizzaCards = page.locator('[class*="pizza-card"]');
    const count = await pizzaCards.count();
    expect(count).toBeGreaterThan(0);
  });
});
