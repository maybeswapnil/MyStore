import { BrowserRouter as Router, Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Cart from "./Components/Cart";
import Collection from "./Components/Collection";
import { useEffect, useState } from "react";
import Checkout from "./Components/Checkout";
import './App.css'
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import Logon from "./Components/Logon";

export default function App() {

  const user = useSelector(selectUser)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    var url = window.location.href
    if(url.includes('?')) {
      var string = url.split('?')[1];
      if(string==='paymentfailed') {
          //navigate('/checkout')
      }
    }
    if(user) {
      if(new Date(user.date)-new Date()<-200000) {
        localStorage.setItem('user', null)
      }
    }
    setTimeout(() => {
      setLoading(false)
    }, 500)
    setInterval(() => {
      if(user) {
        if(new Date(user.date)-new Date()<-200000) {
          localStorage.setItem('user', null)
        }
        setLoading(true)
      }
    }, 1000)
  }, [user])

  return (
    <div className="App">
      {/* {loading?<Loading />:null} */}
      <Router>
        <Navbar />
        <Link to="/account/user" />
        <Link to="/" />
        <Link to="/cart" />
        <Link to="/collection" />
        <Link to="/checkout" />
        <Link to="/logon" />
        <Routes>
          <Route path="/account/user" element={!user?<Login />:<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/logon" element={<Logon />} />
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}