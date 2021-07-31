import React from 'react';

import '../css/mabb.contactus.css';

import Lottie from 'react-lottie';
import contactAnim from '../raw/contactus.json';

class Contactus extends React.Component {
  render() {
    return (
      <section className='vh-100 w-100'>
        <div className='contact-us-container'>
          <div className='animation-contact'>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: contactAnim,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                  Mode: 'bounce',
                },
              }}
              isClickToPauseDisabled={true}
              direction={-1}
            />
          </div>
          <div className='contact-second-container'>
            <div className='contact-heading'>
              <h1>Contact us</h1>
            </div>
            <div className='contact-address'>
              <iframe
                style={{ borderRadius: '20px' }}
                width='400px'
                height='400px'
                src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              ></iframe>
            </div>
            <div className='contact-button'>
              <a href='http://' className='button-icon'>
                <i className='bi bi-whatsapp' style={{ fontSize: '2rem' }}></i>
              </a>
              <a href='' className='button-icon'>
                <i
                  className='bi bi-telephone-fill'
                  style={{ fontSize: '2rem' }}
                ></i>
              </a>
              <a href='' className='button-icon'>
                <i className='bi bi-mailbox2' style={{ fontSize: '2rem' }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contactus;
