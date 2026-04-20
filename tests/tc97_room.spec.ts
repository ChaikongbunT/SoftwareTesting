// Napat
import { test, expect } from '@playwright/test';

test('TC97: show error when room type is not selected', async ({ page }) => {
    await page.getByRole('button', { name: 'เปิดเมนู' }).click();
    await page.getByRole('link', { name: 'จัดห้องสอบ' }).click();

    await page.getByRole('button', { name: 'เพิ่มห้องสอบ' }).click();
    await page.getByRole('button', { name: 'เพิ่มห้องใหม่' }).click();

    await page.getByRole('textbox', { name: 'ชื่อห้อง' }).fill('1639 ว.2');
    await page.getByRole('spinbutton', { name: 'ความจุ (คน)' }).fill('25');

    await page.getByRole('button', { name: 'บันทึก' }).click();

    await expect(page.getByText('กรุณากรอกข้อมูลให้ครบทุกช่อง')).toBeVisible();
});