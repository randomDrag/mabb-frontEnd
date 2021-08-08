import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

import ClientItem from '../components/about.client.item';

import '../css/member.mabbs.css';
import { connect } from 'react-redux';
import { fetchAllTeam } from '../actions';

class Members extends React.Component {
  componentDidMount() {
    this.props.fetchAllTeam();
  }

  CardItem() {
    const { Team } = this.props;

    return Team.map((data) => {
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
            info={data.ABOUT}
            email={data.POST}
            img={data.IMAGE_URL}
          />
        </CarouselItem>
      );
    });
  }

  render() {
    return (
      <>
        <section className=' vh-100 w-100' style={{ background: 'Pink' }}>
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
                {this.CardItem()}
              </Carousel>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapSateToProps = (state) => {
  return {
    Team: Object.values(state.teamInfo),
  };
};

export default connect(mapSateToProps, { fetchAllTeam })(Members);
