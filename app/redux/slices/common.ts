import { CommonState } from '@app/utils/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: CommonState = {
  loading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setGlobalLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const commonReducer = persistReducer(
  {
    key: 'rtk:common',
    storage,
    whitelist: ['loading'],
  },
  commonSlice.reducer,
);
