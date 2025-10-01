require("dotenv").config();
const express = require("express");
const Note = require("./models/note");

const app = express();

// Middleware
app.use(express.json()); // JSON parser should be first

// Request logger middleware
const requestLogger = (req, res, next) => {
  console.log("Method:", req.method);
  console.log("Path:", req.path);
  if (
    ["POST", "PUT"].includes(req.method) &&
    req.body &&
    Object.keys(req.body).length > 0
  ) {
    console.log("Body:", req.body);
  }
  console.log("---");
  next();
};
app.use(requestLogger);

app.use(express.static("dist")); // Serve frontend

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (req, res, next) => {
  Note.find({})
    .then((notes) => res.json(notes))
    .catch((error) => next(error));
});

app.get("/api/notes/:id", (req, res, next) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (note) res.json(note);
      else res.status(404).end(); // Not Found
    })
    .catch((error) => next(error)); // Pass error to error-handler
});

app.post("/api/notes", (req, res, next) => {
  const { content, important } = req.body;
  if (!content) return res.status(400).json({ error: "content missing" });

  const note = new Note({ content, important: important || false });
  note
    .save()
    .then((savedNote) => res.json(savedNote))
    .catch((error) => next(error));
});

app.put("/api/notes/:id", (req, res, next) => {
  const { content, important } = req.body;

  Note.findByIdAndUpdate(
    req.params.id,
    { content, important },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedNote) => {
      if (updatedNote) res.json(updatedNote);
      else res.status(404).json({ error: "Note not found" });
    })
    .catch((error) => next(error));
});

app.delete("/api/notes/:id", (req, res, next) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});

// Middleware for unknown endpoints (must come after routes)
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

// Error-handling middleware (must come last)
const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  next(error); // Pass to default Express error handler if unknown error
};
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
