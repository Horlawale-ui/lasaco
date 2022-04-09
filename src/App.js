import React from 'react';
import './App.css';
import Navbar from './component/navbar/nav';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Questions from './pages/questions';
import SignIn from './pages/signIn';

function App() {
return (
	<Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route exact path="/questions" element={<Questions />} />
        </Routes>
      </div>
    </div>
	</Router>
);
}

export default App;
