import { createSlice } from '@reduxjs/toolkit';

const menuState = {
  openMenu: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: menuState,
  reducers: {
    changeOpenMenu(state, action) {
      state.openMenu = action.payload
    }
  }
});

export const { changeOpenMenu } = menuSlice.actions;
export default menuSlice.reducer;