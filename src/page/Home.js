import React from 'react';

import FirstSection from '../components/section';
import AboutMabb from '../components/aboutus';
import Mabbservice from './Mabbservices';
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
import Contactus from './Contact.mabb.group';
import AboutClient from './mabb.group.client';
import Founder from './Founder.all';
import Members from './members.mabb';

gsap.registerPlugin(ScrollTrigger);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.sections = [];
    this.container = null;
  }

  componentDidMount() {
    let elems = document.querySelectorAll('section');

    if (elems != null) {
      elems.forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: 'top top',
          pin: true,
          pinSpacing: false,
        });
      });
    }

    ScrollTrigger.create({
      snap: 0 / elems.length, // snap whole page to the closest section!
    });
  }

  render() {
    return (
      <>
        <FirstSection />
        <AboutMabb />
        <Mabbservice />
        <Contactus />
        <AboutClient />
        <Founder />
        <Members />
      </>
    );
  }
}

export default Home;
