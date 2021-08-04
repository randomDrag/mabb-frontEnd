import React from 'react';
import '../css/sitemap.css';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import mabbfroup from '../images/icon.svg';
class Sitemap extends React.Component {
  render() {
    return (
      <div className='sitemap-container'>
        <div className='top-box'>
          <div className='first'>
            <div className='sitemap-first'>
              <div className='sitemap-logo'>
                <img src={mabbfroup} alt='' />
              </div>
              <div className='sitemap-address'>
                <address>
                  Plot No. C/302, Ttc Area Midc, Thane Belapur Road, Pawane,
                  Turbhe<br></br>
                  Mumbai,Maharashtra 400705
                </address>
                <div>
                  <i class='bi bi-telephone-fill'> 9917488608</i>
                </div>
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
              <Link className='l'>mabb Social</Link>
              <Link className='l'>mabb graphic</Link>
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
        <div className='bottom-box'>hello</div>
      </div>
    );
  }
}

export default Sitemap;
