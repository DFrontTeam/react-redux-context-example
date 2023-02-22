import React, {useRef} from 'react';
import "./style.css";
import { sample } from 'lodash';
import AppWithContext from './context-example/AppWithContext';
import AppWithRedux from './with-redux/AppWithRedux';
import reducer from './with-redux/reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer);

export default function App() {
  const setProfileContext = useRef((_nextProfile) => {});
  const setProfileRedux = useRef((_name) => {});

  const NAMES = ['JUAN','ALICIA','CRISTIAN']

  const changeProfileName = () => {
    const name = sample(NAMES);

    console.log('[CHANGING PROFILE]', name);

    if (setProfileContext.current !== undefined) {
      setProfileContext.current({ name,age:18 });
    }

    if (setProfileRedux.current !== undefined) {
      setProfileRedux.current(name ?? "");
    }
  };
  return (
    <div className="App">
      <header className="App-header">

        <p onClick={changeProfileName}>Click to change profile name</p>

        <h1>With Context</h1>
        <AppWithContext changeProfile={setProfileContext} />

        <h1>With Redux</h1>
        <Provider store={store}>
          <AppWithRedux changeProfile={setProfileRedux} />
        </Provider>
      </header>
    </div>
  );
}
