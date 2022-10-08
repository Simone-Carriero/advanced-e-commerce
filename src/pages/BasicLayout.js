import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const BasicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BasicLayout;
