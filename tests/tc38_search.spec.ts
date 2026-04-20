// Chatmongkon
import { test, expect } from '@playwright/test';

test('TC-38: ลบรายวิชาค้นหาวิชาที่ไม่มีในระบบ', async ({ page }) => {
  await page.goto('https://project-superend-cen8.vercel.app/', );
  const USERNAME = 'Admin1';
  const PASSWORD = 'examroom@1234';

  await page.getByRole('textbox', { name: 'ใส่ชื่อบัญชีผู้ใช้' }).fill(USERNAME);
  await page.getByRole('textbox', { name: 'ใส่รหัสผ่านของคุณ' }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ล็อกอิน' }).click();

  await Promise.all([
        page.waitForURL(/.*Home/i, { timeout: 30000 }),
        page.getByRole('button', { name: 'ล็อกอิน' }).click(),
    ]);

  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'ดูรายละเอียดวิชา' }).click();
  await page.getByText('ค้นหารีเซ็ท').click();
  await expect(page.getByText('ไม่พบข้อมูลห้องสอบ')).toBeVisible();
});