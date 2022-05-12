import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='email' onChange={(e) => {setEmail(e.target.value)}}/>
            <br/>
            <br/>
            <input type='password' onChange={(e) => {setPassword(e.target.value)}}/>
            <br/>
            <br/>
            <input type='submit'/>
        </form>
       
      </div>
    );
}
  