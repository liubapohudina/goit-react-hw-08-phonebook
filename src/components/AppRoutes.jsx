import { Route, Routes, } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";


const PhonebookList = lazy(() => import('../Pages/PhonebookList/PhonebookList'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotfoundPage'));
const RegisterFormPage = lazy(() => import('../Pages/RegisterFormPage/RegisterFormPage'));
const LoginFormPage = lazy(() => import('../Pages/LoginFormPage/LoginFormPage'));
 


export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<LoginFormPage />} />
                    <Route element={<PublicRoutes/>}>
                        <Route path="login" element={<LoginFormPage/>}/>
                        <Route path="register" element={<RegisterFormPage />} />
                    </Route>    
                    <Route element={<PrivateRoutes/>}>
                        <Route path="contacts" element={<PhonebookList />} />
                    </Route>    
                </Route> 
                <Route path="*" element={<NotFoundPage/>}></Route>
            </Routes>
        </>
    );
}
