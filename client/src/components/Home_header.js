
import React from 'react';
import "./Home_header.css";
import "./Navbar/Navbar";
import logo from "../assets/lib.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from '../pages/Button';
// import callicon from "../assets/call icon.svg";
import { BiSearchAlt2, BiUser } from 'react-icons/bi';
import { BsHeart, BsCart2 } from 'react-icons/bs';
import Shop from '../pages/Shop';
import UserIcon from './UserIcon';


const Home_header = () => {
  const navigate = useNavigate();

    return (
        <div className='header-container'>

           <div className='logo-search-cont'>
                {/* <img src={logo} alt="" /> */}
              <div className='search-cont'>
                   <BiSearchAlt2 className='icon' />
                  <input type="text" placeholder='Search Products' />
              </div>
             </div>

             {/* <div className='contact-social-cont'>

                 <div className='contact'>
                    {/* <img src={callicon} alt="" /> */}
                     {/* <p>Call Us <br /> <span>+009 000 000</span> </p> */}
                 {/* </div> */} 

              <div className='social-icon-cont'>
                     <div className='headerIcon'>
                      <BiUser className='headerIcon-size' />
                      <UserIcon
                        className='btns'
                        buttonStyle='btn--primary'
                         buttonSize='btn--large'
                      onClick={navigate("/")}>
                       </UserIcon>
                   </div>

                     {/* <div className='headerIcon'>
                        <BsHeart className='headerIcon-size' />
                     </div> */}

                    <div className='headerIcon'>
                    <BsCart2 className='headerIcon-size' />
                    <Shop
                        className='btns'
                        buttonStyle='btn--primary'
                         buttonSize='btn--large'
                      onClick={navigate("/cart")}>
                       </Shop>
                   </div>
                 </div>

             {/* </div> */}

         </div>
    
  )};



export default Home_header;
