import axios from "axios";
import { IUserResponse } from "../models/IUserResponse";
import { IUser } from "../models/IUser";
import { IPost } from "../models/IPost";
import { IPostResponse } from "../models/IPostResponse";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})
export const userService = {
    getAllUsers : async():Promise<IUser[]> => {
        return (await axiosInstance.get<IUserResponse>('/users')).data.users
    }
}
 export const postService = {
     getPostsByUserId : async (user:IUser) : Promise<IPost[]> => {
         return (await axiosInstance.get<IPostResponse>('/posts/user/' +user.id)).data.posts
     }
 }

