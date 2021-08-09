import React from 'react';
import '../css/sitemap.css';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import mabbfroup from '../images/icon.svg';
import { getDate } from '../actions';
import { connect } from 'react-redux';
import MabbGroup from '../images/icon.svg';
// import MabbSocial from '../images/social.svg';
import MabbInfinity from '../images/infinity.svg';
import MabbGraphic from '../images/graphic.svg';
class Sitemap extends React.Component {
  componentDidMount() {
    this.props.getDate();
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
  render() {
    console.log(this.props);
    return (
      <div className='sitemap-container'>
        <div className='top-box'>
          <div className='first'>
            <div className='sitemap-first'>
              <div className='sitemap-logo'>
                <img src={this.navBarIconChanger()} alt='' />
              </div>
              <div className='sitemap-address'>
                <address>
                  Plot No. C/302, Ttc Area Midc,<br></br>
                  Thane Belapur Road, Pawane, Turbhe<br></br>
                  Mumbai,Maharashtra 400705
                </address>

                <i class='bi bi-telephone-fill'> 8999663595</i>
                <i class='bi bi-telephone-fill'> 9284667592</i>
                <i class='bi bi-telephone-fill'> 9518569429</i>
              </div>
            </div>
          </div>
          <div className='second'>
            <div className='heading-sitemap'>
              <h5>links</h5>
            </div>
            <div className='links'>
              <Link to='/infinity' className='l'>
                mabb Infinity
              </Link>
              <Link to='/social' className='l'>
                mabb Social
              </Link>
              <Link to='/graphic' className='l'>
                mabb graphic
              </Link>
            </div>
          </div>
          <div className='third'>
            <div className='heading-sitemap'>contact us</div>
            <div className='form-box'>
              <Form>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlInput1'
                >
                  <Form.Control
                    type='email'
                    placeholder='Your email address '
                  />
                </Form.Group>
                <Form.Group
                  className='mb-3'
                  controlId='exampleForm.ControlTextarea1'
                >
                  <Form.Control as='textarea' rows={3} />
                </Form.Group>
                <div className='Form-button'>
                  <button type='submit'>SUBMIT</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className='bottom-box'>
          <em>copyright ©{this.props.date - 1 + '-' + this.props.date}</em>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.getdate.date,
    isNav: state.navbarIcon.navIco,
  };
};

export default connect(mapStateToProps, { getDate })(Sitemap);
