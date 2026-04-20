// Napat
import { test, expect } from '@playwright/test';

test('TC111: search department should show result', async ({ page }) => {
    await page.getByRole('button', { name: 'เปิดเมนู' }).click();
    await page.getByRole('link', { name: 'ให้สิทธิ์กรรมการห้องอำนวยการสอบ' }).click();

    const searchBox = page.getByRole('textbox', { name: 'ค้นหาตามชื่อหรือภาควิชา' });

    await searchBox.fill('ภาควิชาคอมพิวเตอร์');

    await expect(page.getByRole('cell', { name: 'ภาควิชาคอมพิวเตอร์' })).toBeVisible();
});