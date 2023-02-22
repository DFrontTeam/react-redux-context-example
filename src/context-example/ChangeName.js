import React, {useContext} from 'react';

import { Context } from './AppWithContext';

const ChangeName = () => {
  const profile = useContext(Context);

  console.log('[Context] ChangeName render', profile.name);

  return (
    <p>{profile.name}</p>
  );
}

export default ChangeName
