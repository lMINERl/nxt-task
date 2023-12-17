import { createSlice } from "@reduxjs/toolkit";
import { GetAllSessionsThunk } from "../thunk/sessionsThunk";

interface VenueData {
  capacity: string;
  image: string;
  id: number;
  name: string;
  venue_type?: string;
}

export interface SessionsData {
  id: number;
  title: string;
  cover_image: string;
  date: string;
  from: string;
  till: string;
  venue: VenueData;
}

export interface SessionsResponseData {
  count: number;
  is_last_offset: boolean;
  sessions: SessionsData[];
}

const initialState = {
  data: {} as SessionsResponseData,
  loading: false,
  authorization:
    "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpZCI6MzAzLCJ0eXBlIjoidXNlciIsInJhbiI6IkJORU5WSVBOTlFUWVBMS0tVQ0JWIiwic3RhdHVzIjoxfQ.YGV-jGKZj1Lp4SqlM3aiF6Aov6YVF6lZRMpKvx_Zdrpjj4C1zE-JSTKtjVboQ9de58TUViyVOc4JwiktjF_4yxnYzIrw449s584j2GiqUpxfp6OPmfAj8BAbfN_M4RoU5PXEjhcNVh5uNRtxtvxZtpECrl72_22T4he3LbqISMNHzVh5eprIKIFLt_pM7cyRKt3Njf8I89CLnq5nUpiDHnMMForamKq9jubmiYPOHpFvijEE3-jusRk0F1T32zMY_0AELXnpqhbbx6HtmMdxBahnrUNyznacdVwaSrNus8vX01N8zEcfRvkRzYuqjnZXr9jrm2iriHq80iicUG99GQ",
};

const SessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllSessionsThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(GetAllSessionsThunk.pending, (state, _action) => {
      state.loading = true;
    });
    builder.addCase(GetAllSessionsThunk.rejected, (state, _action) => {
      state.loading = false;
      state.data = {} as SessionsResponseData;
    });
  },
});

export default SessionsSlice;
