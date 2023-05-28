import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article } from "@src/components/core/interfaces";

export type modalType = 'delete' | 'edit' | null;

export interface IModal {
    currentModal: modalType;
    currentArticle?: Article | null;
}

const initialState: IModal = {
    currentModal: null,
    currentArticle: null
};

const slice = createSlice({
    name: 'post/modal',
    initialState,
    reducers: {
        setCurrentModal: (state, action: PayloadAction<IModal>) => {
            state.currentModal = action.payload.currentModal;
            state.currentArticle = action.payload.currentArticle;
        }
    }
})

export const { setCurrentModal } = slice.actions;
export default slice.reducer;
