import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Login.css'

const Login = () => {

    const {logInUser} = useContext(AuthContext)

    const handlerSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        
        logInUser(email, password)
        .then((result) =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>console.error(error))
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handlerSubmit}>
                <div className='form-sec'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder=' put your email' required />
                </div>
                <div className='form-sec'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder=' put your password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New for Ema John <Link to='/signup'>Create an account</Link></p>

        </div>
    );
};

export default Login;