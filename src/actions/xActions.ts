import ActionTypes from '../constants/action-types';
import { createAction, nanoid } from '@reduxjs/toolkit';

export const doDummyThingAction = createAction(
  ActionTypes.DO_DUMMY_THING,
  (text: string) => ({
    payload: {
      text,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  })
);
