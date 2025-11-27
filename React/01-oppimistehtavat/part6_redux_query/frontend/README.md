```
npm install react-redux
```

---

**toolkit**

```
npm install @reduxjs/toolkit
```

for console

```
console.log(current(state))
```

for Chrome extantion

```
Redux DevTools is a Chrome
```

---

тестовую библиотеку Vitest для проекта

```
npm install --save-dev vitest
```

библиотеку deep-freeze, для проверки корректности определения редуктора как неизменяемой функции.

```
npm install --save-dev deep-freeze
```

````
npm test
```
with help of vitest extantion

```
npx vitest --ui
npm run test -- --watch
```

````

| **Fetch API**                                 | **Axios**                                              |
| --------------------------------------------- | ------------------------------------------------------ |
| ```javascript                                 | ```javascript                                          |
| const baseUrl = 'http://localhost:3001/notes' | import axios from 'axios';                             |
|                                               | const baseUrl = 'http://localhost:3001/notes';         |
| const getAll = async () => {                  | const getAll = async () => {                           |
| const response = await fetch(baseUrl);        | const response = await axios.get(baseUrl);             |
| if (!response.ok) {                           | // Axios automatically throws for non-2xx status codes |
| throw new Error('Failed to fetch notes');     | // No manual check needed                              |
| }                                             |                                                        |
| return await response.json();                 | return response.data;                                  |
| }                                             | }                                                      |
| export default { getAll };                    | export default { getAll };                             |
| ```                                           | ```                                                    |

### Key Differences

- **Error Handling**:
  - Fetch: requires manual checking of `response.ok` and throwing an error.
  - Axios: automatically throws for HTTP errors (status not in 2xx).
- **Response Data**:
  - Fetch: `response.json()` must be called to parse JSON.
  - Axios: JSON parsing is automatic, `response.data` contains parsed data.
- **Simplicity**: Axios requires fewer lines for common tasks like error handling and JSON parsing.
