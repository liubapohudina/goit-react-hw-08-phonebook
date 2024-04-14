import styles from './registerForm.module.css';
import { useState, useId } from 'react';
import Button from '../../components/Form/Button';

  const INITIAL_STATE = {
      name: '',
      email: '',
      password: '',
    }
   

const RegisterForm = ({ onSubmit }) => {
 const [values, setValues] = useState(INITIAL_STATE);


  const onChangeInput = (event) => {
  const { name, value } = event.target; 
  setValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
    }
    
    const onClickSubmit = (e) => {
      e.preventDefault();
      onSubmit(values);
        //reset();
    };


    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();


    return (
        <form className={styles.form} onSubmit={onClickSubmit}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} onChange={onChangeInput} type="text" name="name" id={nameId}  required placeholder="Please, enter your name" />
            
            <label htmlFor="email">Email </label>
            <input className={styles.input} onChange={onChangeInput} type="email" name="email" id={emailId} required placeholder="Please, enter your email"/>
           
            <label htmlFor="password">Password</label>
            <input className={styles.input} onChange={onChangeInput} type="password" name="password" id={passwordId} required placeholder="Please, enter your password"/>
            <Button type="submit" text="Sign in"  />
        </form>
    )    
}

export default RegisterForm;