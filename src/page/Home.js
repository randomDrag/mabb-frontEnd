import React from 'react';

import FirstSection from '../components/section';
import AboutMabb from '../components/aboutus';
import Mabbservice from './Mabbservices';
import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';
import Contactus from './Contact.mabb.group';

gsap.registerPlugin(ScrollTrigger);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.sections = [];
    this.container = null;
  }

  componentDidMount() {
    const elem = gsap.utils.toArray(this.container);

    let elems = document.querySelectorAll('section');

    console.log(elems.length);

    if (elems != null) {
      elems.forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          scrub: 5,
        });
        console.log(sec);
      });
    }

    ScrollTrigger.create({
      snap: 1 / 5, // snap whole page to the closest section!
    });
  }

  render() {
    return (
      <div ref={(cont) => (this.container = cont)}>
        <FirstSection ref={(sec) => (this.sections[0] = sec)} />
        <AboutMabb ref={(sec) => (this.sections[1] = sec)} />
        <Mabbservice ref={(sec) => (this.sections[2] = sec)} />
        <Contactus />
      </div>
    );
  }
}

export default Home;
