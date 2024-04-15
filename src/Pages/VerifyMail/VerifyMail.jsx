import { verify } from "../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isVerifyMailSendMessage } from "../../redux/auth//auth-selectors";
import { toast } from "react-toastify";
import Title from "components/Form/Title";
import { Link } from "react-router-dom";
import Button from "components/Form/Button";

const VerifyMail = () => {
    const dispatch = useDispatch();
    const message = useSelector(isVerifyMailSendMessage);

    const urlParts = window.location.href.split('/');
    const lastUrlPart = urlParts[urlParts.length - 1];

    useEffect(() => {
        if (message !== 'message not send') {
            toast.success(message);
        }
        }, [message]);

   useEffect(() => {
       dispatch(verify(lastUrlPart));
    }, [dispatch, lastUrlPart]);

    return (<><Title title="Please login">
        <Link to='/login'>
            <Button type="button" text="Login"/>
        </Link>
    </Title></>)
}

export default VerifyMail;