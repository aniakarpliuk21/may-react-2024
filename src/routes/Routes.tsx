import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorElement from "../layouts/ErrorElement";
import HomePage from "../page/home/HomePage";
import UsersPage from "../page/UsersPage";
import PostsPage from "../page/PostsPage";
import CommentsPage from "../page/CommentsPage";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>,
    children:[
        {index:true, element:<HomePage/>},
        {path:'users', element:<UsersPage/>},
        {path:'posts', element:<PostsPage/>},
        {path:'comments', element:<CommentsPage/>}
    ],
    errorElement:<ErrorElement/>}
]);