Когда ты запускаешь тесты через

```
node --test
```

встроенный тест-раннер Node.js перехватывает вывод в консоль (stdout/stderr). Поэтому твои console.log не появляются в терминале.

🔧 Что делать

Запуск с другим репортёром

```
node --test --test-reporter=spec
```

---4b

Supertest — это библиотека, которая позволяет отправлять HTTP-запросы к вашему Express-приложению прямо в тестах.

```
npm install --save-dev supertest

npm install --save-dev cross-env
```

Только тесты с .only будут выполнены.
test.only('notes are returned as json', async () => { ... })
⚠️ Важно удалить .only после отладки, иначе остальные тесты не будут запускаться.

```
npm test -- --test-only
```

Можно запускать тесты только из определённого файла:

```
npm test -- tests/note_api.test.js
```

Запуск по имени теста

````
npm test -- --test-name-pattern="a specific note is within the returned notes"
or
npm run test -- --test-name-pattern="notes"
```

````
