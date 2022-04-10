import React, { useEffect, useState, useCallback } from "react";

import { withRouter, Redirect } from "react-router";
import { logInWithEmailAndPassword } from "../services/auth/firebase"; // remove siginInWithGoogle

const SignIn = ({ history }) => {
	const [email, setEmail] = useState("testuser@gmail.com");
  	const [password, setPassword] = useState("nomorepain1");


	  const handleSubmit = useCallback(
		async event => {
		  event.preventDefault();
		  try {
			await logInWithEmailAndPassword(email, password);
			history.push("/questions");
		  } catch (error) {
			alert(error);
		  }
		},
		[history]
	  );

return (
	<div className="log">
		<form className='login' onSubmit={handleSubmit}>
			<h1> Log In</h1>

			<div className='user-label'>
				<label for='user'> USERNAME </label><br/>
				<input  type='text'  className='user' id='user'  value={email}  onChange={(e) => setEmail(e.target.value)}placeholder='Enter Your Username or Gmail' required />
			</div>
			<div className='password-label'>
				<label for='pass'> PASSWORD </label><br/>
				<input  type="password" className='pass' id='pass' value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter your Password'/>
			</div>
			<button type='submit' className='form-submit-btn'> Sign in </button>
		</form>
	</div>
);
};


export default SignIn  ;
