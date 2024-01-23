import LogInForm from "./assets/LogIn";
import SignUpForm from "./assets/SignUp"
import HomePage from "./assets/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Protected from "./assets/Protected";

function App() {


  return (
    
   <BrowserRouter>
     <Routes>
        <Route path="/LogInForm" element={<LogInForm/>}></Route>
        <Route path="/SignUpForm" element={<SignUpForm/>}></Route>
        <Route path="/" element={<Protected/>}>>
        <Route path="/HomePage" element={<HomePage/>}></Route>
           {/* <Route path="/settings" element={<settings/>}></Route>
        <Route path="/MillionairesCr" element={<MillionairesCr/>}></Route>
        <Route path="/Millionaires" element={<Millionaires/>}></Route> */}
        </Route>
     </Routes>
  </BrowserRouter> 

  )
}

export default App;
