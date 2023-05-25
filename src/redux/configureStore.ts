import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import user from './user';
import modal from './modal';
import articles from './articles';

const reducer = combineReducers({ user, modal, articles });
const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export default store;