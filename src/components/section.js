import React from 'react';

import '../css/firstSection.css';

import MabbIcon from '../images/icon.svg';

import Lottie from 'react-lottie';

import { gsap, Power3 } from 'gsap';

import MabbSocial from '../raw/social.json';
import MabbInfity from '../raw/infinty.json';
import MabbGraphic from '../raw/graphic.json';

class FirstSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { iFont: '1.4rem' };

    this.mabbImage = null;
    this.welcomeMabb = null;
    this.title = null;
    this.tagLine = null;
    this.socialicon = null;
    this.rightDiv = null;
  }

  componentDidMount() {
    //animation

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    tl.from(this.welcomeMabb, {
      opacity: 0,
      scale: 1.5,
    })
      .to(this.welcomeMabb, {
        opacity: 1,
        scale: 1,
        duration: '2',
        ease: Power3.easeIn,
      })
      .to(this.welcomeMabb, {
        opacity: 0,
        duration: '1',
        y: '100px',
        ease: Power3.easeOut,
      })
      .from(this.title, {
        y: '-200px',
        opacity: 0,
        duration: 1.5,
        ease: Power3.easeInOut,
      })
      .from(this.mabbImage, {
        display: 'none',
        y: '-100px',
        duration: 0.5,
        ease: Power3.easeIn,
      })
      .to(this.tagLine, {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        ease: Power3.easeIn,
      })
      .from(this.socialicon, {
        opacity: 0,
        display: 'none',
        duration: 1.5,
        ease: Power3.easeIn,
      })
      .from(this.rightDiv, {
        opacity: 0,

        duration: 0.5,
        ease: Power3.easeIn,
      });

    tl2
      .from(this.mabbImage, { scale: 0.9, ease: Power3.easeIn })
      .to(this.mabbImage, { scale: 1.1, ease: Power3.easeOut })
      .to(this.mabbImage, { scale: 0.9, ease: Power3.easeIn })
      .duration(6)
      .repeat(-1)
      .delay(2);
  }

  render() {
    return (
      <section className='vh-100 w-100 '>
        <div className='secF-container'>
          <div className='left-div'>
            <div
              className='secF-social'
              ref={(socialicon) => (this.socialicon = socialicon)}
            >
              <a href='http://'>
                {' '}
                <i className='bi bi-instagram secF-social-icon'></i>{' '}
              </a>

              <a href='http://'>
                {' '}
                <i className='bi  bi-facebook secF-social-icon'></i>{' '}
              </a>

              <a href='http://'>
                {' '}
                <i className='bi bi-twitter secF-social-icon'></i>{' '}
              </a>
            </div>
          </div>

          <div className='center-div'>
            <div className='MABB-info'>
              <h2 ref={(welcome) => (this.welcomeMabb = welcome)}>
                welcome to
              </h2>

              <img
                src={MabbIcon}
                alt='MABB logo'
                width='100%'
                height='100%'
                ref={(mabbimg) => (this.mabbImage = mabbimg)}
              />
              <h1 ref={(titleMabb) => (this.title = titleMabb)}>MABB GROUP</h1>
              <em ref={(tagLine) => (this.tagLine = tagLine)}>
                Moving affordably between brilliancy
              </em>
            </div>
          </div>

          <div
            className='right-div'
            ref={(rightDiv) => (this.rightDiv = rightDiv)}
          >
            <div className='Mabb-infinty'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: MabbInfity,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                    Mode: 'bounce',
                  },
                }}
                width={150}
                height={150}
                isClickToPauseDisabled='true'
                direction={-1}
              />
              <h5>Mabb infinty</h5>
            </div>

            <div className='Mabb-social'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: MabbSocial,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                    Mode: 'bounce',
                  },
                }}
                width={150}
                height={150}
                isClickToPauseDisabled='true'
                direction={-1}
              />
              <h5>Mabb Social</h5>
            </div>
            <div className='Mabb-graphic'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: MabbGraphic,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                    Mode: 'bounce',
                  },
                }}
                width={150}
                height={150}
                isClickToPauseDisabled='true'
                direction={-1}
              />
              <h5>Mabb GRAPHIC</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FirstSection;
