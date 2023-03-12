import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/auth/authSlice';
import { loginUser } from 'redux/auth/authOperations';
import styles from '../ContactForm/ContactForm.module.css'
import { Loader } from '../Loader/Loader';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'userEmail':
                setEmail(value)
                break;
            case 'userPassword':
                setPassword(value)
                break;
            default:
                setEmail('')
                setPassword('')
        }
    }

    const dispatch = useDispatch();
    const { isLoading } = useSelector(getAuth);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser({ email: email, password: password }));
    }

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);
    
    return (<form onSubmit={handleSubmit} className={styles.insertWrapper}>
        <label className={styles.label} htmlFor={emailId}>Email</label>
        <input
            id={emailId}
            type="email"
            name="userEmail"
            value={email}
            onChange={handleChange}
            required
            placeholder='your_email'
            className={styles.input} />
        <label className={styles.label} htmlFor={passwordId}>Password</label>
        <input
            id={passwordId}
            type="password"
            name="userPassword"
            value={password}
            onChange={handleChange}
            required
            placeholder='your_password'
            className={styles.input} />
        {!isLoading ? <button type='submit' className={styles.button}>Log In</button> : <Loader />
        }
    </form>)
}

export default LoginForm