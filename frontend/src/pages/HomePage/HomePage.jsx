import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
  FormGroup,
  Container,
  Paper,
  Button,
  Grid,
  TextField
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { DataGrid } from '@mui/x-data-grid';
import PopUPModel from '../../components/PopupModel/PopUPModel';

export default function HomePage() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popup, setPopup] = React.useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {

  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150, editable: true },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
    { field: 'states', headerName: 'Status', type: 'status', width: 110, editable: true },

  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Student Registration Dashboard
          </Typography>

          {/* <FormGroup sx={{ mr: 2 }}>
            <FormControlLabel
              control={<Switch checked={auth} onChange={handleChange} color="default" />}
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}

          {auth && (
            <div>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={logout}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Add Student Button */}
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Grid container justifyContent="flex-end">
          <Button variant="contained" color="success" onClick={() => setPopup(true)}>
            Add Student
          </Button>
        </Grid>
      </Container>

      {/* Data Table */}
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom>
            Student Information
          </Typography>
          <Box
            sx={{
              height: { xs: 400, sm: 450, md: 500 },
              width: '100%',
              mt: 2,
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10 },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection
              disableRowSelectionOnClick
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
              }}
            />
          </Box>
        </Paper>
      </Container>

      <PopUPModel
        open={popup}
        onClose={() => setPopup(false)}
        title="Add New Student"
        actions={
          <>
            <Button onClick={() => setPopup(false)} color="error">
              Cancel
            </Button>
            <Button variant="contained" color="success">
              Save
            </Button>
          </>
        }
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" type="email" fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Birthday" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone Number" type="tel" fullWidth margin="normal" />
          </Grid>
        </Grid>
      </PopUPModel>

    </>
  );
}
