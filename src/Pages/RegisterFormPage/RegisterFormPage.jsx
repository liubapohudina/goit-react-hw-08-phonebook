import Title from "components/Form/Title";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Loader } from "../../components/Form/Loader";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/auth-operations";
import { loading, isVerifyMailSendMessage } from "../../redux/auth/auth-selectors";

const RegisterFormPage = () => {

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(signup(data));
    }
    
    const isLoading = useSelector(loading);
    const verifyMailSend = useSelector(isVerifyMailSendMessage);

    return (
        <main className="container">
                {isLoading && <Loader />}
                {verifyMailSend === 'Verification successful' ? <Title title="Check your e-mail"></Title> : <> <Title title="Please Sign Up">
                <RegisterForm onSubmit={onSubmit} /> </Title></>}
        </main>
    )
}

export default RegisterFormPage;