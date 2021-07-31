import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import ClientItem from '../components/about.client.item';

class AboutClient extends React.Component {
  render() {
    return (
      <section className='vh-100 w-100' style={{ background: 'Pink' }}>
        <Carousel
          fade
          style={{ width: '100%', height: '100vh', border: '2px solid yellow' }}
        >
          <CarouselItem
            style={{
              width: '100%',
              height: '100%',
              border: '2px solid yellow',
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
