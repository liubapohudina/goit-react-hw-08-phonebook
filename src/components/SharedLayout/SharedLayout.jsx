import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../components/Form/Loader';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>    
            <Footer/>
        </>
    )
}

export default SharedLayout;