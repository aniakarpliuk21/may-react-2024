import React, { FC } from 'react';
import { IPost } from '../../models/IPost';
import './Post.css';

type ITypeProps = {
    post:IPost
}
const Post:FC<ITypeProps> = ({post}) => {
    return (
        <div className={'post'}>
            <h4>{post.id}.{post.title}</h4>
            <p>User ID:{post.userId}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;