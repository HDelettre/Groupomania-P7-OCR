import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

// Import components
import PostAuthor from './PostAuthor';
import PostMessage from './PostMessage';

const PostCard = ({post}) => {
    const [postAuthor, setPostAuthor] = useState('')

    const user = useSelector((state)=>state.user.userData);

    const allUsers = useSelector((state)=>state.users.allUsers);

    useEffect(() => {
        for (let i=0; i < allUsers.length; i++) {
            if (allUsers[i]._id === post.authorId) {
                setPostAuthor(allUsers[i])
                break
            }
        }
    }, [post]);

    return (
        <div className='postcard'>
            <PostAuthor post={post} postAuthor={postAuthor} />
            <div className='separation_vertical'></div>
            <PostMessage post={post} postAuthor={postAuthor} user={user} />
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
