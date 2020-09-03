import React from 'react';
import Common from './Common';

import logo from '../images/homeImage.svg';

function Home() {
  console.log(logo);
  return (
    <Common name="Grow your business with " imgsrc={logo} visit="/services" btnName="Get Started" />
  );
}

export default Home;
