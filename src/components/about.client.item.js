import React from 'react';

import '../css/client.item.css';

class ClientItem extends React.Component {
  render() {
    return (
      <div className='Item-container'>
        <div className='image-container'></div>
        <div className='info-container'>
          <h1>Jalram</h1>
          <p>
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a
          </p>
        </div>
      </div>
    );
  }
}

export default ClientItem;
