// Napat
import { test, expect } from '@playwright/test';

test('TC94: show error when submitting empty form', async ({ page }) => {
    await page.getByRole('button', { name: 'เปิดเมนู' }).click();
    await page.getByRole('link', { name: 'จัดห้องสอบ' }).click();

    await page.getByRole('button', { name: 'เพิ่มห้องสอบ' }).click();
    await page.getByRole('button', { name: 'เพิ่มห้องใหม่' }).click();

    await page.getByRole('button', { name: 'บันทึก' }).click();

    await expect(page.getByText('กรุณากรอกข้อมูลให้ครบทุกช่อง')).toBeVisible();
});