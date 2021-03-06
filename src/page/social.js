import React from 'react';
import aboutAni from '../raw/socialAboutus.json';
import { Carousel, CarouselItem } from 'react-bootstrap';
import '../css/social.main.css';
import ani from '../raw/socialMain.json';
import Lottie from 'react-lottie';
import ClientItem from '../components/about.client.item';
import { data } from '../const/data';
import {
  navIcon,
  fetchAllSocialClient,
  fetchAllSocialService,
} from '../actions';
import { connect } from 'react-redux';

class Social extends React.Component {
  componentDidMount() {
    this.props.navIcon({ navIco: 'MabbSocial' });
    this.props.fetchAllSocialClient();
    this.props.fetchAllSocialService();
  }

  servicebox(props) {
    return (
      <div className='service-opt' style={{ background: props.background }}>
        <h2>{props.name}</h2>
      </div>
    );
  }

  socialLogo() {
    const { client } = this.props;
    return client.map((data) => {
      return (
        <div key={data._id} className='logo-img-box'>
          <img src={data.LOGO} alt={data.NAME} />
        </div>
      );
    });
  }

  CardItem() {
    const { client } = this.props;

    return client.map((data) => {
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
            email={data.TYPE}
            img={data.LOGO}
          />
        </CarouselItem>
      );
    });
  }

  serbox() {
    const { ser } = this.props;

    return ser.map((data) => {
      return <this.servicebox name={data.NAME} key={data._id} />;
    });
  }

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
              />
            </div>
          </div>
        </section>

        <section
          className='vh-100 w-100'
          style={{ background: 'rgb(248, 247, 247)' }}
        >
          <div className='About-social'>
            <div className='about-logo'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: aboutAni,
                  rendererSettings: {
                    Mode: 'bounce',
                  },
                }}
                isClickToPauseDisabled={true}
              />
            </div>
            <div className='about-infoi'>
              <div className='about-box'>
                <h1>ABOUT US</h1>
                <div className='about-p'>
                  <p>{data.SOCIAL_ABOUTUS}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='vh-100 w-100'
          style={{ background: 'rgb(248, 247, 247)' }}
        >
          <div className='social-service-container'>
            <div className='social-service-heading'>
              <h1>our Services</h1>
            </div>
            <div className='social-service-box'>{this.serbox()}</div>
          </div>
        </section>
        <section
          className='vh-100 w-100'
          style={{ background: 'rgb(248, 247, 247)' }}
        >
          <Carousel
            fade
            className='carousel-inner'
            style={{ width: '100%', height: '100vh' }}
          >
            {this.CardItem()}
          </Carousel>
        </section>
        <section className='logo-social'>{this.socialLogo()}</section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    client: Object.values(state.socialClient),
    ser: Object.values(state.socialService),
  };
};

export default connect(mapStateToProps, {
  navIcon,
  fetchAllSocialClient,
  fetchAllSocialService,
})(Social);
