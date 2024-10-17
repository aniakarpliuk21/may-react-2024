import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {postService} from "../../services/api.services";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postService.getAllPosts().then(value => setPosts(value))
    }, []);
    return (
        <div className={'goldFlexWrap'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;