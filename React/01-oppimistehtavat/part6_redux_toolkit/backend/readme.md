allows us to generate JSON web tokens.

```
npm install jsonwebtoken
```

Для хэширования используем пакет bcrypt:

```

npm install bcrypt

```

My users:

```
http://localhost:3001/api/login

{
  "username": "anna",
  "password": "secret123"
}

 or

{
  "username": "Alex",
  "name": "Alex I",
  "password": "secret123"
}
```

Создай пользователя

```
http://localhost:3001/api/users
{
"username": "anna",
"name": "Anna Shitikova",
"password": "secret123"
}
```

Создай заметку

```
http://localhost:3001/api/notes/
{
  "content": "This is my first note",
  "important": true,
  "userId": "670c5f3e28e9b0aa9f15d4f9"
}
вместо этого ID вставь реальный id
```

Сервер проверяет данные, создаёт JWT, отправляет токен, Клиент использует токен

```
http://localhost:3001/api/login

{
"username": "anna",
"password": "secret123"
}
```
