import React, { useEffect, useState } from 'react';
import './Invoice.css'; // Import the CSS file
import Loading from './Loading';

const Invoice = () => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('order_id'); // Get the orderId from the URL
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

    if (loading)  return  <div className="loadingCart"><Loading /></div>; // Loading state
    if (error) return <p className="loadingCart">Error: {error}</p>; // Show error message

    // Destructure the properties from the invoiceData object
    const { shippingInfo, cart, amount, created_at, order_id } = invoiceData;

    return (
        <div className="invoice-container">
            {/* Header Section */}
            <div className="invoice-header">
                <div className="invoice-logo">
                    <img src="https://i.imgur.com/xxsj5QF.png" alt="Logo" />
                </div>
                <div className="invoice-details">
                    <p>Narsinghpur, Madhya Pradesh, 487001</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@yourcompany.com</p>
                </div>
                <div className="invoice-meta">
                    <p>Invoice No: {order_id}</p>
                    <p>Date: {new Date(created_at).toLocaleDateString()}</p>
                </div>
            </div>

            {/* Billing and Shipping Section */}
            <div className="invoice-billing-shipping">
                <div className="bill-to">
                    <h3>Bill To:</h3>
                    <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                    <p>{shippingInfo.address}, {shippingInfo.cityName}, {shippingInfo.state}, {shippingInfo.postalCode}</p>
                    <p>Email: {shippingInfo.email}</p>
                    <p>Phone: {shippingInfo.phone}</p>
                </div>
                <div className="ship-to">
                    <h3>Ship To:</h3>
                    <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                    <p>{shippingInfo.address}, {shippingInfo.cityName}, {shippingInfo.state}, {shippingInfo.postalCode}</p>
                    <p>Email: {shippingInfo.email}</p>
                    <p>Phone: {shippingInfo.phone}</p>
                </div>
            </div>

            {/* Order Items Table */}
            <div className="invoice-table">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item._id}>
                                <td>{item.name} ({item.size})</td>
                                <td>{item.quantity}</td>
                                <td>₹{item.price[item.size]}</td>
                                <td>₹{item.price[item.size] * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Invoice Totals */}
            <div className="invoice-totals">
                <p>Subtotal: ₹{amount / 100}</p>
                <p>Tax (0%): ₹0.00</p>
                <p>Shipping: ₹0.00</p>
                <h3>Total: ₹{amount / 100}</h3>
            </div>
        </div>
    );
};

export default Invoice;
