import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './User.module.css'

type UserProps = {
    user:IUser
}
const User:FC<UserProps> = ({user}) => {
    return (
        <div className={styles.user}>
            <h3>{user.id}.{user.name}</h3>
            <span>Username - {user.username}</span>
            <span>Email - {user.email}</span>
            <span>Phone - {user.phone}</span>
            <span>Website -{user.website}</span>
        </div>
    );
};

export default User;