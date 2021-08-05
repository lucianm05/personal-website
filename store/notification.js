import { createSlice } from '@reduxjs/toolkit';

const initialNotificationState = {
  showNotification: true,
  status: 'success',
  title: '',
  message: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialNotificationState,
  reducers: {
    toggle(state, action) {
      state.showNotification = action.payload.showNotification;
      state.status = action.payload.status;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
