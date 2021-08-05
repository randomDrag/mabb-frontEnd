import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../images/icon.svg';

import '../css/navbar.css';

import { connect } from 'react-redux';

import MabbGroup from '../images/icon.svg';
// import MabbSocial from '../images/social.svg';
import MabbInfinity from '../images/infinity.svg';
import MabbGraphic from '../images/graphic.svg';
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

  componentDidMount() {
    this.navBarIconChanger();
  }

  navBarIconChanger() {
    const { isNav } = this.props;
    console.log(isNav.toString());
    switch (isNav.toString()) {
      case 'MabbGroup':
        return MabbGroup;
      case 'MabbSocial':
        return MabbGroup;
      case 'MabbInfinity':
        return MabbInfinity;

      default:
    }
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
                src={this.navBarIconChanger()}
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
const mapStateToProps = (state) => {
  return {
    isNav: state.navbarIcon.navIco,
  };
};

export default connect(mapStateToProps)(Navbar);
