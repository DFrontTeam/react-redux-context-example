import React from 'react';
import { useSelector } from 'react-redux'

const ProfileInfo = () => {
  const profileAge = useSelector((state)=>state.age)
  console.log('[Redux] ProfileInfo render', profileAge);

  return (
    <p>{profileAge}</p>
  );
}

export default ProfileInfo