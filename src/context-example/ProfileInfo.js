import React, {useContext} from 'react';

import { Context } from './AppWithContext';

const ProfileInfo = () => {
  const profile = useContext(Context);

  console.log('[Context] ProfileInfo render', profile.age);

  return (
    <p>{profile.age}</p>
  );
}

export default ProfileInfo
