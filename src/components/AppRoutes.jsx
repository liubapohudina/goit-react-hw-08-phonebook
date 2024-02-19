import { Route, Routes, } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";


const PhonebookList = lazy(() => import('../Pages/PhonebookList/PhonebookList'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotfoundPage'));
const RegisterFormPage = lazy(() => import('../Pages/RegisterFormPage/RegisterFormPage'));
const LoginFormPage = lazy(() => import('../Pages/LoginFormPage/LoginFormPage'));


export function AppRoutes({ isAuthenticated }) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={isAuthenticated ? '/contacts' : '/login'} />} />
                <Route element={<SharedLayout />}>
                    <Route element={<PublicRoutes />}>
                        <Route path="register" element={<RegisterFormPage />} />
                        <Route path="login" element={<LoginFormPage />} />
                    </Route>
                    <Route element={<PrivateRoutes />}>
                        <Route path="contacts" element={<PhonebookList />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}