import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/nav';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/home';
import Questions from './Component/Pages/questions';
import Quiz from './Component/Pages/quiz';

function App() {
return (
	<Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route exact path="/questions" element={<Questions />} />
        </Routes>
      </div>
    </div>
	</Router>
);
}

export default App;
