import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    login(username);
    setUsername("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <Button variant="contained" color="primary" type="submit">
          login
        </Button>
      </div>
    </form>
  );
};

export default Login;
