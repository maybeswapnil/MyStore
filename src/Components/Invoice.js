import React, { useEffect, useState } from 'react';
import './Invoice.css'; // Import the CSS file

const Invoice = () => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('order_id'); // Get the orderId from the URL path
    const [invoiceData, setInvoiceData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state

    useEffect(() => {
        if (orderId) {
            console.log("Captured orderId:", orderId); // Log the orderId

            // Fetch invoice data from the server using the dynamic orderId
            fetch(`https://mystore-apiset.onrender.com/mystore/orders?order_id=${orderId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok'); // Throw error for non-2xx responses
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.length > 0) {
                        setInvoiceData(data[0]); // Set the first element of the array as invoiceData
                    } else {
                        throw new Error('No invoice data found');
                    }
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch((error) => {
                    setError(error.message); // Set error message
                    setLoading(false); // Set loading to false on error
                });
        } else {
            console.log("No orderId found in the URL");
        }
    }, [orderId]);

    if (loading) return <p>Loading...</p>; // Show loading message
    if (error) return <p className="error-message">Error: {error}</p>; // Show error message

    // Destructure the properties from the invoiceData object
    const { shippingInfo, cart, amount, payment_status, created_at, razorpay_payment_id, razorpay_signature, order_id } = invoiceData;

    return (
        <div className="invoice-container">
            <div className="invoice-header">
                <h1>Invoice</h1>
                <p className="invoice-date">Invoice Date: {new Date(created_at).toLocaleString()}</p>
                <p>Order ID: <span className="invoice-id">{order_id}</span></p>
                <p>Payment Status: <span className={`payment-status ${payment_status.toLowerCase()}`}>{payment_status}</span></p>
                <p>Razorpay Payment ID: {razorpay_payment_id}</p>
            </div>

            {/* Shipping Information */}
            <div className="invoice-section">
                <h2>Shipping Information</h2>
                <p>Name: {shippingInfo.firstName} {shippingInfo.lastName}</p>
                <p>Address: {shippingInfo.houseNo} {shippingInfo.address}, {shippingInfo.cityName}</p>
                <p>Phone: {shippingInfo.phone}</p>
                <p>Email: {shippingInfo.email}</p>
            </div>

            {/* Order Summary */}
            <div className="invoice-section">
                <h2>Order Summary</h2>
                {cart.map((item) => (
                    <div key={item._id} className="invoice-item">
                        <img src={item.smallurl} alt={item.name} className="invoice-item-image" />
                        <div className="invoice-item-details">
                            <p><strong>Title:</strong> {item.name}</p>
                            <p><strong>Size:</strong> {item.size}</p>
                            <p><strong>Price:</strong> ₹{item.price[item.size]}</p>
                            <p><strong>Quantity:</strong> {item.quantity}</p>
                            <p><strong>Camera Used:</strong> {item.camera}</p>
                            <p><strong>Shipping Time:</strong> {item.shipping_time}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total Amount */}
            <div className="invoice-total">
                <h2>Total Amount: ₹{amount/100}</h2>
            </div>
        </div>
    );
};

export default Invoice;
