import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('quotes reading', async ({ page }) => {
	const quoteTextContainer = page.getByRole('heading', { level: 1 });
	const initialQuoteTextContent = (await quoteTextContainer.textContent()) as string;

	await expect(page.getByRole('time')).toBeVisible();

	const previousQuoteButton = page.getByRole('button', { name: 'Poprzedni cytat' });
	const nextQuoteButton = page.getByRole('button', { name: 'Następny cytat' });
	const currentQuoteIndicator = page.getByTestId('current-quote-indicator');

	await expect(previousQuoteButton).toBeDisabled();
	await expect(nextQuoteButton).toBeEnabled();
	await expect(currentQuoteIndicator).toContainText(/1 \/ \d/);

	await nextQuoteButton.click();

	await expect(previousQuoteButton).toBeEnabled();
	await expect(currentQuoteIndicator).toContainText(/2 \/ \d/);
	await expect(quoteTextContainer).not.toContainText(initialQuoteTextContent);

	await previousQuoteButton.click();

	await expect(previousQuoteButton).toBeDisabled();
	await expect(currentQuoteIndicator).toContainText(/1 \/ \d/);
	await expect(quoteTextContainer).toContainText(initialQuoteTextContent);
});

test('lempiank discoverability', async ({ page }) => {
	const instagramLink = page.getByRole('link', { name: 'Odwiedź Instagram Lempiank' });

	await expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/lempiank/');
	await expect(instagramLink.getByRole('img')).toBeVisible();
});
