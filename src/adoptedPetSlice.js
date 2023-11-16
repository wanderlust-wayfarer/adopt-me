import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    unadopt: (state, _) => {
      state.value = null;
    },
  },
});

export const { adopt, unadopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
