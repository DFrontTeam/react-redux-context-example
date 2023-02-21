import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import reducer, { changeName } from './reducer';

import Header from './Header';
import Main from './Main';

const store = configureStore({
  reducer,
})

const AppWithContext = ({ changeProfile }) => {
  changeProfile.current = (name) => store.dispatch(changeName(name));
  
  console.log('AppWithRedux render');

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default AppWithContext;
