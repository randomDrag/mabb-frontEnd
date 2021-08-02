import React from 'react';
import AboutAll from '../components/Aboutus.all';
import Portfolio from '../components/Portfolio';
import InfinityFirst from './inf.home.main';
import aboutusInf from '../raw/aboutus_inf.json';

class Infinity extends React.Component {
  render() {
    return (
      <>
        <InfinityFirst />
        <section className='vh-100 w-100' style={{ background: 'pink' }}>
          <AboutAll heading='about us' animationData={aboutusInf} />
        </section>
        <section className='vh-100 w-100' style={{ background: 'orange' }}>
          <Portfolio DataArr={[1, 2, 3]} />
        </section>
      </>
    );
  }
}

export default Infinity;
