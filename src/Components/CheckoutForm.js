import {useState, useRef} from 'react'
import './CheckoutForm.scss';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function CheckoutForm() {

  const [email,  setEmail] = useState('')
  const [firstName,  setFirstName] = useState('')
  const [lastName,  setLastName] = useState('')
  const [extraInformation,  setExtraInformation] = useState('')
  const l = useRef(null)
  const m = useRef(null)
  const n = useRef(null)
  const o = useRef(null)
  const user = useSelector(selectUser)

 function clearFunction() {
     l.current.value = ''
     m.current.value = ''
     n.current.value = ''
     o.current.value = ''
 }

 function submit() {
    var data = JSON.stringify({
    "email": email,
    "message": extraInformation,
    "time": new Date().toString(),
    "userinfo": {
        "name": firstName + ' ' + lastName
    }
    });

    var config = {
        method: 'post',
        url: 'https://new-api-name.herokuapp.com/portefeuille',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
 }

  return (
    <div  className="main-form2" style={{marginTop: '0px'}} id='form-main2'>
        <br/>
        <div className="form-group2">
        <div className="product-grid">
            <h1 className="cart-product-header">Checkouts</h1>
        </div>
        </div>
        <div className="form-group2">
            <span style={{width: '100px'}}>{'Name'}</span>

            <input className="form-field" type="text" placeholder="First Name"  ref ={m} defaultValue={user?user.logininfo.name.firstname:''} onChange={(e) => setFirstName(e.target.value)}/>
            <input className="form-field" type="email" placeholder="Last Name" ref ={n} defaultValue={user?user.logininfo.name.lastname:''} onChange={(e) => setLastName(e.target.value)} />
        </div> 
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Comp. Name'}</span>

            <input className="form-field" type="text" placeholder="Company Name (optional)" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div> 
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Address'}</span>

            <input className="form-field" type="text" placeholder="Address" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'House No.'}</span>

            <input className="form-field" type="text" placeholder="Apartment, suite, etc. (optional)" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'City'}</span>

            <input className="form-field" type="text" placeholder="City" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Phone No.'}</span>

            <input className="form-field" type="text" placeholder="Phone" ref ={n} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group2">
        <span style={{width: '100px'}}>{'Comments'}</span>
            <input className="form-field" type="text" placeholder="Write your comments here" ref ={o} onChange={(e) => setExtraInformation(e.target.value)} />
        </div>
        <div className="content-submit">
                <button className="button-13" style={{marginLeft: '0px', width:'200px'}} id='submit-button' role="button" onClick={() => {}}>Continue to Shipping</button>
        </div>
        <br/>
        <div className="content-submit" >
                <button className="button-13" style={{marginLeft: '0px', width: '100px', backgroundColor: 'black'}} id='submit-button' role="button" onClick={() => {}}>Google pay</button>
        </div>
        <br/>
        <p id='random-sentence' style={{color:'black'}}>This lightweight, soft Cactus will fast become your favorite. It's made with our  100% Certified Organic Cotton fabric giving you a fit that's stylish year-round.   </p>
        <br/>
    </div>
  );
}

export default CheckoutForm;


