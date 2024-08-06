import React from 'react';
import styled from 'styled-components';
import hero from "../asset/video/hero.mp4";
import "./Hero.css";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Home = () => {
  return (
    <HeroSection>
      <VideoBackground autoPlay loop muted>
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here</p>
      </div>
    </HeroSection>
  );
}

export default Home;
