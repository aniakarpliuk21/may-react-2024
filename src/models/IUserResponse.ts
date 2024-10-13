import { IUser } from "./IUser";

export interface IUserResponse {
    users: IUser[],
    total: number,
    skip:number,
    limit:number
}