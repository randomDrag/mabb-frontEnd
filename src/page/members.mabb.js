import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import ClientItem from '../components/about.client.item';

import '../css/member.mabbs.css';

class Members extends React.Component {
  render() {
    return (
      <section className='vh-100 w-100' style={{ background: 'Pink' }}>
        <div className='member-container'>
          <div className='member-heading'>
            <h1>OUR TEAMS</h1>
          </div>
          <div className='member-info'>
            <Carousel
              fade
              className='carousel-inner'
              style={{ width: '100%', height: '100%' }}
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
          </div>
        </div>
      </section>
    );
  }
}

export default Members;
