```
npm init playwright@latest
```

i added for tests

"start:test": "cross-env NODE_ENV=test node --watch index.js",

```
npm install cross-env --save-dev
```

Playwright не запускает сервер сам.
перед запуском тестов

```

# в одном терминале
npm run start:test   # запустить backend в режиме test

# в другом
npm run dev          # запустить frontend (Vite)
```

из папки e2e-tests:

```
npx playwright test
or
npx playwright test --project=chromium

```

Посмотреть отчёт (report)

```
npx playwright show-report
```

just one test

```
npm test -- -g "login fails with wrong password"

```
