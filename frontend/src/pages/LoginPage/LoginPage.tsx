import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import HomeIcon from '@mui/icons-material/Home';

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        background: 'linear-gradient(to right, #e3f2fd, #ede7f6)',
        position: 'relative', // for absolute positioning of home button
      }}
    >
      {/* Home Icon as a button in top-left */}
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 4,
          backgroundColor: '#1565c0',
          color: '#fff',
          textDecoration: 'none',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          transition: 'background-color 0.3s ease',
        }}
        aria-label="Go to homepage"
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0d3c75')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1565c0')}
      >
        <HomeIcon />
      </Link>

      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        {/* Logo at the top */}
        <Box sx={{ mb: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 80, height: 80, objectFit: 'contain' }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
          Login
        </Typography>

        {/* Form */}
        <Box
          component="form"
          sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField label="Username or Email" required fullWidth />
          <TextField label="Password" type="password" required fullWidth />

          <Button
            component={Link}
            to="/home"
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
            Login
          </Button>

          {/* Register Link */}
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don’t have an account?{' '}
            <Link
              to="/register"
              style={{ color: '#1565c0', textDecoration: 'none' }}
            >
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
