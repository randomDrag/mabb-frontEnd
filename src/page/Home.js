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
import { connect } from 'react-redux';
import { navIcon } from '../actions';

gsap.registerPlugin(ScrollTrigger);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.sections = [];
    this.container = null;
  }

  componentDidMount() {
    this.props.navIcon({ navIco: 'MabbGroup' });

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
        <AboutClient />
        <Contactus />
        <Founder />
        <Members />
      </>
    );
  }
}

export default connect(null, { navIcon })(Home);
