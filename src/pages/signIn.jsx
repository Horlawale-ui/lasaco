import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../services/auth/firebase"; // remove siginInWithGoogle
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
	const [email, setEmail] = useState("testuser@gmail.com");
  	const [password, setPassword] = useState("nomorepain1");
  	const [user, loading ] = useAuthState(auth);  // remove error
	 const navigate = useNavigate();
	 
	 useEffect(() => {
		if (loading) {
		  // maybe trigger a loading screen
		  return;
		}
		if (user) navigate('/questions');
	  }, [user, loading, navigate]);



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
		</form>
	</div>
);
};


export default SignIn  ;
