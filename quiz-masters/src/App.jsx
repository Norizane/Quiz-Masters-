import LogInForm from "./logIn";
import SignUpForm from "./SignUp"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return (
    
   <BrowserRouter>
    <>
     <Routes>
        <Route path="/" element={<LogInForm/>}></Route>
        <Route path="/home" element={<SignUpForm/>}></Route>
     </Routes>
    </>
  </BrowserRouter> 

  )
}

export default App;
