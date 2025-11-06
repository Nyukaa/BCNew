устанавливать Vitest и jsdom - инструменты для тестирования React-кода

```
cd frontend
npm install --save-dev vitest jsdom
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

После установки можешь добавить скрипт в frontend/package.json:

```
"scripts": {
  "test": "vitest run"
}
```

И запускать тесты командой:

```
npm test
```

add frontend/testSetup.js

```
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
cleanup();
});
```

имитации действий пользователя

```
npm install --save-dev @testing-library/user-event
```

Проверка покрытия тестами

```
При первом запуске Vitest спросит, нужно ли установить библиотеку:

@vitest/coverage-v8

npm test -- --coverage
```

.gitignore

```

coverage/
```
