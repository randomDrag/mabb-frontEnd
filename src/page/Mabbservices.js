import React from 'react';
import '../css/mabb.group.service.css';
import Lottie from 'react-lottie';
import servicesAnimation from '../raw/services.json';
import CardService from '../components/card.service';
import { data } from '../const/data';

class Services extends React.Component {
  render() {
    return (
      <section className=' vh-100 w-100'>
        <div className='service-conatiner'>
          <div className='services-heading'>
            <h1> Our Services</h1>
          </div>
          <div className='srv-main'>
            <div className='srv-animation'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: servicesAnimation,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                    Mode: 'bounce',
                  },
                }}
                isClickToPauseDisabled={true}
                direction={-1}
              />
            </div>
            <div className='srv-container'>
              <CardService
                cardheading={data.SERVICE_INF.heading}
                body={data.SERVICE_INF.body}
              />
              <CardService
                cardheading={data.SERVICE_SOCIAL.heading}
                body={data.SERVICE_SOCIAL.body}
              />
              <CardService
                cardheading={data.SERVICES_GRAPHIC.heading}
                body={data.SERVICES_GRAPHIC.body}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
