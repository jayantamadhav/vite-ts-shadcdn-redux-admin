import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/authSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({ 
  user: userAuthReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
