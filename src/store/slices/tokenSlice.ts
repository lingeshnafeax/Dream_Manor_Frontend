import { createSlice } from "@reduxjs/toolkit";

interface TokenDataType {
  token: string | null;
}

const initialTokenState: TokenDataType = {
  token: localStorage.getItem("token"),
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: initialTokenState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
