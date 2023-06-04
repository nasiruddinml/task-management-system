import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { RESET_STATE_ACTION_TYPE } from './actions/resetState';
import reducers from './rootReducer';

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  preloadedState: {},
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
