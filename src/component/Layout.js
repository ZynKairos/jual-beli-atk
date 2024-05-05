import React from 'react';
import NavbarComponent from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <div className="columns">
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main className='mt-5'>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;