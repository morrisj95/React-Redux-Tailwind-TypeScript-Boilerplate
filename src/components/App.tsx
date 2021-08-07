import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { Landing } from './Landing/Landing';
import { setTheme } from '../utils/setTheme';

import { doDummyThingAction, initAction } from '../actions';

export const App: React.VoidFunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'My App';
    setTheme();
    dispatch(initAction());
    dispatch(doDummyThingAction('foo'));
  });
  return <Landing />;
};
