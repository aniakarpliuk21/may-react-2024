import React, { FC } from 'react';
import { IPost } from '../../models/IPost';
import Post from '../post/Post';
import './Posts.css';

type ITypeProps = {
    posts:IPost[]
}
const Posts:FC<ITypeProps>  = ({posts}) => {
    return (
        <div>
            <h3>Post of user:</h3>
            <div className={'posts'}>
                {
                    posts.map((post: IPost) => <Post post={post} key={post.id}/>)
                }
            </div>
        </div>
    );
};

export default Posts;