import React, { useEffect, useState, useCallback, useContext } from "react";

import { Redirect } from "react-router";
import { logInWithEmailAndPassword } from "../services/auth/firebase"; // remove siginInWithGoogle
import { AuthContext } from '../context/AuthProvider'

const SignIn = ({ history }) => {
	const [email, setEmail] = useState("realuser@gmail.com");
  	const [password, setPassword] = useState("sexyuser1");
	const [errMsg, setErrMsg] = useState('');    // Trying to collect error message here so that I can render it when they log in. 
	const [loading, setLoading] = useState(false);



	const handleSubmit = useCallback(
		async event => {
		  event.preventDefault();
		  setLoading(true)
		  try {
			logInWithEmailAndPassword(email, password);
			history.push('/questions')
			setLoading(false)

		  } catch (error) {
			  alert(error)
		  }
		},
		[history]
	);


	const { currentUser } = useContext(AuthContext);  // If the user is currently logged in. There won't be any need to enter username and password			

	if (currentUser) {
	  return <Redirect to="/questions" />;
	}



return (
	
	<div className="log">
		{errMsg ? errMsg : null}
		<form className='login' onSubmit={handleSubmit}>
			<h1> Log In</h1>

			<div className='user-label'>
				<label> USERNAME </label><br/>
				<input  type='text'  className='user' id='user'  value={email}  onChange={(e) => setEmail(e.target.value)}placeholder='Enter Your Username or Gmail' required />
			</div>
			<div className='password-label'>
				<label> PASSWORD </label><br/>
				<input  type="password" className='pass' id='pass' value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter your Password'/>
			</div>
			<button type='submit' className='form-submit-btn'> {loading? "loading..." : "Sign in"} </button>
		</form>
	</div>
);
};


export default SignIn;
