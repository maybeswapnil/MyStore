import React from 'react';
import './ShippingPolicy.css';

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <div className="policy-title">Return / Refund / Replacement Policy</div>

      <div className="policy-section">
        <div className="section-title">Damaged Product</div>
        <p>If you have received a damaged product, please do not worry. Drop us an email at <a href="mailto:info@swapnilsharma.in">info@swapnilsharma.in</a> with images of the damaged product within 48 hours of receiving the order. We will assess the damage and provide a replacement or refund based on your preference.</p>
        <p>The full amount will be refunded, and it may reflect in your account within 7-10 business days from the date the refund is processed.</p>
      </div>

      <div className="policy-section">
        <div className="section-title">Cancellation</div>
        <p>Since all prints are made-to-order, we do not accept any cancellation requests.</p>
      </div>

      <div className="policy-section">
        <div className="section-title">Processing Orders</div>
        <p>Our business hours are 10:00 AM to 6:00 PM Indian Standard Time (IST), Monday through Friday. For any queries, please write to us at <a href="mailto:info@swapnilsharma.in">info@swapnilsharma.in</a>, and we will respond as soon as possible.</p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
