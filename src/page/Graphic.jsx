import React from 'react';
import aboutAni from '../raw/graphicAbout.json';
import { Carousel, CarouselItem } from 'react-bootstrap';
import '../css/social.main.css';
import ani from '../raw/graphicbg.json';
import Lottie from 'react-lottie';
import ClientItem from '../components/about.client.item';
import { data } from '../const/data';
import {
  navIcon,
  fetchAllSocialClient,
  fetchAllSocialService,
} from '../actions';
import { connect } from 'react-redux';

class Graphic extends React.Component {
  componentDidMount() {
    this.props.navIcon({ navIco: 'MabbSocial' });
    this.props.fetchAllSocialClient();
    this.props.fetchAllSocialService();
  }

  servicebox(props) {
    return (
      <div
        className='service-opt'
        style={{
          background: props.background,
          height: '400px',
          width: '250px',
          borderRadius: '20px',
          flexDirection: 'column',
        }}
      >
        <h2
          style={{
            color: '#F1ECD1',
            justifySelf: 'start',
            height: '100%',
            paddingTop: '20px',
            flex: 1,
          }}
        >
          {props.name}
        </h2>
        <p
          style={{
            color: '#F1ECD1',
            justifySelf: 'center',
            height: '100%',
          }}
        >
          {props.info}
        </p>
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

  serbox() {
    const { ser } = this.props;

    return ser.map((data) => {
      return (
        <this.servicebox
          name={data.NAME}
          key={data._id}
          info={data.ABOUT}
          background='#9F55E8'
        />
      );
    });
  }

  render() {
    return (
      <>
        <section className='vh-100 w-100'>
          <div className='h-100 v-100 social-main-container'>
            <div className='welcometo-social'>
              <div className='social-box'>
                <h1>MABB GRAPHIC</h1>
                <h6>Desgin that shines you</h6>
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
                direction={-1}
              />
            </div>
            <div className='about-infoi'>
              <div
                className='about-box'
                style={{
                  background: '#9A5FE6',
                  height: '400px',
                  borderTopLeftRadius: '0px',
                  borderBottomRightRadius: '0px',
                  borderTopRightRadius: '70px',
                  borderBottomLeftRadius: '70px',
                }}
              >
                <h1 style={{ color: ' #F7EB63' }}>ABOUT US</h1>
                <div className='about-p'>
                  <p style={{ color: ' #F7EB63' }}>{data.GRAPHIC_ABOUTUS}</p>
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
})(Graphic);
