import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {userService} from "../../services/api.services";
import User from "../user/User";
const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value))
    }, []);
    return (
        <div className={'goldFlexWrap'}>
            {
                users.map(user =><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;