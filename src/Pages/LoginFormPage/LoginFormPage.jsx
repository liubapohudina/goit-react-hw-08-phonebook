import Title from "components/Form/Title";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Loader } from "../../components/Form/Loader";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { isLogin, loading  } from "../../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

const LoginFormPage = () => {
    
    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data));
    }
    
    const isLoading = useSelector(loading)
    const loginIs = useSelector(isLogin)
   

    if (loginIs) {
        return <Navigate to='/contacts'/>
    }
    return (
        <main className="container">
        <Title title="Please Log in"/>
            <LoginForm onSubmit={handleLogin} />
        {isLoading && <Loader/>}    
        </main>    
    )
}

export default LoginFormPage;