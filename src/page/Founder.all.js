import React from 'react';

import '../css/founder.mabb.css';

import profile from '../images/profile.png';
class Founder extends React.Component {
  render() {
    return (
      <section className='vh-100 w-100'>
        <div className='Founder-container'>
          <div className='founder-title'>
            <h1> FOUNDER</h1>
          </div>
          <div className='founder-profile-container'>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>
      </section>
    );
  }
}
const Profile = () => {
  return (
    <div className='profile-container'>
      <img src={profile} alt='profile' />
      <h1>NAME</h1>
      <h2>CEO</h2>
    </div>
  );
};
export default Founder;
