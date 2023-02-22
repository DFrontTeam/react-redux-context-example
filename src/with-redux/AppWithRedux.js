import React from 'react';
import { useDispatch } from 'react-redux'
import Header from './Header';
import Main from './Main';
import {setName} from './actions'

const AppWithContext = ({ changeProfile }) => {
  const dispatch = useDispatch()
  changeProfile.current = (name) => dispatch(setName(name))
  
  console.log('AppWithRedux render');

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default AppWithContext;

