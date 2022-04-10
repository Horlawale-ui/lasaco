import React from 'react';
import { useEffect, useState, useContext } from "react";
import { logout } from "../services/auth/firebase";
import { AuthContext } from '../context/AuthProvider'


const Questions = () => {

    const jsonData =require ('./jsonvalidator.json');
    const allData = jsonData.allQuestions;

	const { currentUser } = useContext(AuthContext);

	return (
		<div>
		Logged in as
         <div>{currentUser.email}</div>
		 
		<div>
			{allData.map((quest, key) => {
				return(
					<div className='questionCard'>
						<span className='question'>{key +1}. {quest.question}</span>
						<span>
							{quest.option.map((opt,key) => {
								return(
									<div>
										<p >
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

					
					
					</div>
				)})}

		</div>
                <button type='submit' className='login form-submit-btn' onClick={logout} >Sign out</button>
	</div>
);
};


export default Questions;
