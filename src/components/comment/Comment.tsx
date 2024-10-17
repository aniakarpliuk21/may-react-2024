import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import styles from './Comment.module.css';

type CommentProps = {
    comment:IComment
}
const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div className={styles.comment}>
            <h4>{comment.id}.{comment.name}</h4>
            <span>{comment.body}</span>
        </div>
    );
};

export default Comment;