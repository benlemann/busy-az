import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import vacancySlice from './vacanciesSlice';



export const store = configureStore({
  reducer: {
    users: userSlice,
    vacancies: vacancySlice,

  },
});
