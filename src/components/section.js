import React from 'react';

import '../css/firstSection.css';

import MabbIcon from '../images/icon.svg';

import { gsap, Power3 } from 'gsap';

class FirstSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { iFont: '1.4rem' };

    this.mabbImage = null;
    this.welcomeMabb = null;
    this.title = null;
    this.tagLine = null;
    this.socialicon = null;
  }

  componentDidMount() {
    //animation

    const tl = gsap.timeline();
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
      .from(this.title, { y: '-400px', opacity: 0 })
      .to(this.title, {
        opacity: 1,
        duration: 2,
        display: 'block',
        ease: Power3.easeIn,
      })
      .from(this.mabbImage, {
        opacity: 0,
        display: 'block',
        scale: 0.2,
        delay: -1,
      })
      .to(this.mabbImage, {
        display: 'block',
        opacity: 1,
        scale: 1,
        delay: -1,
        duration: 1.5,
        ease: Power3.easeIn,
      })
      .to(this.tagLine, {
        display: 'block',
        opacity: 1,
        duration: 2,
        ease: Power3.easeIn,
      })
      .from(this.socialicon, {
        opacity: 0,
        display: 'none',
        duration: 1.5,
        ease: Power3.easeIn,
      });
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

          <div className='right-div'></div>
        </div>
      </section>
    );
  }
}

export default FirstSection;
