import './UserIcon.css';
import { css } from 'styled-components';
import React, {useState,useEffect,useRef} from 'react';
import { FaUser } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';



// Now you can use <FaEdit /> component in your JSX

function UserIcon() {

    const [open, setOpen] = useState(false);
  
    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
  
    return (
      <div className="UserIcon">
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={FaUser}></img>
          </div>
  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <h3>The Kiet<br/><span>Website Designer</span></h3>
            <ul>
              <DropdownItem img = {FaUser} text = {"My Profile"}/>
              <DropdownItem img = {FaEdit} text = {"Edit Profile"}/>
              <DropdownItem img = {FaCog} text = {"Settings"}/>
              <DropdownItem img = {FaQuestionCircle} text = {"Helps"}/>
              <DropdownItem img = {FaSignOutAlt} text = {"Logout"}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }
  
  export default UserIcon;
