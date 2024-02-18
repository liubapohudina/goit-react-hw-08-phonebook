
import { AppRoutes } from "./AppRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from "react-redux";
import { current } from "../redux/auth/auth-operations";
import { useEffect } from "react";



export const App = () => {  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  }, [dispatch]);

  return <div className="App">
    <ToastContainer/>
    <AppRoutes/>
    </div>
  }
  

