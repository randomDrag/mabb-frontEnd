import React from 'react';
import '../css/mabb.group.about.css';
import Lottie from 'react-lottie';

class AboutAll extends React.Component {
  render() {
    return (
      <div className='Aboutall-container'>
        <div className='about-heading'>
          <h2>{this.props.heading}</h2>
        </div>
        <div className='AboutMabb-vertical'>
          <div className='about-text'>
            <p>{this.props.info}</p>
          </div>
          <div className='Mabb-about-animation'>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: this.props.animationData,
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
      </div>
    );
  }
}

export default AboutAll;
