import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from './Post.module.css';
type PostProps = {
    post:IPost
}
const Post:FC<PostProps> = ({post}) => {
    return (
        <div className={styles.post}>
            {post.id}.{post.title}
            <span>UserId - {post.userId}</span>
            <span>{post.body}</span>
        </div>
    );
};

export default Post;