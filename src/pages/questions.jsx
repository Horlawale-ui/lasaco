import React from 'react';
import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../services/auth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Questions = () => {
	// const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");


    const jsonData =require ('./jsonvalidator.json');
    const allData = jsonData.allQuestions;

	return (
		<div>
		Logged in as
         <div>{name}</div>
         {/* <div>{user?.email}</div> */}
		 
		<div>
			{allData.map((quest, key) => {
				return(
					<div className='questionCard'>
						<span className='question'>{key +1}. {quest.question}</span>
						<span>
							{quest.option.map((opt,key) => {
								return(
									<div>
										<p>
											<input type='radio' name='question'/> 
											A. {opt.a}
										</p>
										<p> 
											<input type='radio' name='question'/>
											B. {opt.b}
										</p>
										<p> 
											<input type='radio' name='question'/>
											C. {opt.c}
										</p>
										<p> 
											<input type='radio' name='question'/>
											D. {opt.d}
										</p>
										<p> 
											<input type='radio' name='question'/>
											E. {opt.e}
										</p>
									</div>
								)}
							)}
					</span>

					<button onClick={logout} >Sign out</button>
					
					</div>
				)})}
		</div>
	</div>
);
};


export default Questions;
