import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#4a90e2' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            fontWeight={600}
            variant="h5"
           
          >
            Comprehensive News Compilation
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ marginTop: '10px' }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
