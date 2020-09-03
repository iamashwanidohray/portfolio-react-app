import React from 'react';
import Common from './Common';
import logo from '../images/aboutImage.svg';

function About() {
  return (
    <Common name="Welcome to About page " imgsrc={logo} visit="/contact" btnName="Contact Us" />
  );
}

export default About;
