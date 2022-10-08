import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from '../components';

const BasicLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BasicLayout;
