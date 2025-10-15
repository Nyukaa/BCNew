# ✏️ Notes Backend – Part 4

This project is part of the **Full Stack Open 2024** course (University of Helsinki).  
The goal is to build the backend for a **Notes application**. Users can manage notes and accounts, with data stored in **MongoDB**.

---

## 📚 Description

The Notes backend allows:

- CRUD operations for notes (create, read, update, delete)
- User management (create accounts, store hashed passwords)
- Token-based authentication for secure actions (e.g., creating a note)
- Validation and error handling
- Integration with a MongoDB database via **Mongoose**

The backend is designed to serve a frontend via a REST API and can also be deployed independently.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **Password Security:** bcrypt
- **Testing:** Node built-in test runner (`node:test`), Supertest, Assert
- **Environment Management:** dotenv

---

## 🚀 Features

✅ Users can register with username, password, and name  
✅ Passwords are hashed before storing in the database  
✅ Users can log in and receive a JWT token  
✅ Notes are linked to users and can be populated with user info  
✅ Create, read, update, delete notes  
✅ Token-based authentication ensures only authorized users can add or delete notes  
✅ Comprehensive backend tests using Node test runner and Supertest

---

## ⚙️ RESTful API Endpoints

### Notes

- `GET /api/notes` → fetch all notes (user info populated)
- `GET /api/notes/:id` → fetch a single note
- `POST /api/notes` → create a new note (requires `userId` and optional token)
- `PUT /api/notes/:id` → update a note
- `DELETE /api/notes/:id` → remove a note

### Users

- `GET /api/users` → fetch all users (notes populated)
- `POST /api/users` → create a new user with hashed password

### Login

- `POST /api/login` → authenticate a user and return JWT token

---

## 🧪 Testing

- Tests are written using **Node’s built-in test runner** (`node:test`) and **Supertest**
- Test coverage includes:
  - User creation, uniqueness validation, password validation
  - Note creation, retrieval, update, and deletion
  - Token authentication for secure note creation
- Example test commands:

```bash
# Run all tests
npm test

# Run specific test file
npm test -- tests/note_api.test.js
```

Database for testing is separate (TEST_MONGODB_URI) to avoid affecting production data

Before each test, the database is cleared for a clean state

## ❌ Error Handling

- Malformed IDs → 400 Bad Request

- Validation errors → 400 with error message

- Missing/invalid token → 401 Unauthorized

- Unknown endpoints → 404 Not Found

## 🎯 Learning Objectives

- Connect a backend to MongoDB using Mongoose

- Implement JWT-based authentication for secure operations

- Hash passwords using bcrypt

- Populate referenced documents with Mongoose (populate)

- Write comprehensive backend tests with Node test runner and Supertest

- Handle validation errors and proper HTTP status codes
