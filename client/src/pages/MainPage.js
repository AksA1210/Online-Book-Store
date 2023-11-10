import React from 'react';
import Home_header from '../components/Home_header';
import Navbar from '../components/Navbar/Navbar';
import FeaturedProducts from './../components/Featured_Products/FeaturedProducts';
// import Shop from './Shop';
// import UserIcon from './../components/UserIcon';

const MainPage = () => {
  return (
    <div>

        <Home_header/>
        <Navbar/>
        <FeaturedProducts/>
        // <Shop/>
        // <UserIcon/>
    </div>
  )
}

export default MainPage;
