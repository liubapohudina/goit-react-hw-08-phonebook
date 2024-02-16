
import { AppRoutes } from "./AppRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const App = () => {  
  return <div className="App">
    <ToastContainer/>
    <AppRoutes/>
    </div>
  }
  

