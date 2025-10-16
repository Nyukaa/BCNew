const express = require("express");
const mongoose = require("mongoose");

const config = require("./utils/config");
const middleware = require("./utils/middleware");

const blogsRouter = require("./controllers/blogs");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err.message));

app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor); // for 4_20

console.log("✅ Mounting /api/blogs route");

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
