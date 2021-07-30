import React from 'react';
import Lottie from 'react-lottie';
import AboutMabbAnimation from '../raw/aboutusMabb.json';
import '../css/mabb.group.about.css';
import { ABOUT_MABB_GROUP } from '../const/data';

class AboutMabb extends React.Component {
  render() {
    return (
      <section className='vh-100 w-100'>
        <div className='Mabb-about-container'>
          <div className='about-heading'>
            <h2>ABOUT US</h2>
          </div>
          <div className='AboutMabb-vertical'>
            <div className='about-text'>
              <p>{ABOUT_MABB_GROUP}</p>
            </div>
            <div className='Mabb-about-animation'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: AboutMabbAnimation,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                    Mode: 'bounce',
                  },
                }}
                isClickToPauseDisabled={true}
                direction={-1}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMabb;
