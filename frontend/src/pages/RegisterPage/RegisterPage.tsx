import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import axios from '../../api.js'
import CustomAlert from '../../components/CustomAlert.jsx';

export default function RegisterPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');



  const btnRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', {
        email,
        password,
        password_confirmation: passwordConfirmation,
        name,
        contact
      });
      alert('Registration successful! You can now log in.');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      if (err.response?.data?.errors) {
        const errors = err.response.data.errors;
        const errorMessages = Object.values(errors).flat().join('\n');
        alert(`Registration failed! ${errorMessages}`);
      } else {

        alert('Registration failed! Please try again later.');
      }
    }
  }

  return (

    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          background: 'linear-gradient(to right, #cfe8fc, #d1c4e9)',
        }}

      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 420,
            borderRadius: 3,
            backgroundColor: '#fff',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <Box sx={{ mb: 3 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: 80, height: 80, objectFit: 'contain', margin: '0 auto' }}
            />
          </Box>

          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 500 }}
          >
            Student Registration
          </Typography>

          <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Full Name" type="text" required fullWidth value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Email" type="email" required fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Contact Number" type="tel" fullWidth value={contact} onChange={(e) => setContact(e.target.value)} />
            <TextField label="Password" type="password" required fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField label="Password Confirmation" type="password" required fullWidth value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />

            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': { backgroundColor: '#1565c0' },
              }}

              onClick={btnRegister}
            >
              Register
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#1565c0', textDecoration: 'none' }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
