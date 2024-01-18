import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { USER_CREDENTIAL } from '../../constants/user';
import { STORAGE_KEY } from '../../constants/storage';

import { login } from '../../services/api/jsonplaceholder/login';
import { addToLocalStorage } from '../../services/api/localStorage';

import styles from './Login.module.css';
import Loader from '../Loader/Loader';

const Login = () => {
  const [userName, setUserName] = useState(USER_CREDENTIAL.userName);
  const [password, setPassword] = useState(USER_CREDENTIAL.password);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const userName = form.elements.user_name?.value;
    const password = form.elements.password?.value;

    if (userName && password) {
      try {
        setIsLoading(true);
        const user = await login(USER_CREDENTIAL.id);
        if (user) {
          addToLocalStorage(STORAGE_KEY.user, user.data.id);
          navigate('/');
        }
        toast.success('Login is successful!');
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.info('Please enter all fields');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.formWrapper}>
          <div>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={onFormSubmit}>
              <label className={styles.label}>
                *Username
                <input
                  className={styles.input}
                  type='text'
                  name='user_name'
                  defaultValue={userName}
                />
              </label>

              <label className={styles.label}>
                *Password
                <input
                  className={styles.input}
                  type='password'
                  name='password'
                  defaultValue={password}
                />
              </label>
              <button className={styles.button}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
