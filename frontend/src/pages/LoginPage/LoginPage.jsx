import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from '@mui/material';

import { Link } from 'react-router-dom'; 

export default function LoginPage() {
  return (
    <Box
      sx={{
        height: '91vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #cfe8fc, #d1c4e9)',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <Typography variant="h5" component="h1" gutterBottom align="center">
        Student Management System
      </Typography> */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: 'white',
        }}
      >
        {/* ✅ System Title */}
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Login
        </Typography>

        {/* ✅ Form */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            required
            id="outlined-username"
            label="Username or Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
          />

          {/* ✅ Login Button */}
          <Button
           component={Link}
            to="/home"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, textTransform: 'none' }}
            fullWidth
          >
            Login
          </Button>

          {/* ✅ Register Button with Router Link */}
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ textTransform: 'none' }}
            fullWidth
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
