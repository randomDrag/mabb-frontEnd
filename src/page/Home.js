import React from 'react';

import FirstSection from '../components/section';
import AboutMabb from '../components/aboutus';
import Mabbservice from './Mabbservices';
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

class Home extends React.Component {
  render() {
    return (
      <>
        <FirstSection />
        <AboutMabb />
        <Mabbservice />
      </>
    );
  }
}

export default Home;
