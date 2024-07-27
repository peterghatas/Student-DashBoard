import { configureStore } from '@reduxjs/toolkit';
import announcementsReducer from './slices/announcementsSlice';
import quizesReducer from './slices/quizesSlice';

const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
    quizes: quizesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;