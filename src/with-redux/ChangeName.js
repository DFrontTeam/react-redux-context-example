import React from 'react';
import { useSelector } from 'react-redux'

const ChangeName = () => {
  const profileName = useSelector((state)=>state.name)
  console.log('[Redux] ChangeName render', profileName);

  return (
    <p>{profileName}</p>
  );
}

export default ChangeName;