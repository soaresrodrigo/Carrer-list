import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RootState {
    username: string;
}

const initialState: RootState = {
    username: ''
};

const slice = createSlice({
    name: 'signup/username',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        }
    }
})

export const { setUsername } = slice.actions;
export default slice.reducer;
