import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'semantic-ui-react';
import './DefaultLayout.css';

const DefaultLayout = ({ user, children }) => {
  return (
    <div>
      <Navbar user={user} />
      <Container className="layout-main">{children}</Container>
      <Footer />
    </div>
  );
};

export default DefaultLayout;