const assert = require("node:assert");
const { test, after, beforeEach } = require("node:test");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const helper = require("./test_helper");
const Note = require("../models/note");

const api = supertest(app);

const initialNotes = [
  {
    content: "HTML is easy",
    important: false,
  },
  {
    content: "Browser can execute only JavaScript",
    important: true,
  },
];
//✅ 1 сохраняет две заметки в базу по отдельности, в два шага.
// beforeEach(async () => {
//   // 1. очищаем коллекцию заметок
//   await Note.deleteMany({});

//   // 2. добавляем тестовые заметки
//   // let noteObject = new Note(initialNotes[0]);
//   let noteObject = new Note(helper.initialNotes[0]);
//   await noteObject.save();
//   noteObject = new Note(helper.initialNotes[1]);
//   // noteObject = new Note(initialNotes[1]);
//   await noteObject.save();
// });

//❌Ошибка при использовании forEach с async/await

//✅ 2 Promise.all мощный способ запустить все операции сохранения параллельно.
// beforeEach(async () => {
//   await Note.deleteMany({});

//   const noteObjects = helper.initialNotes.map((note) => new Note(note));
//   const promiseArray = noteObjects.map((note) => note.save());
//   await Promise.all(promiseArray);
// });

//✅ 3 for...of (если нужен порядок)
// beforeEach(async () => {
//   await Note.deleteMany({});

//   for (let note of helper.initialNotes) {
//     let noteObject = new Note(note);
//     await noteObject.save();
//   }
// });

//4 самое простое): insertMany from Mongoose
beforeEach(async () => {
  await Note.deleteMany({});
  await Note.insertMany(helper.initialNotes);
});

test("notes are returned as json", async () => {
  await api
    .get("/api/notes")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all notes are returned", async () => {
  const response = await api.get("/api/notes");
  assert.strictEqual(response.body.length, helper.initialNotes.length);
  //   assert.strictEqual(response.body.length, initialNotes.length);
});

test("a specific note is within the returned notes", async () => {
  const response = await api.get("/api/notes");
  const contents = response.body.map((r) => r.content);
  assert(contents.includes("HTML is easy"));
});

test("a valid note can be added", async () => {
  const newNote = {
    content: "async/await упрощает асинхронные вызовы",
    important: true,
  };

  await api
    .post("/api/notes")
    .send(newNote)
    .expect(201)
    .expect("Content-Type", /application\/json/);
  const notesAtEnd = await helper.notesInDb();
  assert.strictEqual(notesAtEnd.length, helper.initialNotes.length + 1);

  const contents = notesAtEnd.map((n) => n.content);
  // const response = await api.get("/api/notes");
  // const contents = response.body.map((r) => r.content);

  // assert.strictEqual(response.body.length, initialNotes.length + 1);
  assert(contents.includes("async/await упрощает асинхронные вызовы"));
});

test("note without content is not added", async () => {
  const newNote = {
    important: true,
  };
  await api.post("/api/notes").send(newNote).expect(400);

  const notesAtEnd = await helper.notesInDb();

  assert.strictEqual(notesAtEnd.length, helper.initialNotes.length);
});
//   await api.post("/api/notes").send(newNote).expect(400);

//   const response = await api.get("/api/notes");

//   assert.strictEqual(response.body.length, initialNotes.length);
// });
test("a specific note can be viewed", async () => {
  const notesAtStart = await helper.notesInDb();
  const noteToView = notesAtStart[0];

  const resultNote = await api
    .get(`/api/notes/${noteToView.id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  assert.deepStrictEqual(resultNote.body, noteToView);
});
test("a note can be deleted", async () => {
  const notesAtStart = await helper.notesInDb();
  const noteToDelete = notesAtStart[0];

  await api.delete(`/api/notes/${noteToDelete.id}`).expect(204);

  const notesAtEnd = await helper.notesInDb();

  const contents = notesAtEnd.map((n) => n.content);
  assert(!contents.includes(noteToDelete.content));

  assert.strictEqual(notesAtEnd.length, helper.initialNotes.length - 1);
});
test("a specific note can be viewed", async () => {
  const notesAtStart = await helper.notesInDb();
  const noteToView = notesAtStart[0];

  const resultNote = await api
    .get(`/api/notes/${noteToView.id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  assert.deepStrictEqual(resultNote.body, noteToView);
});

//4_12
test("blog without title is not added", async () => {
  const newBlog = {
    author: "Author Y",
    url: "http://example.com/y",
    likes: 5,
  };

  await api.post("/api/blogs").send(newBlog).expect(400);

  const blogsAtEnd = await helper.blogsInDb();
  assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length);
});

test("blog without url is not added", async () => {
  const newBlog = {
    title: "Blog without url",
    author: "Author Z",
    likes: 7,
  };

  await api.post("/api/blogs").send(newBlog).expect(400);

  const blogsAtEnd = await helper.blogsInDb();
  assert.strictEqual(blogsAtEnd.length, helper.initialBlogs.length);
});

after(async () => {
  await mongoose.connection.close();
});
