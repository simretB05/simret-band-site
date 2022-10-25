import React from 'react'
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
const SharedLayout = () => (
  <>
    <Header />
        <Outlet/>
    <Footer/>
    
  </>

);
export default  SharedLayout; 