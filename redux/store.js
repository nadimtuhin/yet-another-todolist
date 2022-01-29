import { configureStore } from '@reduxjs/toolkit';
import persistState from 'redux-localstorage';
import { compose } from 'redux';

import taskReducer from './tasksSlice';

const enhancer = compose(
  persistState(/* paths, config */),
);

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
  enhancers: [enhancer],
});
