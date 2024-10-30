import React from 'react';
import './ShippingPolicy.css';

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <div className="policy-title">Return Policy</div>

      <div className="policy-section">
        <div className="policy-subtitle">No Returns Accepted</div>
        <p>
          At <strong>Swapnil Sharma Print Company</strong>, we take great care to ensure that our products meet high standards of quality and craftsmanship. As such, <strong>we do not accept returns</strong> on any items once they have been purchased.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Order Carefully</div>
        <p>
          We encourage customers to carefully review their order details, including size, color, and quantity, before making a purchase. Our team is available to answer any questions and provide further information to help you make informed decisions.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Contact Us</div>
        <p>
          For any questions regarding your order or additional assistance, please contact us at <a href="mailto:info@swapnilsharma.in">info@swapnilsharma.in</a>. We’re here to help with any inquiries.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
