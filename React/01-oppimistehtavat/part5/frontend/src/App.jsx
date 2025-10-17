import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Note from "./components/Note";
import Notification from "./components/Notification";
import NoteForm from "./components/NoteForm";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";

import noteService from "./services/notes";
import loginService from "./services/login";

const App = () => {
  // const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notes, setNotes] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const [loginVisible, setLoginVisible] = useState(false);

  //fetch notes from server
  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  //check if user is logged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  // const addNote = async (event) => {
  //   event.preventDefault();
  //   if (!newNote.trim()) {
  //     setErrorMessage("Note cannot be empty");
  //     return;
  //   }
  //   const noteObject = { content: newNote, important: false };
  //   console.log("Sending note to create:", noteObject);
  //   try {
  //     const returnedNote = await noteService.create(noteObject);
  //     setNotes(notes.concat(returnedNote));
  //     setNewNote("");
  //   } catch (error) {
  //     setErrorMessage(error.response?.data?.error || "Error adding note");
  //     setTimeout(() => setErrorMessage(null), 5000);
  //   }
  // };

  const addNote = async (noteObject) => {
    try {
      const returnedNote = await noteService.create(noteObject);
      setNotes(notes.concat(returnedNote));
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Error adding note");
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };

  const toggleImportanceOf = async (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    try {
      const returnedNote = await noteService.update(id, changedNote);
      setNotes(notes.map((n) => (n.id !== id ? n : returnedNote)));
    } catch (error) {
      setErrorMessage(`Note '${note.content}' was already removed from server`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      setNotes(notes.filter((n) => n.id !== id));
    }
  };

  // const handleNoteChange = (event) => {
  //   setNewNote(event.target.value);
  // };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({ username, password });
      console.log("Logged in user:", user);
      setUser(user); // set user to state
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user)); // save to Local Storagefor refreshing the page
      console.log("user ", window.localStorage.getItem("loggedNoteappUser"));
      noteService.setToken(user.token); // added token for future requests

      setUsername("");
      setPassword("");
    } catch {
      setErrorMessage("wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const loginForm = () => (
    <Togglable buttonLabel="login">
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Togglable>
  );
  const noteForm = () => (
    <Togglable buttonLabel="new note">
      <NoteForm
        createNote={addNote}
        // newNote={newNote}
        // handleChange={handleNoteChange}
      />
    </Togglable>
  );
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />

      {!user && loginForm()}
      {/* {!user && (
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
        />
          <Togglable buttonLabel="reveal">
        "Hello"
      
        <p>эта тоже скрыта</p>[<p>1</p>, <p>2</p>]
      </Togglable>
      )} */}

      {user && (
        <div>
          <p>{user.name} logged in</p>
          {/* <NoteForm
            onSubmit={addNote}
            newNote={newNote}
            handleNoteChange={handleNoteChange}
          /> */}
          {noteForm()}
        </div>
      )}
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default App;
