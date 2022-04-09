import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../services/auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Quiz = () => {
	const [email, setEmail] = useState("");
  	const [password, setPassword] = useState("");
  	const [user, loading, error] = useAuthState(auth);
	 const navigate = useNavigate();
	 
	 useEffect(() => {
		if (loading) {
		  // maybe trigger a loading screen
		  return;
		}
		if (user) navigate('questions');
	  }, [user, loading]);
return (
	<div className="log">
		<form className='login' action=''>
			<h1> Log In</h1>

			<div className='user-label'>
				<label for='user'> USERNAME </label><br/>
				<input  type='text'  className='user' id='user'  value={email}  onChange={(e) => setEmail(e.target.value)}placeholder='Enter Your Username or Gmail' required />
			</div>
			<div className='password-label'>
				<label for='pass'> PASSWORD </label><br/>
				<input  type="password" className='pass' id='pass' value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter your Password'/>
			</div>
			<button className='form-submit-btn'onClick={() => signInWithEmailAndPassword(email, password)}> Login </button>
			{/* <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button> */}
		 {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div> */}
		</form>
	</div>
);
};


export default Quiz;
