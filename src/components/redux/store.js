import { configureStore } from "@reduxjs/toolkit";
import shipListReducer from './shipListSlice';
import componentListReducer from './componentListSlice';
import jobsListReducer from './jobsListSlice'
import usersListReducer from './usersListSlice'

export const store= configureStore({
    reducer:{
        ship: shipListReducer,
        component: componentListReducer,
        jobs: jobsListReducer,
        user: usersListReducer,
    }
})