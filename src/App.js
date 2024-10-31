import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Cart from "./Components/Cart";
import Collection from "./Components/Collection";
import { useEffect, useState } from "react";
import Checkout from "./Components/Checkout";
import './App.css'
import './Components/Login.scss'
import Footer from "./Components/Footer";
import { logout } from "./features/userSlice";
import LogRocket from 'logrocket';
import ProductPage from "./Components/ProductPage";
import LoginLoad from "./Components/LoginLoad";
import { Buffer } from 'buffer';
import ShippingPolicy from "./Components/ShippingPolicy";
import Invoice from "./Components/Invoice";
import TermsOfService from "./Components/TermsOfService";
import ReturnPolicy from "./Components/ReturnPolicy";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import NotFoundPage from "./Components/NotFoundPage";
window.Buffer = Buffer;

export default function App() {

  const user = useSelector(selectUser)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    LogRocket.init('zaeyzk/mystore');
    if (user) {
      LogRocket.identify(user.email, {
        name: user.logininfo.name.firstname,
        email: user.email,
        subscriptionType: 'pro'
      });
    }
  }, [])

  useEffect(() => {
    if (user) {
      if (new Date(user.date) - new Date() < -200000) {
        localStorage.setItem('user', null)
        var url = window.location.href
        window.location.href = url
        dispatch(logout())
      }
    }
  }, [user])

  return (
    <div className="App">
      {loading ? <LoginLoad /> : null}
      <Router>
        <Navbar loader={setLoading} />
        <Link to="/" />
        <Link to="/collection" />
        <Link to="/checkout" />
        <Link to="/product" />
        <Link to="/shipping-policy" />
        <Link to="/invoice" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/returns-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}