import aboutusInf from '../raw/aboutus_inf.json';
import ServicesAll from '../components/ServicesAll';
import React from 'react';
import AboutAll from '../components/Aboutus.all';
import { Carousel, CarouselItem } from 'react-bootstrap';
import '../css/social.main.css';
import ani from '../raw/socialMain.json';
import Lottie from 'react-lottie';
import ClientItem from '../components/about.client.item';

class Social extends React.Component {
  render() {
    return (
      <>
        <section className='vh-100 w-100'>
          <div className='h-100 v-100 social-main-container'>
            <div className='welcometo-social'>
              <div className='social-box'>
                <h1>MABB SOCIAL</h1>
                <h6>spotlight your dreams</h6>
              </div>
            </div>
            <div className='social-animation'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: ani,
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
        </section>

        <section className='vh-100 w-100' style={{ background: '#B7B7B7' }}>
          <AboutAll heading='ABOUT US' animationData={aboutusInf} />
        </section>
        <section className='vh-100 w-100' style={{ background: '#FFCBD' }}>
          <ServicesAll />
        </section>
        <section className='vh-100 w-100' style={{ background: '#FFCBD' }}>
          <Carousel
            fade
            className='carousel-inner'
            style={{ width: '100%', height: '100vh' }}
          >
            <CarouselItem
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <ClientItem key='1' />
            </CarouselItem>
            <CarouselItem
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <ClientItem key='1' />
            </CarouselItem>
          </Carousel>
        </section>
      </>
    );
  }
}

export default Social;
