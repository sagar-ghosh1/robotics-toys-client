import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const LoginLayout = () => {
   return (
      <div>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default LoginLayout;