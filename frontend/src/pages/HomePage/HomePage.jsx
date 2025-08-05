
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
import React, { useEffect, useState } from 'react';
import axios from '../../api.js';

export default function HomePage() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popup, setPopup] = useState(false);

  const [rows, setRows] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'birthdate', headerName: 'Birthdate', width: 120 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'contact_number', headerName: 'Contact Number', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => handleEdit(params.row)}
            sx={{ mr: 1 }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];


  const handleDelete = (id) => {
    axios.delete(`/students/${id}`)
      .then(() => {
        setRows(rows.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    axios.get('/students')
      .then((response) => {
        // if the response is a single object, convert it to an array
        const data = Array.isArray(response.data) ? response.data : [response.data];

        // map data to ensure each has a unique `id` for DataGrid
        const formattedData = data.map((item) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          birthdate: item.birthdate,
          city: item.city,
          contact_number: item.contact_number,
        }));

        setRows(formattedData);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

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
  const saveStudent = () => {
    axios.post('/students', {
      name,
      email,
      birthdate,
      city,
      contact_number: contactNumber
    })
      .then((response) => {
        setRows([...rows, { id: response.data.id, ...response.data }]);
        setPopup(false);
        setName('');
        setEmail('');
        setBirthdate('');
        setCity('');
        setContactNumber('');
      })
      .catch((error) => {
        console.error('Error saving student:', error);
      });
  }



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
      <Box sx={{ height: 400, width: '100%', p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Student List
        </Typography>
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

      <PopUPModel
        open={popup}
        onClose={() => setPopup(false)}
        title="Add New Student"
        actions={
          <>
            <Button onClick={() => setPopup(false)} color="error">
              Cancel
            </Button>
            <Button variant="contained" color="success" onClick={saveStudent}>
              Save
            </Button>
          </>
        }
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Birthday" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" fullWidth margin="normal" value={city} onChange={(e) => setCity(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone Number" type="tel" fullWidth margin="normal" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </Grid>
        </Grid>
      </PopUPModel>

    </>
  );
}
