import React, {useRef} from 'react';
import "./style.css";
import { sample } from 'lodash';
import AppWithContext from './AppWithContext';

export default function App() {
  const setProfileContext = useRef((_nextProfile) => {});
  const setProfileRedux = useRef((_name) => {});

  const changeProfileName = () => {
    const name = sample(NAMES);

    console.log('[CHANGING PROFILE]', name);

    if (setProfileContext.current !== undefined) {
      setProfileContext.current({ name });
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
        {/* <AppWithRedux changeProfile={setProfileRedux} /> */}
      </header>
    </div>
  );
}
