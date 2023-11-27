import React from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fde1ff',
    },

    secondary: {
      main: '#ff4141',
    },
  },
});
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh', 
    width: '90%', 
    margin: 'auto', 
    padding: 40,
    borderRadius: 10, 
  },
  paper: {
    background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)',
    padding: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
  },
  textField: {
    margin: '20px 0',
    width: '100%',
    fontSize: '1.5rem',
  },
  button: {
    marginTop: 40,
    width: '100%',
    fontSize: '1.5rem',
    padding: '15px',
  },
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const openNewTab = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    toast.success("Successfully registered!");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth={false} style={styles.container}>
        <Paper
          elevation={3}
          style={{
            ...styles.paper,
            background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)',
          }}
        >
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Username"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
          <Button
            style={styles.button}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container alignItems="center" justifyContent="center" style={{ marginLeft: '320px', marginTop: '50px' }}>
            <Grid item xs>
              <button onClick={openNewTab} style={{ fontSize: '15px' }}>Already have an account? Login</button>
            </Grid>
          </Grid>
        </Paper>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </Container>
    </ThemeProvider>
  );
};

export default SignUpPage;
