import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './reducer';


export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
// export const persistor = persistStore(store);
export default store