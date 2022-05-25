import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectCart } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import './Login.scss'
import axios from "axios";
import Loading from "./Loading";
import PaymentLoading from "./PaymentLoading";
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
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)


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
        if(email==='' || password==='' || firstName==='' || lastName==='') {
            setError('Fields Are Empty')
            setTimeout(() => {
                setError('')
            }, 2000)
            return
        }
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
            "cart": cart, 
            "address": []
          });

        var config = {
            method: 'post',
            url: 'https://my-store-apis.herokuapp.com/mystore/logon',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        setLoading(true)
        axios(config)
            .then(function (response) {
                e.preventDefault()
                var object = {
                    email: email,
                    password: password,
                    user: "chemo",
                    date: new Date(),
                    logininfo: response.data,
                    address: []
                }
                // localStorage.setItem('user', JSON.stringify(object))
                // dispatch(login(object))
                navigate(-1)
                setLoading(false)
            })
            .catch(function (error) {
                setError(error.response.data.error)
                setTimeout(() => {
                    setError('')
                }, 2000)
                setLoading(false)
            });
    }
    useEffect(() => setLoading(false), [])

    return (
      <div className="Login">
        {loading?<PaymentLoading />:null}
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
            <div className="content-error">
                <h4>{error}</h4>
            </div>
        </div>
        
      </div>
     
    );
}

