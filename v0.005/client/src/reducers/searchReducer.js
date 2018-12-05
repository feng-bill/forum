import {
    POST_LOADING,
    SEARCH_POST
} from "../actions/types";

const initialState = {
    posts: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case SEARCH_POST:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
