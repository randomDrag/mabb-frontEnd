import React from 'react';
import AboutAll from '../components/Aboutus.all';
import Portfolio from '../components/Portfolio';
import InfinityFirst from './inf.home.main';
import aboutusInf from '../raw/aboutus_inf.json';
import ServicesAll from '../components/ServicesAll';
import '../css/portfoilo.sec.css';
import Sitemap from '../components/sitemap';
class Infinity extends React.Component {
  render() {
    return (
      <>
        <InfinityFirst />

        <section className='vh-100 w-100 about-sec'>
          <AboutAll heading='ABOUT US' animationData={aboutusInf} />
        </section>
        <section
          className='vh-100 w-100'
          style={{
            background: '#e5e5f7',

            backgroundRepeat: 'repeat',
            backgroundPosition: '27px 0, 27px 0, 0 0, 0 0',
            backgroundImage:
              ' linear-gradient(135deg, #4ca46e 25%, transparent 25%), linear-gradient(225deg, #4ca46e 25%, transparent 25%), linear-gradient(45deg, #4ca46e 25%, transparent 25%), linear-gradient(315deg, #4ca46e 25%, #e5e5f7 25%)',
            backgroundSize: '54px 54px',
          }}
        >
          <ServicesAll />
        </section>
        <section className='vh-100 w-100 portfolio-sec'>
          <Portfolio DataArr={[1, 2, 3]} />
        </section>
      </>
    );
  }
}

export default Infinity;
