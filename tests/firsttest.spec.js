// @ts-check
import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.js';
import {HomePage} from '../pages/HomePage.js';



test('Login', async ({ page }) => {
    test.setTimeout(10000); // Set timeout to 10 seconds
    const loginPage = new LoginPage(page);
    
    await loginPage.navigateToLogin();
    
    // Perform login
    await loginPage.login('unicodetest1', 'unicodetest1');
    
    // Verify that the logout link is visible after login
    const logoutLink = page.locator('a#logout2');
    await expect(logoutLink).toBeVisible();

    //Add a product to the cart
    const homepage = new HomePage(page);
    await homepage.selectProduct('Samsung galaxy s6');
    await homepage.addToCart();
    await homepage.navigateToCart();

});
