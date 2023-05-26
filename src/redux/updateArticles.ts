import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "articles/updated",
    initialState: { loading: false },
    reducers: {
        setLoadingArticle: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const {setLoadingArticle} = slice.actions;

export default slice.reducer;