import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import ClientItem from '../components/about.client.item';

import '../css/client.group.css';
import { connect } from 'react-redux';

import { fetchAllClient } from '../actions';

import male from '../images/male.svg';

import F from '../images/F.svg';

class AboutClient extends React.Component {
  componentDidMount() {
    this.props.fetchAllClient();
  }

  CardItem() {
    const { clientData } = this.props;

    return clientData.map((data) => {
      return (
        <CarouselItem
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <ClientItem
            key={data._id}
            heading={data.NAME}
            info={data.FEEDBACK}
            email={data.EMAIL}
            img={data.GENDER == 'M' ? male : F}
          />
        </CarouselItem>
      );
    });
  }

  render() {
    return (
      <section className='vh-100 w-100' style={{ background: 'Pink' }}>
        <Carousel
          fade
          className='carousel-inner'
          style={{ width: '100%', height: '100vh' }}
        >
          {this.CardItem()}
        </Carousel>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clientData: Object.values(state.clientData),
  };
};

export default connect(mapStateToProps, { fetchAllClient })(AboutClient);
