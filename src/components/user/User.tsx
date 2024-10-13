import React, { FC } from 'react';
import { IUser } from '../../models/IUser';
import './User.css'
type IUserProps = {
    user:IUser,
    liftUser : (user:IUser) => void
}
const User:FC<IUserProps> = ({user,liftUser}) => {
    return (
        <div className={'user'}>
            <div className={'infoOfUser'}>
                <span>{user.id}.{user.firstName}</span>
                <span>Age-{user.age}</span>
            </div>
            <div>
                <img src={user.image} alt={user.firstName}/>
            </div>
            <button onClick={() => {
                liftUser(user)
            }}>User posts</button>
        </div>
    );
};

export default User;