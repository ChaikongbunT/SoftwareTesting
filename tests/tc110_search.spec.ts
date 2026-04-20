// Napat
import { test, expect } from '@playwright/test';

test('TC110: select Admin user should show only Admin user', async ({ page }) => {
  await page.getByRole('button', { name: 'เปิดเมนู' }).click();
  await page.getByRole('link', { name: 'ให้สิทธิ์กรรมการห้องอำนวยการสอบ' }).click();

  // 1. คลิกเปิด Dropdown
  await page.locator('.css-8mmkcg').first().click();

  // 2. แก้จุดที่พัง: ระบุข้อความเต็มๆ รวมวงเล็บ และใช้ exact: true
  // เพื่อให้มั่นใจว่าคลิกตัวเลือกที่ถูกต้อง
  await page.getByText('Admin user (วิชาวิทยาศาสตร์ทั่วไป)', { exact: true }).first().click();

  // --- ส่วนการตรวจสอบ (Expect) ---
  
  // รอให้ข้อมูลในตารางโหลดเสร็จ (เช็คว่าแถวแรกปรากฏขึ้นมา)
  const rows = page.locator('table tbody tr');
  await expect(rows.first()).toBeVisible();
  
  // ตรวจสอบว่าในตาราง "ทุกแถว" ต้องมีข้อความ "Admin user"
  // (ตามที่คุณต้องการให้ตรวจสอบข้อมูลหลัง filter)
  const rowCount = await rows.count();
  for (let i = 0; i < rowCount; i++) {
    await expect(rows.nth(i)).toContainText('Admin user');
  }
});