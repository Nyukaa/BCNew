const loginWith = async (page, username, password) => {
  await page.getByRole("button", { name: "login" }).click(); // 2️⃣ Нажимаем кнопку "login"
  await page.getByLabel("username").fill(username); // 3️⃣ Вводим имя пользователя
  await page.getByLabel("password").fill(password); // 4️⃣ Вводим пароль
  await page.getByRole("button", { name: "login" }).click(); // 5️⃣ Нажимаем кнопку входа
};
const createNote = async (page, content) => {
  await page.getByRole("button", { name: "new note" }).click();
  await page.getByRole("textbox").fill(content);
  await page.getByRole("button", { name: "save" }).click();
};

export { loginWith, createNote };
