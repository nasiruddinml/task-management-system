import { commonReducer, commonSlice } from './slices/common';
import { taskReducer, taskSlice } from './slices/task';

const reducers = {
  [commonSlice.name]: commonReducer,
  [taskSlice.name]: taskReducer,
};

export default reducers;
