import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Signup = () => {
    const [error, setError] = useState(null);

    const {createUser} = useContext(AuthContext);

    const handlerSignUp =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(confirm !== password){
            setError('password is not matched');
            return;
        }
        if(password.length < 6){
            setError('please provide at least 6 digits.')
        }
        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.log(error))
        // console.log(email, password)
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign Up</h3>
            <form onSubmit={handlerSignUp}>
                <div className='form-sec'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder=' put your email' required />
                </div>
                <div className='form-sec'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder=' put your password' required />
                </div>
                <div className='form-sec'>
                    <label htmlFor='confirm'>confirm password</label>
                    <input type="password" name='confirm' placeholder=' put your confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>already have account? <Link to='/login'>Please Login</Link></p>
            <p>{error}</p>

        </div>
    );
};

export default Signup;