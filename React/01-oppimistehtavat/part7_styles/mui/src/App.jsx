import ReactDOM from "react-dom/client";
import Note from "./components/Note";
import Notes from "./components/Notes";
import { useState } from "react";
import Home from "./components/Home";
import Users from "./components/Users";
import { Alert, Navbar, Nav } from "react-bootstrap";
import { Login } from "./components/Login";
import { useMatch } from "react-router-dom"; // we use useMatch to read the :id parameter from the URL in App component
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams, // we use useParams to read the :id parameter from the URL in Note component
  useNavigate,
} from "react-router-dom";

const App = () => {
  const [message, setMessage] = useState(null);
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "HTML is easy",
      important: true,
      user: "Matti Luukkainen",
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
      user: "Matti Luukkainen",
    },
    {
      id: 3,
      content: "Most important methods of HTTP-protocol are GET and POST",
      important: true,
      user: "Arto Hellas",
    },
  ]);

  const match = useMatch("/notes/:id");
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null;

  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
    setMessage(`Welcome ${user}!`); // Уведомление
    setTimeout(() => {
      setMessage(null); // убираем через 5 секунд
    }, 5000);
  };

  const padding = {
    padding: 5,
  };

  return (
    <div className="container">
      {/* навигация автоматически сжимается на маленьких экранах. меню закрывается
        при выборе пункта (удобно для мобильных). */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* "гамбургер" */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/">
                home
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/notes">
                notes
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/users">
                users
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user ? (
                <em style={padding}>{user} logged in</em>
              ) : (
                <Link style={padding} to="/login">
                  login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div> */}
      {/* Notification */}
      {message && (
        <Alert variant="success" className="mt-3">
          {message}
        </Alert>
      )}
      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        {/* <Route path="/notes/:id" element={<Note notes={notes} />} /> 
          it was нарушается принцип Single Responsibility it should not know about notes*/}
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        {/* URL /users защищён, доступен только авторизованным.
          пользователь не сможет нажать "Назад" и вернуться на защищённую страницу */}
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* </Router> */}
      <div>
        <br />
        <em>Note app, Department of Computer Science 2023</em>
      </div>
    </div>
  );
};
export default App;
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
