import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';

const INITIAL_PROFILE = {
  name: 'Guest',
};

export const Context = React.createContext(INITIAL_PROFILE);

const AppWithContext = ({ changeProfile }) => {
  const [profile, setProfile] = useState(INITIAL_PROFILE);

  changeProfile.current = setProfile;
  
  console.log('AppWithContext render');

  return (
    <Context.Provider value={profile}>
      <Header />
      <Main />
    </Context.Provider>
  );
};

export default AppWithContext;