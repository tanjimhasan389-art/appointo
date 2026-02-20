import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline, Typography } from '@mui/material'; // Added Typography
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="xl" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => theme.palette.grey[100],
          borderTop: 1,
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Appointo - Appointment Scheduling System
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;