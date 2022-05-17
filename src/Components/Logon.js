import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectCart } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import './Login.scss'
import axios from "axios";
export default function Logon() {
    const navigate = useNavigate()
    const cart = useSelector(selectCart);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName,  setFirstName] = useState('')
    const [lastName,  setLastName] = useState('')
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
        var data = JSON.stringify({
            "domain": "mystore",
            "username": email,
            "password": password,
            "name": {
              "firstname": firstName,
              "lastname": lastName
            },
            orders: [],
            "commserver": "nodejs",
            "timeout": "120000",
            "cart": cart
          });

        var config = {
            method: 'post',
            url: 'https://mystore-log.herokuapp.com/mystore/logon',
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
                    user: "chemo",
                    date: new Date(),
                    logininfo: data.data
                }
                localStorage.setItem('user', JSON.stringify(object))
                dispatch(login(object))
                navigate(-1)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
      <div className="Login">
        <h1 className='login-header'>Logon</h1>
        <div className="main-form">
            <div className="form-group2">
                <span>{''}</span>
                <input className="form-field" type="text" placeholder="First Name"  ref ={m} onChange={(e) => setFirstName(e.target.value)}/>
                <input className="form-field" type="email" placeholder="Last Name" ref ={n} onChange={(e) => setLastName(e.target.value)} />
            </div> 
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
            </div>
        </div>
      </div>
     
    );
}

