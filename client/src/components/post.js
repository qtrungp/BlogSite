import PostItems from './postitems';
import '../styles/blogs.css'
import React from 'react';

const Post = () => {
    return (
        <div className='blog__page'>
                
                <h1 className='blog__page__header'> Posts</h1>
                <PostItems />
            </div>
    );
}

export default Post;

