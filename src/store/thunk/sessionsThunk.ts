import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import sessionsApi from "../../apis/sessionsApi";

export const GetAllSessionsThunk = createAsyncThunk(
  "getAllSessionsThunk",
  async (payload, thunk) => {
    const state = thunk.getState() as RootState;

    const response = await sessionsApi(state.sessions.authorization).getAll();

    return response.data;
  },
);
