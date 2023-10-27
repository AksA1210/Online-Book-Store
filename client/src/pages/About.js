import React from "react";
import "./About.css";
import aboutImage from "../assets/stack_of_books.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Platform</h1>
        <p>
          Our platform is dedicated to helping bookworms around
          the world discover new and books. Whether you're a fantasy lover
          or a romanticist, our platform has something for everyone.
        </p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
          Our mission is to provide a platform for users to purchase books online.Our website aims to make the process of buying books more convenient and accessible for users. 
          Booktok offers a wide range of books, including new releases, bestsellers, and rare books. 
          We also provide a platform for independent authors to sell their books.We want to provide a seamless user experience by offering features such as personalized recommendations, easy search options, and secure payment methods. 
          </p>
          <h2>How It Works</h2>
          <p>
            Users can create a free account and start browsing their favorite
            books. 
            They can save their favorites, add to cart and pay for their required books.
          </p>
          
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;


