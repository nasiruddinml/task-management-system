import { TaskI, TaskState } from '@app/utils/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: TaskState = {
  taskList: [],
  totalMD: 0.0,
  totalHours: 0,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTaskList: (state, action: PayloadAction<TaskI>) => {
      const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
      const task = { ...action.payload, id };
      const newTask = [...state.taskList, task];
      state.taskList = newTask;
      state.totalHours = Number(state.totalHours) + Number(action.payload.time);
      state.totalMD = parseFloat((Number(state.totalHours) / 8).toFixed(2));
    },
    deleteTaskList: (state, action: PayloadAction<string>) => {
      // check if index is valid
      if (action.payload) {
        const oldTaskList = [...state.taskList];
        const task = oldTaskList.filter(item => item.id === action.payload);
        const newTaskList = oldTaskList.filter(
          item => item.id !== action.payload,
        );
        state.taskList = newTaskList;
        state.totalHours = Number(state.totalHours) - task[0].time;
        state.totalMD = parseFloat((Number(state.totalHours) / 8).toFixed(2));
      }
    },
  },
});

export const taskReducer = persistReducer(
  {
    key: 'rtk:task',
    storage,
    whitelist: [],
  },
  taskSlice.reducer,
);
