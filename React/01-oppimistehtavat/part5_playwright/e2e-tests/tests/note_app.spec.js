const { test, expect, describe, beforeEach } = require("@playwright/test");
const { createNote, loginWith } = require("./helper");

describe("Note app", () => {
  // 🧠 This part runs BEFORE every test inside 'Note app'
  beforeEach(async ({ page }) => {
    await page.goto("/"); //  1️⃣ Переходим на главную страницу перед каждым тестом
  });
  test("front page can be opened", async ({ page }) => {
    const locator = page.getByText("Notes");
    await expect(locator).toBeVisible();
    await expect(
      page.getByText(
        "Note app, Department of Computer Science, University of Helsinki 2025"
      )
    ).toBeVisible();
  });
  test("user can log in", async ({ page }) => {
    await loginWith(page, "mluukkai", "salainen");

    await expect(page.getByText("Matti Luukkainen logged in")).toBeVisible(); // 6️⃣ Проверяем, что вход выполнен
  });

  test("login fails with wrong password", async ({ page }) => {
    await loginWith(page, "mluukkai", "wrong");
    // 4️⃣ Находим элемент, где должно быть сообщение об ошибке
    const errorDiv = page.locator(".error");

    // 5️⃣ Проверяем, что текст ошибки действительно "wrong credentials"
    await expect(errorDiv).toContainText("wrong credentials");

    // 6️⃣ Проверяем, что у блока есть стиль рамки
    //await expect(errorDiv).toHaveCSS("border-style", "solid");

    // 7️⃣ Проверяем, что цвет текста красный
    await expect(errorDiv).toHaveCSS("color", "rgb(255, 0, 0)");

    // 8️⃣ Проверяем, что не появилось сообщение об успешном входе
    await expect(
      page.getByText("Matti Luukkainen logged in")
    ).not.toBeVisible();
  });

  describe("when logged in", () => {
    // Вложенный describe для тестов, требующих входа в систему
    beforeEach(async ({ page }) => {
      await loginWith(page, "mluukkai", "salainen");
      // Проверяем, что пользователь вошёл
      await expect(page.getByText("Matti Luukkainen logged in")).toBeVisible();
    });

    test("a new note can be created", async ({ page }) => {
      const uniqueNote = `a note created by playwright ${Date.now()}`;
      // Ждём появления кнопки
      await page
        .getByRole("button", { name: /new note/i })
        .waitFor({ state: "visible" });
      await createNote(page, uniqueNote);
      await expect(page.getByText(uniqueNote)).toBeVisible();
    });

    describe("and a note exists", () => {
      const uniqueNote = `a note created by playwright ${Date.now()}`;
      beforeEach(async ({ page }) => {
        await createNote(page, uniqueNote);
      });

      test("importance can be changed", async ({ page }) => {
        const importantButton = page
          .getByRole("listitem")
          .filter({ hasText: uniqueNote })
          .getByRole("button");
        await expect(importantButton).toHaveText("make not important");
        await importantButton.click();
        await expect(importantButton).toHaveText("make important");
      });
    });
  });
});
