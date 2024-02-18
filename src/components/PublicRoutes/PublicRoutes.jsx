import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { isLogin, isToken } from '../../redux/auth/auth-selectors';


const PublicRoutes = () => {
    const tokenIs = useSelector(isToken);
    const isShowPhoneList = useSelector(isLogin);
  
  if(Boolean(tokenIs) === false) {
       return <Outlet />;
  }

  if(isShowPhoneList) {
    return <Navigate to="/contacts" />; 
  }
    
}

export default PublicRoutes;

