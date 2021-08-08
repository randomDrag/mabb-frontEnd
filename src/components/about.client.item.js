import React from 'react';

import '../css/client.item.css';

class ClientItem extends React.Component {
  render() {
    return (
      <div className='Item-container'>
        <div className='image-container'>
          <img src={this.props.img} alt={this.props.info} />
        </div>
        <div className='info-container'>
          <div className='info-contaner-heading'>
            <h1>{this.props.heading}</h1>
            <em>{this.props.email}</em>
          </div>

          <p>{this.props.info}</p>
        </div>
      </div>
    );
  }
}

export default ClientItem;
