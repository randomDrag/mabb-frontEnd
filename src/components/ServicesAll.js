import React from 'react';
import '../css/service.all.css';

class ServicesAll extends React.Component {
  constructor(props) {
    super(props);
    this.servicebox = this.servicebox.bind(this);
  }
  servicebox(props) {
    return (
      <div className='cirlce' style={{ background: props.background }}>
        <h2 style={{ color: '#FFF' }}>{props.name}</h2>
      </div>
    );
  }

  render() {
    return (
      <div className='service-container'>
        <div className='our-services'>
          <h1> Our services</h1>
        </div>
        <div className='service-dit-container '>
          <this.servicebox
            name='devlopment'
            background='linear-gradient(180deg, rgba(1,40,57,1) 59%, rgba(104,164,190,1) 59%)'
          />
        </div>
      </div>
    );
  }
}

export default ServicesAll;
