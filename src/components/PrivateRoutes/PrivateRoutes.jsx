import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { isLogin, isToken } from '../../redux/auth/auth-selectors';
import { Loader } from "../../components/Form/Loader";

const PrivateRoutes = () => {
  const tokenIs = useSelector(isToken);
  const isShowPhoneList = useSelector(isLogin);

  if (!isShowPhoneList && tokenIs) {
    return <Loader/>
  }

  if (!isShowPhoneList && !tokenIs) {
    return <Navigate to='/login' />;
  }
    
  return <Outlet />;
}

export default PrivateRoutes;


