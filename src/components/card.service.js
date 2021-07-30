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
    gsap.to(this.mainCard, {
      height: '400px',
      duration: 0.5,
      ease: Power3.easeInOut,
    });
    console.log('m o');
  }

  mouseOuthandel() {
    if (this.mainCard != null) {
      gsap.to(this.mainCard, {
        height: '100px',
        duration: 0.5,
        ease: Power3.easeIn,
      });
    }
    console.log('o');
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
          <h1>heading</h1>
        </div>
        <div className='card-about' ref={(card) => (this.cardAbout = card)}>
          <em>body text will pressent</em>
        </div>
      </div>
    );
  }
}

export default CardService;
