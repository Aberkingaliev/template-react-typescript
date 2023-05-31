import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: number,
  name: string,
  username: string
}

const initialState = { id: 0, name: 'Abdgali', username: 'Yerkingaliyev' } as UserState;

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { changeName, changeUsername } = userSlice.actions;
export default userSlice.reducer;