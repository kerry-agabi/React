import React from "react"
import Signup from "./Signup"
import{ Container } from "react-bootstrap"
import { AuthProvider } from "./AuthContext";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Homepage from "./Homepage";


function App() {
  
  return (


    
<Container className ="d-flex align-items-center justify-content-center"
style={{minHeight: "100vh"}}>
  <div className="w-100" style={{ maxWidth: "400px"}}>

      <Router>
        <AuthProvider>

      <Routes>
       {/* <PrivateRoute exact path = "/" element ={<Dashboard/>} /> */}
      <Route path = "/" element={<PrivateRoute> <Dashboard/> </PrivateRoute>}/>
      <Route path = "/update-profile" element={<PrivateRoute> <UpdateProfile/> </PrivateRoute>}/>
      <Route path = "/homepage" element = {<Homepage/>}/>

        

      
      <Route path="/signup" element= {<Signup/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/forgot-password" element= {<ForgotPassword/>}/>

      </Routes>

        </AuthProvider>

      </Router>

 


 </div>
  </Container>
)}

export default App;
