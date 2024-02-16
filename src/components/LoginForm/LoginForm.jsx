import { useState, useId } from 'react';
import styles from './loginForm.module.css';
import Button from '../../components/Form/Button';

  const INITIAL_STATE = {
      email: '',
      password: '',
    }
   

const LoginForm = ({ onSubmit }) => {
  const [values, setValues] = useState(INITIAL_STATE);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...values });
    reset();
  };

  const reset = () => {
    setValues(INITIAL_STATE);
  };

  const emailId = useId();
  const passwordId = useId();

  return (
    <form className={styles.form} onSubmit={onClickSubmit}>
      <label htmlFor="email">Email </label>
      <input
        className={styles.input}
        onChange={onChangeInput}
        type="email"
        name="email"
        id={emailId}
        required
        placeholder="Please, enter your email"
      />

      <label htmlFor="password">Password</label>
      <input
        className={styles.input}
        onChange={onChangeInput}
        type="password"
        name="password"
        id={passwordId}
        required
        placeholder="Please, enter your password"
      />
      <Button type="submit" text="Log in" />
    </form>
  );
};


export default LoginForm;