import React from 'react';
import Lottie from 'react-lottie';
import AboutMabbAnimation from '../raw/aboutusMabb.json';
import '../css/mabb.group.about.css';
import { ABOUT_MABB_GROUP } from '../const/data';
import AboutAll from './Aboutus.all';

class AboutMabb extends React.Component {
  render() {
    return (
      <section className='min-vh-100 w-100' style={{ background: '#b7916c' }}>
        <AboutAll
          heading='About us'
          info={ABOUT_MABB_GROUP}
          animationData={AboutMabbAnimation}
        />
      </section>
    );
  }
}

export default AboutMabb;
