import React from 'react';
import { connect } from 'react-redux'

const ProfileInfo = ({ profile }) => {
  console.log('[Redux] ProfileInfo render', profile);

  return (
    <p>{JSON.stringify(profile)}</p>
  );
}

const mapStateToProps = (state) => ({
  profile: state,
});

export default connect(
  mapStateToProps,
)(ProfileInfo)
