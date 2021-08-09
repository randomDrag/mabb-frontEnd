import React from 'react';

import '../css/founder.mabb.css';

import { connect } from 'react-redux';

import { AllFounder } from '../actions';
class Founder extends React.Component {
  componentDidMount() {
    this.props.AllFounder();
  }
  render() {
    const { founder } = this.props;
    return (
      <section className='vh-100 w-100'>
        <div className='Founder-container'>
          <div className='founder-title'>
            <h1> FOUNDER</h1>
          </div>
          <div className='founder-profile-container'>
            {founder.map((data) => {
              return (
                <Profile
                  key={data._id}
                  name={data.NAME}
                  post={data.POST}
                  img={data.IMAGE_URL}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
const Profile = (props) => {
  return (
    <div className='profile-container'>
      <img src={props.img} alt='profile' />
      <h1>{props.Name}</h1>
      <h2>{props.post}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    founder: Object.values(state.founder),
  };
};

export default connect(mapStateToProps, { AllFounder })(Founder);
