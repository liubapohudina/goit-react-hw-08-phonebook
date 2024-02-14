import Title from "components/Form/Title";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterFormPage = () => {
    return (
        <main className="container">
            <Title title="Please Sign Up">
                <RegisterForm />
            </Title>    
        </main>
    )
}

export default RegisterFormPage;