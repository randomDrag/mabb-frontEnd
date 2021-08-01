import React from 'react';

import '../css/client.item.css';

class ClientItem extends React.Component {
  render() {
    return (
      <div className='Item-container'>
        <div className='image-container'>
          <img
            src='https://images-platform.99static.com//b6HxR1x9W8MIaq136g2mfhyVm6U=/224x2209:809x2794/fit-in/590x590/99designs-contests-attachments/114/114944/attachment_114944189'
            alt=''
          />
        </div>
        <div className='info-container'>
          <div className='info-contaner-heading'>
            <h1>Jalram</h1>
            <em>sumitkumar9006@gamil.com</em>
          </div>

          <p>
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a The href
            attribute requires a valid value to be accessible. Provide a valid,
            navigable address as the href value. If you cannot provide a valid
            href, but still need the element to resemble a The href attribute
            requires a valid value to be accessible. Provide a valid, navigable
            address as the href value. If you cannot provide a valid href, but
            still need the element to resemble a The href attribute requires a
            valid value to be accessible. Provide a valid, navigable address as
            the href value. If you cannot provide a valid href, but still need
          </p>
        </div>
      </div>
    );
  }
}

export default ClientItem;
