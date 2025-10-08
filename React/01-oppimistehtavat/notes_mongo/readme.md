# ✏️ Notes Frontend – Full Stack

This project is part of the **Full Stack Open 2024** course (University of Helsinki).  
The goal is to build a simple full-stack notes application. Users can view, add, update, and delete notes, with data stored on a MongoDB database via a separate backend.
[Notes Demo](https://notes-with-mongo.onrender.com)

---

## 📚 Description

The Notes app allows users to:

- View a list of notes
- Add new notes
- Update existing notes (e.g., mark as important)
- Delete notes
- Receive notifications for successful operations or errors (e.g., validation failures, network errors)

The frontend interacts with a backend server via **REST API** and updates in real time.

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript, HTML5, CSS3, Vite
- **Backend:** Express.js (Node.js)
- **Database:** MongoDB (via Mongoose, backend)
- **HTTP Client:** Axios for API requests

---

## 🚀 Features

✅ Display a list of all notes  
✅ Add new notes with optional "important" flag  
✅ Update notes to toggle importance  
✅ Delete notes  
✅ Notifications for actions (success/error)  
✅ Frontend-backend integration with REST API  
✅ Production-ready deployment (frontend can be served by backend)

---

## ⚙️ Backend (Express + MongoDB)

The backend is a separate repository: [part3-notes-backend](https://github.com/fullstack-hy2020/part3-notes-backend).

### RESTful API endpoints:

- `GET /api/notes` → fetch all notes
- `GET /api/notes/:id` → fetch a single note
- `POST /api/notes` → add a new note
- `PUT /api/notes/:id` → update a note
- `DELETE /api/notes/:id` → remove a note

### Middleware used:

- JSON parsing (`express.json()`)
- Request logging (`requestLogger`)
- Error handling (validation errors, malformed IDs, unknown endpoints)
- Serving static frontend build

---

## ❌ Error Handling & Deployment

- **Malformed IDs** → 400 Bad Request
- **Validation errors** → 400 with message
- **Unknown endpoints** → 404 Not Found
- **Notifications:** Frontend shows error messages from backend (e.g., validation failure)

**Deployment:**

- The frontend production build is served by the backend
- Only the backend repository is deployed to **Render**
- Environment variables (e.g., `MONGODB_URI`, `PORT`) configured in Render dashboard

---

## 🎯 Learning Objectives

- Connect a React frontend to a backend API
- Manage state with React hooks (`useState`, `useEffect`)
- Implement CRUD operations via RESTful endpoints
- Handle validations and display errors on the frontend
- Deploy a full-stack app to a cloud service (Render)

---

[Notes Demo](https://notes-with-mongo.onrender.com)
