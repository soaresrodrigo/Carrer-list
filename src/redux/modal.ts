import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type modalType = 'delete' | 'edit' | null;

export interface IModal {
    currentModal: modalType;
    idArticle: number;
}

const initialState: IModal = {
    currentModal: null,
    idArticle: 0
};

const slice = createSlice({
    name: 'post/modal',
    initialState,
    reducers: {
        setCurrentModal: (state, action: PayloadAction<IModal>) => {
            state.currentModal = action.payload.currentModal;
            state.idArticle = action.payload.idArticle;
        }
    }
})

export const { setCurrentModal } = slice.actions;
export default slice.reducer;
