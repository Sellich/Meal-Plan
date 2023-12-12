import { createSlice } from "@reduxjs/toolkit";

const calculatorState = {
  calories: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: calculatorState,
  reducers: {
    setCalories(state, action) {
      state.calories = action.payload
    }
  }
});

export const { setCalories } = calculatorSlice.actions;
export default calculatorSlice.reducer;
