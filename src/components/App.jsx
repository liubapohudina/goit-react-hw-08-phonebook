
import { AppRoutes } from "./AppRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from "react-redux";
import { current } from "../redux/auth/auth-operations";
import { useEffect } from "react";
import { isToken } from "../redux/auth/auth-selectors";
import { Loader } from "./Form/Loader";



export const App = () => {  
  const dispatch = useDispatch();
  const userToken = useSelector(isToken);

  useEffect(() => {
    dispatch(current())
  }, [dispatch]);

  return <div className="App">
    <ToastContainer/>
    {userToken !== null ? <AppRoutes isAuthenticated={userToken} /> : <Loader />}
    </div>
  }
  

