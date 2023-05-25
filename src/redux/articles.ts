import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article } from "@src/components/core/interfaces";
import {  listArticles, storeArticle } from "@src/actions/client";
import { AppDispatch } from "./configureStore";


interface RootState {
    loading: boolean;
    data: Article | Article[] | null
    error: null | string,
}

const initialState: RootState = {
    loading: false,
    data: null,
    error: null
}

const slice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        fetchStarted(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<Article | Article[]>) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
    }
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const getArticles: any = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchStarted());
        const data = await listArticles();
        return dispatch(fetchSuccess(data.results));
    } catch (error) {
        return dispatch(fetchError('Error getArticles'));

    }
};

export const createArticle: any = (content: string, title: string, username: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchStarted());
        const data = await storeArticle({content, title, username});
        dispatch(fetchSuccess(data));
    } catch (error) {
        return dispatch(fetchError('Error createArticle'));

    }
};




export default slice.reducer;