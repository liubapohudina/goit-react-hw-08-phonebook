import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import  SharedLayout  from "./SharedLayout/SharedLayout";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";

const PhonebookList = lazy(() => import('../Pages/PhonebookList/PhonebookList'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotfoundPage'));



export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="/login" element={<LoginForm/>}></Route>
                    <Route path="/register" element={<RegisterForm/>}></Route>
                    <Route path="/contacts" element={<PhonebookList/>}></Route>
                    <Route path="*" element={<NotFoundPage/>}></Route>
                </Route>    
            </Routes>
            
        </>
    )
}