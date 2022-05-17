import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectCart } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import './Login.scss'
import axios from "axios";
export default function Login() {
    const navigate = useNavigate()
    const cart = useSelector(selectCart);
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
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
        if(email==='' || password==='') {
            setError('Username or Password Empty')
            setTimeout(() => {
                setError('')
            }, 2000)
            return
        }
        var data = JSON.stringify({
            "domain": "mystore",
            "username": email,
            "password": password,
            "commserver": "nodejs",
            "timeout": "120000",
            "cart": cart
        });

        var config = {
            method: 'post',
            url: 'https://mystore-log.herokuapp.com/mystore/login',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                e.preventDefault()
                var object = {
                    email: email,
                    password: password,
                    date: new Date(),
                    logininfo: response.data,
                    orders: [], 
                    cart: cart
                }
                localStorage.setItem('user', JSON.stringify(object))
                dispatch(login(object))
                navigate(-1)
            })
            .catch(function (error) {
                setError(error.response.data.error)
                setTimeout(() => {
                    setError('')
                }, 2000)
                console.log(error);
            });
    }

    return (
      <div className="Login">
        <h1 className='login-header'>Login</h1>
        <div className="main-form">
            <div className="form-group">
                <span></span>
                <input className="form-field" type="email" placeholder="Email" ref ={l} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
                <span></span>
                <input className="form-field" type="password" placeholder="Password" ref = {o} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="content-submit">
                    <button className="button-13" id='clear-button' onClick={() => clearFunction()} role="button">Clear</button>
                    <button className="button-13" id='submit-button' role="button" onClick={(e) => handleSubmit(e)}>Submit</button>
                    <br/>
                    <br/>
                    <a className="forgot-password">Forgot your password?</a>
                    <br/>
                    <br/>
                    <a className="forgot-password" onClick={() => navigate('/logon')}>Create Account</a>
            </div>
            <div className="content-error">
                <h4>{error}</h4>
            </div>
        </div>
      </div>
     
    );
}

