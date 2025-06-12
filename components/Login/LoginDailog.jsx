import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../AuthContext";
import API from "../../utils/api";

const BoxOuter = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #004080;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  justify-content: center;

  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  background: #004080;
  border-radius: 5px;
  color: white;
  height: 48px;
  &:hover {
    background: rgb(104, 200, 14);
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
  font-weight: 400;
`;

const CreateAccount = styled(Typography)`
  color: #2874f0;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

function LoginDialog({ open, setOpen }) {
  const { setIsLoggedIn } = useAuth();

  const InitialAccount = {
    login: {
      view: "login",
      Heading: "Login",
      Subheading: "Get access to your Dashboard",
    },
    signup: {
      view: "signup",
      Heading: "Signup",
      Subheading: "All the details must be correct",
    },
  };

  const [account, toggleAccount] = useState(InitialAccount.login);
  const [loginValue, setLogin] = useState({ username: "", password: "" });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    first_name: "",
  last_name: ""
  });

  const handleClose = () => {
    setOpen(false);
    toggleAccount(InitialAccount.login);
  };

  const toggleSignup = () => toggleAccount(InitialAccount.signup);
  const toggleLogin = () => toggleAccount(InitialAccount.login);

  const inputChange = (e) => {
    setLogin({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await API.post("login/", loginValue);
      const { access, refresh } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      setIsLoggedIn(true);
      setOpen(false);
    } catch (error) {
      alert("Login failed ❌");
      console.error(error.response?.data);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await API.post("register/", formData);
      alert("Registration successful 🎉");
      console.log(response.data);
      toggleLogin(); // Switch to login after signup
    } catch (error) {
      console.error(error.response?.data);
      alert("Registration failed ❌");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <BoxOuter>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.Heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.Subheading}
            </Typography>
          </Image>

          {account.view === "login" ? (
            <Wrapper>
              <TextField
                label="Username"
                name="username"
                variant="standard"
                onChange={inputChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="standard"
                onChange={inputChange}
              />
              <Text>
                By continuing, you agree to CRM's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={handleLogin}>Login</LoginButton>
              <CreateAccount onClick={toggleSignup}>
                New to CRM? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                label="First Name"
                name="first_name"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                label="Last Name"
                name="last_name"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                label="Username"
                name="username"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                label="Phone number"
                name="phone"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                label="Confirm Password"
                name="password2"
                type="password"
                variant="standard"
                onChange={handleChange}
              />
              <LoginButton onClick={handleRegister}>Signup</LoginButton>
              <CreateAccount onClick={toggleLogin}>
                Existing User? Log in
              </CreateAccount>
            </Wrapper>
          )}
        </Box>
      </BoxOuter>
    </Dialog>
  );
}

export default LoginDialog;
