import ActionTypes from '../constants/action-types';
import { createAction, nanoid } from '@reduxjs/toolkit';

// Actions

export const initAction = createAction(ActionTypes.INIT, () => ({
  payload: {
    id: nanoid(),
    createdAt: new Date().toISOString(),
  },
}));

export * from './xActions';

export { default as ActionTypes } from '../constants/action-types';
