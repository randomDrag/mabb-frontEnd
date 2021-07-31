import React from 'react';
import '../css/card.comp.css';
import { gsap, Power3 } from 'gsap';

class CardService extends React.Component {
  constructor(props) {
    super(props);

    this.mouseEnterhandel = this.mouseEnterhandel.bind(this);
    this.mouseOuthandel = this.mouseOuthandel.bind(this);

    this.mainCard = null;
    this.cardAbout = null;
  }
  mouseEnterhandel() {
    const tl = gsap.timeline();
    tl.to(this.mainCard, {
      height: '400px',
      duration: 0.5,
      ease: Power3.easeInOut,
    }).to(this.cardAbout, {
      opacity: 1,
      display: 'block',
      duration: 0.5,
      ease: Power3.easeIn,
    });
  }

  mouseOuthandel() {
    if (this.mainCard != null) {
      const tl = gsap.timeline();

      tl.to(this.mainCard, {
        height: '100px',
        duration: 0.5,
        ease: Power3.easeIn,
      }).to(this.cardAbout, {
        opacity: 0,
        display: 'none',
        duration: 0.5,
        ease: Power3.easeOut,
      });
    }
  }

  render() {
    return (
      <div
        className='Card-main'
        ref={(main) => (this.mainCard = main)}
        onMouseEnter={this.mouseEnterhandel}
        onMouseLeave={this.mouseOuthandel}
      >
        <div className='card-heading'>
          <h1>{this.props.cardheading}</h1>
        </div>
        <div className='card-about' ref={(card) => (this.cardAbout = card)}>
          <em>{this.props.body}</em>
        </div>
      </div>
    );
  }
}

export default CardService;
