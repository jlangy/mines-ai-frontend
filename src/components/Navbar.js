import React from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <Menu size="large" style={{ height: '60px', marginBottom: '10px', borderRadius: 0, backgroundColor: '#003366' }}>
      <Container>
        <Menu.Item>
          <Image src={'logo-banner.png'} size="small" />
        </Menu.Item>
        <Menu.Item style={{ fontSize: '20px', color: 'white' }}>B.C. Mines Risk Analyser</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/about" name="About" position="right" style={{color: 'white'}}/>
          <Menu.Item as={Link} to="/" name="Home" position="right" style={{color: 'white'}}/>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;