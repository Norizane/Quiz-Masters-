import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInForm from './assets/LogIn';
import SignUpForm from './assets/SignUp';
import HomePage from './assets/Home';
import Protected from './assets/Protected';
import Jeopardy from './assets/components/Quizes/Jeopardy/Jeopardy';
import Millionaires from './assets/components/Quizes/Millionaires/Millionaires';
import MillionairesCreate from './assets/components/Quizes/Millionaires/MillionairesCreate';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Create from './assets/Create';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/LogInForm" element={<LogInForm/>}></Route>
       <Route path="/SignUpForm" element={<SignUpForm/>}></Route>
       <Route path="/" element={<Protected/>}>
       <Route path="/HomePage" element={<HomePage/>}></Route>
       <Route path="/Create" element={<Create/>}></Route>
       <Route path="/Millionaires" element={<Millionaires/>}></Route>
       <Route path="/MillionairesCreate" element={<MillionairesCreate/>}></Route>
       <Route path="/Jeopardy" element={<Jeopardy/>}></Route>
          {/* <Route path="/settings" element={<settings/>}></Route>
       <Route path="/Millionaires" element={<Millionaires/>}></Route> */}
       </Route>
    </Routes>
 </BrowserRouter> 
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
