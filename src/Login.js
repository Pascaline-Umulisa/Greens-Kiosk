import React,{useState} from "react";
import "./login.css"
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
import Home from "./Home";
import {FaFacebook, FaGoogle, FaInstagram} from 'react-icons/fa'

const Login=()=>{

    const[email,setEmail]=useState('');
    // console.log(email)
    const[password,setPassword]=useState('');
    const [errorPassword, setErrorPassword]=useState(false);
    const [errorEmail, setErrorEmail]=useState(false);
    const [submitttt, setSubmit]=useState(false)

    
    const handleSubmit=(e)=>{
        setErrorEmail(false)
        setErrorPassword(false)
        e.preventDefault()

        if(!/\S+@\S+\.\S+/.test(email)){
            setErrorEmail(true)
        }
        if(password.length<8){    
            setErrorPassword(true)
            return
        }
        else{
            setSubmit(true)
            const one="hhjjjhjh"
            return one
           }
    }

    return(
        <div className="about">
         
            <h6>Login to continue</h6>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">Your email</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input  className="input" type="email" placeholder="&nbsp;&nbsp;name@domain.com"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}/><br/>
                        {errorEmail && <i style={{fontSize:"11px", color:"red"}}>Email not valid</i>}
                    </div>
                    <div>
                        <label className="label">Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="input" type="password" placeholder="&nbsp;&nbsp;at least 8 characters"
                        onChange={(e)=>{setPassword(e.target.value)}} 
                        value={password}/> <br/>
                        {errorPassword && <i style={{fontSize:"11px", color:"red"}}>Password must be atleast eight characters</i>}
                    </div>
                    <div>
                    <input type={"checkbox"}/><label>Keep me logged in</label><span className="forget">Forgot password?</span>
                    </div>
                    <button className="button" onSubmit={(e)=>{setSubmit(e.target.value)}}>Login</button><br/>
                    
                
                    <div className="or"><hr/><span>Or</span><hr/></div>
                    <div className="icons">
                        <FaFacebook className="facebook"/>
                        <FaGoogle className="google"/>
                        <FaInstagram className="instagram"/>
                    </div>


                </form>
             
            </div>
         
         )
};
export default Login