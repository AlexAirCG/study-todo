import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Текст задачи").click();
  await page.getByPlaceholder("Текст задачи").fill("hello");
  await page.getByRole("button", { name: "Добавить" }).click();
  await page.getByPlaceholder("Текст задачи").fill("how are you?");
  await page.getByRole("button", { name: "Добавить" }).click();
  await page.getByRole("button", { name: "Done" }).first().click();
  await page.getByRole("button", { name: "Done" }).nth(3).click();
});
