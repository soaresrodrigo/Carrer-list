import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RootState {
    username: string;
}

const initialState: RootState = {
    username: ''
};

const user = createSlice({
    name: 'signup/username',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        }
    }
})

export const { setUsername } = user.actions;
export default user.reducer;
