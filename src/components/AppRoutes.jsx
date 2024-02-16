import { Route, Routes, } from "react-router-dom";
import { lazy } from "react";
import  SharedLayout  from "./SharedLayout/SharedLayout";


const PhonebookList = lazy(() => import('../Pages/PhonebookList/PhonebookList'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotfoundPage'));
const RegisterFormPage = lazy(() => import('../Pages/RegisterFormPage/RegisterFormPage'));
const LoginFormPage = lazy(() => import('../Pages/LoginFormPage/LoginFormPage'));
 


export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<LoginFormPage/>} />
                    <Route path="login" element={<LoginFormPage/>}/>
                    <Route path="register" element={<RegisterFormPage/>}/>
                    <Route path="contacts" element={<PhonebookList />} />
                </Route> 
                <Route path="*" element={<NotFoundPage/>}></Route>
            </Routes>
        </>
    );
}
