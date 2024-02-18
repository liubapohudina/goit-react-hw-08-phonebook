import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { isLogin, isToken } from '../../redux/auth/auth-selectors';
import { Loader } from "../../components/Form/Loader";

const PublicRoutes = () => {
  const tokenIs = useSelector(isToken);
  const isShowPhoneList = useSelector(isLogin);
  
  if(!isShowPhoneList && tokenIs) {
        return <Loader/>
    }

    if(isLogin) {
        return <Navigate to="/contacts" />
    }
    
    return <Outlet />
}

export default PublicRoutes;