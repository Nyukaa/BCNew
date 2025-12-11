import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
    navigate("/");
  };

  return (
    <div>
      <h2>login</h2>
      {/* 
     Using Bootstrap Form components for styling */}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          login
        </Button>
      </Form>
    </div>
  );
};
// const Login = ({ login }) => {
//   const [username, setUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(username);
//     setUsername("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={username} onChange={(e) => setUsername(e.target.value)} />
//       <button type="submit">login</button>
//     </form>
//   );
// };

// export default Login;
