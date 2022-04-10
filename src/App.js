import React from 'react';
import './App.css';
import Navbar from './component/navbar/nav';
import { BrowserRouter as Router,  Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/home';
import Questions from './pages/questions';
import SignIn from './pages/signIn';
import PrivateRoute from './services/routes/PrivateRoute';
// import Login from './pages/login'


function App() {
return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
            <Route path='/' component={ Home } />
            {/* <Route path='/signin' component={<SignIn />} />
            <PrivateRoute exact path="/questions" component={<Questions />} /> */}
        </Router>
      </div>
    </div>
);
}

export default App;
