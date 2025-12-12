```
npm install --save-dev webpack webpack-cli
```

"scripts": {
"build": "webpack --mode=development"
}
Теперь можно запустить:

```
npm run build
```

Webpack соберёт: build/main.js

Webpack берёт ваш код и все импорты → превращает в один файл
Внутри bundled-файла код оборачивается в специальные функции Webpack
Вы не запускаете этот файл вручную — он подключается через HTML

После сборки Babel преобразует JSX в обычный JavaScript с использованием React.createElement

```
npm install @babel/core babel-loader @babel/preset-react --save-dev
```

плагин @babel/preset-env, который включает всё необходимое, чтобы преобразовать код с последними возможностями JavaScript в код, совместимый с ES5

```
npm install @babel/preset-env --save-dev
```

in Webpack и стили будут применены к приложению

```
 npm install style-loader css-loader --save-dev
```

Установка dev-server: for npm start

```
npm install --save-dev webpack-dev-server
```

---

Если в коде используются async/await, на старых браузерах могут быть ошибки, потому что они не поддерживают новые возможности JavaScript.

Решение: установить polyfills:

npm install core-js regenerator-runtime

И импортировать их в index.js:

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

---

Оптимизация — минификация

Минификация (minification) — это процесс уменьшения размера JavaScript-кода за счёт:
Удаления всех Переименования переменных и функций в короткие имена (например, counter → a)
браузеру загружается меньше байт, а код работает так же
"scripts": {
"build": "webpack --mode=production",
"start": "webpack serve --mode=development"
}
--mode=production → автоматически включает минификацию, оптимизацию
--mode=development → сборка без минификации для удобной отладки.

---

Если конфигурации для development и production сильно отличаются, можно создать два отдельных файла webpack.config.dev.js и webpack.config.prod.js и подключать нужный в зависимости от режима.

---

npm run server and npm start for local dev version

---

Локальный просмотр продакшн-версии
После сборки:
npm run build
Для локального просмотра можно использовать npx static-server в папке build.
По умолчанию приложение будет доступно на http://localhost:9080
.

---

npm install -g json-server
npm install axios
