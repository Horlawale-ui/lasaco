import React from 'react';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../services/auth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Questions = () => {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

    const jsonData =require ('./jsonvalidator.json');
    const allData = jsonData.allQuestions;
	// const data = allData[0].option.map((opt,key) => <p>{opt.a}</p>)
	// const data = allData.map((quest, key) => <div>{quest.option.map((opt) => <p>{opt}</p>)}</div>);
	return (
		<div>
		Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
		 
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
