import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../models/IUser';
import User from '../user/User';
import {postService, userService } from '../../services/services';
import './Users.css'
import { IPost } from '../../models/IPost';
import Post from '../post/Post';
import Posts from '../posts/Posts';

const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        userService.getAllUsers().then((users:IUser[]) => setUsers(users));
    }, []);
    const liftUser = (user:IUser) => {
        postService.getPostsByUserId(user).then((posts:IPost[]) =>setPosts(posts));
    }
    return (
        <div>
            <div>
                <Posts posts={posts}/>
            </div>
            <div className={'users'}>
                <h2>Users:</h2>
                {
                    users.map((user: IUser) => <User liftUser={liftUser} user={user} key={user.id}/>)
                }
            </div>

        </div>
    );
};

export default Users;