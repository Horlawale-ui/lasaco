import React from 'react';
import './App.css';
import Navbar from './component/navbar/nav';
import { BrowserRouter as Router,  Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/home';
import Questions from './pages/questions';
import SignIn from './pages/signIn';
import PrivateRoute from './services/routes/PrivateRoute';


function App() {
return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
              <Route exact path='/' component={ Home } />
              <Route exact path='/signin' component={ SignIn } />
              <PrivateRoute exact path="/questions" component={ Questions } />
        </div>
      </Router>
    </div>
);
}

export default App;
