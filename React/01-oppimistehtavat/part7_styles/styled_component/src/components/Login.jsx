import { useState } from "react";
import { Input, Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        username:
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        password:
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" $primary>
        login
      </Button>
    </form>
  );
};

export default Login;
