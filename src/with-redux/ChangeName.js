import React from 'react';
import { connect } from 'react-redux'

const ChangeName = ({ profile }) => {
  console.log('[Redux] ChangeName render', profile);

  return (
    <p>{JSON.stringify(profile)}</p>
  );
}

const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(
  mapStateToProps,
)(ChangeName)
