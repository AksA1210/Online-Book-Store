import React from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import { Button } from './Button';
import './HeroSection.css';
import image from '../assets/lib.jpg';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className='hero-container'>
      <img src={image} alt='hero' />
      <h1>READ.BUY.READ</h1>
      <p>What are you waiting for ?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={navigate("/about")}
        >
         LEARN MORE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
