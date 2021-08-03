import React from 'react';
import '../css/sitemap.css';
import { Link } from 'react-router-dom';
class Sitemap extends React.Component {
  render() {
    return (
      <div className='sitemap-container'>
        <div className='first'>
          <div className='heading-sitemap'>about</div>
        </div>
        <div className='second'>
          <div className='heading-sitemap'>
            <h5>links</h5>
          </div>
          <div className='links'>
            <Link to='/infinity' className='l'>
              mabb Infinity
            </Link>
            <Link className='l'>mabb Social</Link>
            <Link className='l'>mabb graphic</Link>
          </div>
        </div>
        <div className='third'>
          <div className='heading-sitemap'>support</div>
        </div>
        <div className='fourth'>
          <div className='heading-sitemap'>legal</div>
        </div>
      </div>
    );
  }
}

export default Sitemap;
