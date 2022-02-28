import {FETCH_POSTS, NEW_POST, FETCH_POST, FETCH_DRAFTS, FETCH_MYPOSTS} from "./types";

const url = 'http://localhost:8000';

export const fetchPosts=(param) => dispatch => {
    console.log('fetching');
    fetch(`${url}/posts` )
        .then(res => res.json())
        .then(posts => 
            dispatch({
            type: FETCH_POSTS,
            payload: posts
            })
        );
};

export const createPost = (postData) => dispatch => {
    fetch(`${url}/create`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
            })
        );
};

export const fetchPost=(id) => dispatch => {
    console.log('fetching');
    fetch(`${url}/${id}`)
        .then(res => res.json())
        .then(post => 
            dispatch({
            type: FETCH_POST,
            payload: post
            })
        );
};

export const fetchDrafts=(param) => dispatch => {
    console.log('fetching');
    fetch(`${url}/drafts` )
        .then(res => res.json())
        .then(posts => 
            dispatch({
            type: FETCH_DRAFTS,
            payload: posts
            })
        );
};

export const fetchMyPosts=(param) => dispatch => {
    console.log('fetching');
    fetch(`${url}/myposts` )
        .then(res => res.json())
        .then(posts => 
            dispatch({
            type: FETCH_MYPOSTS,
            payload: posts
            })
        );
};
