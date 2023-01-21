import { configureStore, combineReducers } from '@reduxjs/toolkit';
import registrationReducer from './registration/registration_reducers';
import loginReducer from './login/login_reducers';
import profileReducer from './profile/profile_reducers';

const registration = combineReducers({
  registration: registrationReducer,
  auth: loginReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: registration,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
