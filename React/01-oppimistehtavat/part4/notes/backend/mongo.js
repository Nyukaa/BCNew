require("dotenv").config();
const mongoose = require("mongoose");

const password = process.argv[2] || process.env.DB_PASSWORD;

if (!password) {
  console.log("⚠️  Укажи пароль через аргумент или в .env как DB_PASSWORD");
  process.exit(1);
}

// Выбираем базу в зависимости от NODE_ENV
const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? `mongodb+srv://annashitikova_db_user:${password}@cluster0.zcy90zd.mongodb.net/noteAppTest?retryWrites=true&w=majority&appName=Cluster0`
    : `mongodb+srv://annashitikova_db_user:${password}@cluster0.zcy90zd.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(
      `✅ Подключено к базе: ${
        process.env.NODE_ENV === "test" ? "noteAppTest" : "noteApp"
      }`
    );
  })
  .catch((err) => console.log("Ошибка подключения к MongoDB:", err));

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// Массив тестовых заметок
const initialNotes = [
  { content: "HTML is easy", important: true },
  { content: "Browser can execute only JavaScript", important: true },
  {
    content: "The most important methods of HTTP are GET and POST",
    important: false,
  },
];

// Функция для сохранения заметок
const saveNotes = async () => {
  await Note.deleteMany({}); // очищаем базу перед добавлением
  for (const note of initialNotes) {
    const noteObject = new Note(note);
    await noteObject.save();
  }
  console.log(`✅ ${initialNotes.length} заметок сохранено`);
  mongoose.connection.close();
};

saveNotes();
