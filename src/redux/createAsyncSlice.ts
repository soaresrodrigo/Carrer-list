import { CaseReducer, Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from "./configureStore";

interface RootState<T> {
    loading: boolean;
    data: T;
    error: null | string;
}

const initialState: RootState<any> = {
    loading: false,
    data: null,
    error: null,
};

export interface PropsConfig<T> {
    name: string;
    initialState?: RootState<T>;
    reducers?: {
        [key: string]: CaseReducer<RootState<T>, PayloadAction<any>>;
      };
}

const createAsyncSlice = <T>(config: PropsConfig<T>) => {
    const slice = createSlice({
        name: config.name,
        initialState: {
            initialState,
            ...config.initialState
        },
        reducers: {
            fetchStarted(state) {
                state.loading = true;
            },
            fetchSuccess(state, action: PayloadAction<T>) {
                state.loading = false;
                state.data = action.payload as Draft<T>;
                state.error = null;
            },
            fetchError(state, action: PayloadAction<string>) {
                state.loading = false;
                state.data = null as Draft<T>;
                state.error = action.payload;
            },
            ...config.reducers
        },
    });

    const {fetchStarted, fetchSuccess, fetchError} = slice.actions;

    const asyncAction: any = (payload: Promise<T>) => async(dispatch: AppDispatch) => {

        try {
            dispatch(fetchStarted());
            const data: T =  await payload;
            return dispatch(fetchSuccess(data))
        } catch (error) {
            return dispatch(fetchError('Algo deu ruim'))
        }
    };

    return {...slice, asyncAction}
};

export default createAsyncSlice;