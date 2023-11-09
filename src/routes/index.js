import { Route, Routes } from "react-router-dom";

import Admin from "../pages/admin/Admin";
import Article from "../pages/article/Article";
import Home from "../pages/home/Home";

import Auth from "../pages/auth/Auth";
import Articles from "./sub-routes/articles/Articles";
import Create from "./sub-routes/create/Create";
import Users from "./sub-routes/users/Users";
import Login from "./sub-routes/login/Login";
import SignUp from "./sub-routes/singup/SignUp";

const RouteController = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="auth" element={<Auth/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Route>
            <Route path="/admin" element={<Admin />}>
                <Route path="create" element={<Create/>}/>
                <Route path="articles" element={<Articles/>}/>
                <Route path="users" element={<Users/>}/>
            </Route>
        </Routes>
    )
}

export default RouteController