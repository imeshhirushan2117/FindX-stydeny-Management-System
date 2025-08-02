import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e3f2fd, #ede7f6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 4, sm: 6 },
          width: '100%',
          maxWidth: 480,
          textAlign: 'center',
          borderRadius: 4,
          backgroundColor: 'white',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: '#1976d2',
            fontSize: { xs: '2rem', sm: '2.5rem' },
          }}
        >
          Welcome!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#555',
            fontSize: { xs: '1rem', sm: '1.125rem' },
          }}
        >
          Manage students, view reports, and stay organized effortlessly with our Student Management System.
        </Typography>

        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            py: 1.5,
            fontSize: '1rem',
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 2,
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Start
        </Button>
      </Paper>
    </Box>
  );
}
