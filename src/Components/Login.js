import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import './Login.scss'
export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const l = useRef(null)
    const m = useRef(null)
    const n = useRef(null)
    const o = useRef(null)

    useEffect(() => {
      }, []);

    function clearFunction() {
        l.current.value = ''
        m.current.value = ''
        n.current.value = ''
        o.current.value = ''
    }
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        var object = {
            email: email,
            password: password,
            user: "chemo",
            date: new Date()
        }
        localStorage.setItem('user', JSON.stringify(object))
        dispatch(login(object))
        navigate(-1)
    }

    return (
      <div className="Login">
        <h1 className='login-header'>Login</h1>
        <div className="main-form">
            <div className="form-group">
                <span></span>
                <input className="form-field" type="email" placeholder="Email" ref ={l} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <span></span>
                <input className="form-field" type="password" placeholder="Password" ref = {o} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="content-submit">
                    <button className="button-13" id='clear-button' onClick={() => clearFunction()} role="button">Clear</button>
                    <button className="button-13" id='submit-button' role="button" onClick={(e) => handleSubmit(e)}>Submit</button>
                    <br/>
                    <br/>
                    <a className="forgot-password">Forgot your password?</a>
                    <br/>
                    <br/>
                    <a className="forgot-password">Create Account</a>
            </div>
        </div>
      </div>
     
    );
}

