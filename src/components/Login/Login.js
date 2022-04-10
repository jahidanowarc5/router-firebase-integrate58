import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import React from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state.from.pathname ||"/" 
    const [signInWithGoogle,user] = useSignInWithGoogle(auth)
    const handleSignIn = () =>{
        signInWithGoogle()
        .then( () =>{
            navigate(from,{replace:true})
        })
    }
    
    return (
        <div>
            <h2>this is login</h2>
            <div style={{margin:'20px'}}>
                <button onClick={handleSignIn}>Google sign in</button>
            </div>
            <form>
            <input type="email" placeholder='your email'/>
            <br />  
            <input type="password" name="" id="" placeholder='password'/>
            <br />
            <input type="submit" value="login" />
           </form>
        </div>
    );
};

export default Login;