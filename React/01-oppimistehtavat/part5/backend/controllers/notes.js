const notesRouter = require("express").Router();
const Note = require("../models/note");
const User = require("../models/user");
const { userExtractor } = require("../utils/middleware"); // <- импорт
// notesRouter.get("/", async (request, response) => {
//   const notes = await Note.find({});
//   response.json(notes);
// });

//populate позволяет:автоматически подставлять (загружать) связанные документы из других коллекций по их ObjectId.
notesRouter.get("/", async (request, response) => {
  const notes = await Note.find({}).populate("user", { username: 1, name: 1 });

  response.json(notes);
});

notesRouter.get("/:id", async (request, response) => {
  const note = await Note.findById(request.params.id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

// notesRouter.post("/", async (request, response) => {
//   const body = request.body;

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   });

//   const savedNote = await note.save();
//   response.status(201).json(savedNote);
// });

notesRouter.post("/", userExtractor, async (request, response) => {
  const body = request.body;

  //const user = await User.findById(body.userId);

  // if (!user) {
  //   return response.status(400).json({ error: "userId missing or not valid" });
  // }
  const user = request.user; // <- user должен быть из middleware
  if (!user) {
    return response.status(401).json({ error: "user not found" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    user: request.user._id, // <- from userExtractor middleware,
  });

  const savedNote = await note.save();
  user.notes = user.notes.concat(savedNote._id);
  await user.save();

  response.status(201).json(savedNote);
});

notesRouter.delete("/:id", async (request, response) => {
  await Note.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

notesRouter.put("/:id", (request, response, next) => {
  const { content, important } = request.body;

  Note.findById(request.params.id)
    .then((note) => {
      if (!note) {
        return response.status(404).end();
      }

      note.content = content;
      note.important = important;

      return note.save().then((updatedNote) => {
        response.json(updatedNote);
      });
    })
    .catch((error) => next(error));
});

module.exports = notesRouter;
