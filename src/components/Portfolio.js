import React from 'react';

import '../css/Portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='portfolio-container'>
        <div className='portfolio-heading'>
          <h1> Portfolio</h1>
        </div>
        <div className='portfolio-image'>
          <ImageGal Arr={this.props.DataArr} />
        </div>
      </div>
    );
  }
}

const ImageGal = (props) => {
  const name = props.Arr;
  return (
    <div className='Image-container'>
      {name.map((image) => {
        return (
          <div key={image.id} className='image-two-container'>
            <img src={image.url} alt='' className='image' />
            <div className='image-color'>
              <p>{image.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
