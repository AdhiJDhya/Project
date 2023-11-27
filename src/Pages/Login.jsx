import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
  paper: {
    background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)',
    padding: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh', 
    width: '80%', 
    margin: 'auto',
    padding: 40,
    borderRadius: 10, 
  },
  textField: {
    margin: '20px 0',
    width: '100%',
    fontSize: '1.5rem',
  },
  button: {
    marginTop: 40,
    width: '25%',
    fontSize: '1.5rem',
    padding: '15px',
  },
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Add your password validation logic here
    const isValidPassword = newPassword.length >= 8; // Example: Password must be at least 8 characters
    setPasswordError(!isValidPassword);
  };

  const handleSubmit = () => {
    // Add your login logic here
    if (!passwordError) {
      navigate('/Home');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="false" style={styles.container}>
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
            label="Username or Email"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            error={passwordError}
            helperText={passwordError && 'Password must be at least 8 characters'}
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            style={styles.button}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            <Link to="/Home">Log in</Link>
        
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
