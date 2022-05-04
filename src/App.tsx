import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAppState } from './store/selectors/app-selectors';
import { useActions } from './store';
import './App.css';

export function App() {
  const { initialized } = useSelector(getAppState);
  const { initializeApp } = useActions();

  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <div className="App">
      <h1 className="AppTitle">microfrontends-template: {`${initialized}`}</h1>
      <first-app />
      <second-app />
    </div>
  );
}
