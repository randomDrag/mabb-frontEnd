import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../images/icon.svg';

import '../css/navbar.css';
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.ButtonClick = this.ButtonClick.bind(this);
  }

  ButtonClick() {
    return (
      <button className='menu-btn opt' onClick={this.props.click}>
        {this.props.name}
      </button>
    );
  }

  //main

  render() {
    return (
      <nav
        className='navbar navbar-expand-sm  w-100 '
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '3',
          padding: '0',
          background: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <div className='d-flex w-100'>
          <div className='align-self-center'>
            <div className='navbar-brand nav-des '>
              {' '}
              <img
                src={icon}
                alt='Mabb icon'
                width='100%'
                height='100%'
                style={{ padding: '7.5px' }}
              />
            </div>
          </div>

          <div className=' w-100'>
            <ul className='navbar-nav '>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <div className=' d-flex w-100 justify-content-center align-self-center'>
                  <div className='box '>
                    <li className='nav-item'>
                      <Link className='Link-bar' to='/'>
                        SERVICES
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link className='Link-bar' to='/'>
                        PORTFOLIO
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link className='Link-bar' to='/'>
                        FEATURES
                      </Link>
                    </li>

                    <li className='nav-item'>
                      <Link className='Link-bar' to='/'>
                        ABOUT
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
