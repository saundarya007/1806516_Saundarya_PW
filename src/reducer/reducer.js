import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading : true,
    error: " ",
    data: [],
};

const reducer = (state = initialState , action) => {
    console.log(action.type);
    switch (action.type) {
        case 'DATA_FETCH_INITIATED':
            return { ...state, loading: true };
        case 'DATA_FETCH_SUCCESS':
            return { ...state, data: action.payload, loading: false, error :false }
        case 'DATA_FETCH_FAILED':
            return {...state,loading : false , error: true}
        default: 
            return state;
    }
};
export default reducer;