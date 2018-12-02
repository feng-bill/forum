import axios from "axios";

import {
    SEARCH_POST, GET_ERRORS
} from "./types";
import { setProfileLoading } from "./profileActions";

// Search post
export const searchPost = (searchData) => dispatch => {
    // dispatch(clearErrors());
    axios
        .post(`/api/filter/ask/${searchData}`)
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