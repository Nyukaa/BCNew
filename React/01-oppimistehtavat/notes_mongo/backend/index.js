require("dotenv").config();
const express = require("express");
const Note = require("./models/note");
const app = express();

app.use(express.json());
app.use(express.static("dist"));
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (req, res) => {
  Note.find({}).then((notes) => res.json(notes));
});

app.get("/api/notes/:id", (req, res, next) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (note) res.json(note);
      else res.status(404).end();
    })
    .catch((error) => next(error));
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
  const { important } = req.body;
  Note.findByIdAndUpdate(
    req.params.id,
    { important },
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

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
