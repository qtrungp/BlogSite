import { FETCH_POSTS, NEW_POST, FETCH_POST } from "../actions/types";

const initialState={
    items: [],
    item: {},
    post: {} 
};

export default function foo(state= initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        case FETCH_POST:
            return {
                ...state,
                post: action.payload
            };
        default:
            return state;
    }
}