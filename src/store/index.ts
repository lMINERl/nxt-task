import { combineReducers } from "redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import SessionsSlice from "./slice/ sessionsSlice";

const reducers = combineReducers({
  sessions: SessionsSlice.reducer,
});

export const store = configureStore({ reducer: reducers });
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
