import React from 'react';
import PostAuthor from './PostAuthor';
import PostMessage from './PostMessage';

const PostCard = () => {
    return (
        <div className='postcard'>
            <PostAuthor />
            <div className='separation_vertical'></div>
            <PostMessage />
            <div className='separation_vertical'></div>
            <div className='postcard_information'>
                15 Octobre 2022
                <br/>
                20:57
            </div>
        </div>
    );
}

export default PostCard;
