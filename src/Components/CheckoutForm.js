import { useState, useRef } from 'react';
import './CheckoutForm.scss';
import axios from 'axios';
import { emptyCart, selectCart, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InformationPopup from './InformationPopup';

function CheckoutForm() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [cityName, setCityName] = useState('')
    const [address, setAddress] = useState('')
    const [houseNo, setHouseNumber] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [orderInfo, setInfo] = useState('')
    const [viewOrderConfirmation, setOrderConfirmation] = useState(false)
    const dispatch = useDispatch()


    const [extraInformation, setExtraInformation] = useState('')
    const l = useRef(null)
    const m = useRef(null)
    const n = useRef(null)
    const o = useRef(null)
    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)

    const setOrderInfo = (data) => {
        setInfo(data)
        setOrderConfirmation(true)
    }

    function clearFunction() {
        l.current.value = ''
        m.current.value = ''
        n.current.value = ''
        o.current.value = ''
    }

    function submit(e) {
        e.preventDefault();

        if (email !== '' && phone !== '' && address !== '' && cityName !== '') {
            const payload = { ...user, orders: [], cart: [] };
            const data = JSON.stringify({
                email: payload.email,
                message: extraInformation,
                time: new Date().toString(),
                userinfo: { email: payload.email },
                amount: 7000,
                shippingInfo: {
                    email: payload.email,
                    firstName: firstName,
                    lastName: lastName,
                    cityName: cityName,
                    address: address,
                    houseNo: houseNo,
                    phone: phone,
                    email: email,
                },
                cart: cart,
            });

            const config = {
                method: 'post',
                url: 'https://mystore-apiset.onrender.com/mystore/create-order', // Updated backend endpoint
                headers: { 'Content-Type': 'application/json' },
                data: data,
            };

            axios(config)
                .then(function (response) {
                    const { amount, order_id, currency } = response.data;

                    const options = {
                        key: 'rzp_test_uJuMyCULeuuS24', // Replace with your Razorpay Key ID
                        amount: amount*100,
                        currency: currency,
                        name: 'Swapnil Sharma Print Company',
                        description: 'Order Payment',
                        order_id: order_id,
                        handler: function (response) {
                            const paycheck = {
                                method: 'post',
                                url: 'https://mystore-apiset.onrender.com/mystore/verify-payment',
                                headers: { 'Content-Type': 'application/json' },
                                data: response,
                            }
                            axios(paycheck).then(function (response) {
                                setOrderInfo("Order placed", response.data.order_id)
                                dispatch(emptyCart())
                                localStorage.removeItem('cart')
                                setTimeout(() => {
                                    setOrderConfirmation(false)
                                    window.location.href = "/"
                                }, 2000)
                            }).catch(function (error) {
                                console.log(error);
                                setError('Payment varification failed');
                                setOrderInfo("Payment varification failed")
                                setTimeout(() => {
                                    setOrderConfirmation(false)
                                }, 2000)
                                setTimeout(() => {
                                    setError('');
                                }, 2000);
                            });
                        },
                        prefill: {
                            name: `${firstName} ${lastName}`,
                            email: email,
                            contact: phone,
                        },
                        theme: {
                            color: '#bae08d',
                        },
                    };

                    const rzp = new window.Razorpay(options);
                    rzp.open();
                })
                .catch(function (error) {
                    console.log(error);
                    setError('Payment initiation failed');
                    setTimeout(() => {
                        setError('');
                    }, 2000);
                });
        } else {
            setError('Fields are Empty');
            setTimeout(() => {
                setError('');
            }, 2000);
        }
    }

    return (
        <form className="main-form2" style={{ marginTop: '0px' }} id="form-main2" onSubmit={(e) => submit(e)}>
            {viewOrderConfirmation?<InformationPopup value={orderInfo}/>:null}

            <br />
            <div className="form-group2">
                <div className="product-grid">
                    <h1 className="cart-product-header">Checkouts</h1>
                </div>
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Name'}</span>
                <input className="form-field" type="text" placeholder="First Name" ref={m} defaultValue={user ? user.logininfo.name.firstname : ''} onChange={(e) => setFirstName(e.target.value)} required />
                <input className="form-field" type="text" placeholder="Last Name" ref={n} defaultValue={user ? user.logininfo.name.lastname : ''} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Address'}</span>

                <input className="form-field" type="text" placeholder="Address" ref={n} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'House No.'}</span>

                <input className="form-field" type="text" placeholder="Apartment, suite, etc. (optional)" ref={n} onChange={(e) => setHouseNumber(e.target.value)} />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'City'}</span>
                <input className="form-field" type="text" placeholder="City" ref={n} onChange={(e) => setCityName(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Phone No.'}</span>
                <input className="form-field" type="text" placeholder="Phone" ref={n} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="form-group2">
                <span style={{ width: '100px' }}>{'Email'}</span>
                <input className="form-field" type="Email" placeholder="Phone" ref={n} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="content-submit">
                <button className="button-13" style={{ marginLeft: '0px', width: '200px' }} type='submit' id='submit-button' >Continue to Shipping</button>
            </div>
            <br />
            <div className="content-submit" >
                <button className="button-13" style={{ marginLeft: '0px', width: '100px', backgroundColor: 'black' }} id='submit-button' role="button" onClick={() => { }}>Google pay</button>
            </div>
            <div className="content-error">
                <h4>{error}</h4>
            </div>
            <br />

            <p id='random-sentence' style={{ color: 'black' }}>This lightweight, soft Cactus will fast become your favorite. It's made with our  100% Certified Organic Cotton fabric giving you a fit that's stylish year-round.   </p>
            <br />
        </form>
    );
}

export default CheckoutForm;
