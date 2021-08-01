import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import ClientItem from '../components/about.client.item';

import '../css/client.group.css';

class AboutClient extends React.Component {
  render() {
    return (
      <section className='vh-100 w-100' style={{ background: 'Pink' }}>
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
    );
  }
}

export default AboutClient;
