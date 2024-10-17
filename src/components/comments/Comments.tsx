import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {commentService} from "../../services/api.services";
import Comment from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentService.getAllComments().then(value => setComments(value))
    }, []);
    return (
        <div className={'goldFlexWrap'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;