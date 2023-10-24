import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from './custom-world';

Given('User visits homepage', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('localhost:3000');
});

// When('User clicks the + button', async function (this: ICustomWorld) {
//   const page = this.page!;
//   const plusButton = await page.locator('[data-testid="increase"]');
//   await expect(plusButton).toBeVisible();
//   await plusButton.click();
// });

// Then(
//   'User sees the counter get increased',
//   async function (this: ICustomWorld) {
//     const page = this.page!;
//     const counterText = await page.locator('[data-testid="counter-text"]');
//     await expect(counterText).toHaveText('Count: 1');
//   }
// );
When(
  'User clicks the {string} button',
  async function (this: ICustomWorld, string: string) {
    const page = this.page!;
    const plusButton = await page.locator(`[data-testid="${string}"]`);
    await expect(plusButton).toBeVisible();
    await plusButton.click();
  }
);

Then(
  'User sees the counter get {string}d',
  async function (this: ICustomWorld, string: string) {
    const page = this.page!;
    if (string === 'increase') {
      const counterText = await page.locator(`[data-testid="counter-text"]`);
      await expect(counterText).toHaveText('Count: 1');
    }
    if (string === 'decrease') {
      const counterText = await page.locator(`[data-testid="counter-text"]`);
      await expect(counterText).toHaveText('Count: 0');
    }
  }
);
