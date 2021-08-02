import React from 'react';
import vi from '../raw/inf.mp4';
import '../css/infinityfirst.css';

class InfinityFirst extends React.Component {
  render() {
    return (
      <section className='min-vh-100 w-100'>
        <video className='video-bg' loop muted autoPlay>
          <source src={vi} type='video/mp4' />
        </video>
      </section>
    );
  }
}

export default InfinityFirst;
