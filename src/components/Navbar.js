import React from 'react';
import axios from 'axios';
import { Button, Container, Menu, Image } from 'semantic-ui-react';

const Navbar = ({ user }) => {
  const logout = async () => {
    const data = await axios.get('/api/auth/logout').then(res => res.data);
    if (data) window.location = '/';
  };

  return (
    <Menu size="large" style={{ height: '60px', marginBottom: '10px', borderRadius: 0, backgroundColor: '#003366' }}>
      <Container>
        <Menu.Item>
          <Image src={'logo-banner.png'} size="small" />
        </Menu.Item>
        <Menu.Item style={{ fontSize: '20px', color: 'white' }}>Skynet AI System</Menu.Item>
        {user && user.isLoggedIn && (
          <Menu.Item position="right">
            <span style={{ color: 'white', marginRight: '1rem' }}>{user.role.toUpperCase()}</span>
            <Button as="a" inverted style={{ marginLeft: '0.5em' }} onClick={() => logout()}>
              Sign Out
            </Button>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default Navbar;