import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authStateReducer from './features/Auth';
import feedbackReducer from './features/Feedback/FeedbackState';
import createAccountFormReducer from './features/Forms/createAccountForm';
import loginFormReducer from './features/Forms/loginForm';
export const store = configureStore({
  reducer: {
    authStateReducer,
    feedbackReducer,
    createAccountFormReducer,
    loginFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
