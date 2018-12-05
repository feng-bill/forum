import axios from "axios";

import {
    SEARCH_POST, GET_ERRORS, CLEAR_ERRORS, POST_LOADING
} from "./types";

// Search post
export const keywordSearch = data => dispatch => {
    dispatch(clearErrors());
    // dispatch(setPostLoading());
    axios
        .post(`/api/filter/search/${data}`)
        .then(res =>
            dispatch({
                type: SEARCH_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );

};


// Set post loading when loading the profile
// Set loading state
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    };
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
