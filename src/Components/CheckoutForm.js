import {useState, useRef} from 'react'
import './CheckoutForm.scss';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCart, selectUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import LoginPopup from './LoginPopup';
function CheckoutForm() {

  const [email,  setEmail] = useState('')
  const [firstName,  setFirstName] = useState('')
  const [lastName,  setLastName] = useState('')
  const [companyName,  setCompanyname] = useState('')
  const [cityName,  setCityName] = useState('')
  const [address,  setAddress] = useState('')
  const [houseNo,  setHouseNumber] = useState('')
  const [phone,  setPhone] = useState('')
  const [error, setError] = useState('')
  const [view, setView] = useState(false)

  const [extraInformation,  setExtraInformation] = useState('')
  const l = useRef(null)
  const m = useRef(null)
  const n = useRef(null)
  const o = useRef(null)
  const user = useSelector(selectUser)
  const cart = useSelector(selectCart)
  const navigate = useNavigate()
    
 function clearFunction() {
     l.current.value = ''
     m.current.value = ''
     n.current.value = ''
     o.current.value = ''
 }

 function submit(e) {
     e.preventDefault()
    if(user) {
        if(new Date(user.date)-new Date()<-100000) {
          localStorage.setItem('user', null)
          setView(true)
        }
    } else {
        setView(true)
    }
    
     if(user && phone!='' && houseNo!='' && companyName!=''&& address!='' && cityName!='') {
         setFirstName(user.logininfo.name.firstname)
         setLastName(user.logininfo.name.lastname)
         var payload = {...user}
         payload.orders = []
         payload.cart = []
         console.log('asdasdasdasd', payload.email)
        var data = JSON.stringify({
            "email": payload.email,
            "message": extraInformation,
            "time": new Date().toString(),
            "userinfo": {
                email: payload.email
            },
            "shipping-info" : {
                email: payload.email,
                firstName: firstName,
                lastName: lastName,
                companyName: companyName,
                cityName: cityName,
                address: address,
                houseNo: houseNo,
                phone: phone
            },
            "cart": cart
            });
        
            var config = {
                method: 'post',
                url: 'https://my-store-apis.herokuapp.com/mystore/create-checkout-session',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : data
            };
        
            axios(config)
                .then(function (response) {
                    window.location.href = response.data.url
                })
                .catch(function (error) {
                    console.log(error);
                });
     } else {
        setError('Fields are Empty')
        setTimeout(() => {
            setError('')
        }, 2000)
     }
 }

  return (
    <form  className="main-form2" style={{marginTop: '0px'}} id='form-main2' onSubmit={(e) => {submit(e)}}>
      {view?<LoginPopup view={setView} />:null}

        <br/>
        <div className="form-group2">
        <div className="product-grid">
            <h1 className="cart-product-header">Checkouts</h1>
        </div>
        </div>
        <div className="form-group2">
            <span style={{width: '100px'}}>{'Name'}</span>

            <input className="form-field" type="text" placeholder="First Name"  ref ={m} defaultValue={user?user.logininfo.name.firstname:''} onChange={(e) => setFirstName(e.target.value)} required/>
            <input className="form-field" type="text" placeholder="Last Name" ref ={n} defaultValue={user?user.logininfo.name.lastname:''} onChange={(e) => setLastName(e.target.value)} required/>
        </div> 
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Comp. Name'}</span>

            <input className="form-field" type="text" placeholder="Company Name (optional)" ref ={n} onChange={(e) => setCompanyname(e.target.value)} required/>
        </div> 
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Address'}</span>

            <input className="form-field" type="text" placeholder="Address" ref ={n} onChange={(e) => setAddress(e.target.value)} required/>
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'House No.'}</span>

            <input className="form-field" type="text" placeholder="Apartment, suite, etc. (optional)" ref ={n} onChange={(e) => setHouseNumber(e.target.value)} required/>
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'City'}</span>

            <input className="form-field" type="text" placeholder="City" ref ={n} onChange={(e) => setCityName(e.target.value)} required/>
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Phone No.'}</span>

            <input className="form-field" type="text" placeholder="Phone" ref ={n} onChange={(e) => setPhone(e.target.value)} required/>
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Comments'}</span>
            <input className="form-field" type="text" placeholder="Write your comments here" ref ={o} onChange={(e) => setExtraInformation(e.target.value)} required/>
        </div>
        <div className="content-submit">
                <button className="button-13" style={{marginLeft: '0px', width:'200px'}} type='submit' id='submit-button' >Continue to Shipping</button>
        </div>
        <br/>
        <div className="content-submit" >
                <button className="button-13" style={{marginLeft: '0px', width: '100px', backgroundColor: 'black'}} id='submit-button' role="button" onClick={() => {}}>Google pay</button>
        </div>
        <div className="content-error">
                <h4>{error}</h4>
            </div>
        <br/>

        <p id='random-sentence' style={{color:'black'}}>This lightweight, soft Cactus will fast become your favorite. It's made with our  100% Certified Organic Cotton fabric giving you a fit that's stylish year-round.   </p>
        <br/>
    </form>
  );
}

export default CheckoutForm;


