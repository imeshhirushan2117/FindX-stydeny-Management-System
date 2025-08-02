import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function RegisterPage() {
  return (
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
          <TextField label="Full Name" type="text" required fullWidth />
          <TextField label="Email" type="email" required fullWidth />
          <TextField label="Password" type="password" required fullWidth />
          <TextField label="Contact Number" type="tel" fullWidth />

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
  );
}
