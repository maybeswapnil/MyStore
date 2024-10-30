import React from 'react';
import './ShippingPolicy.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container">
      <div className="policy-title">Terms and Conditions</div>

      <div className="policy-section">
        <p>
          Welcome to <strong>Swapnil Sharma Print Company</strong>. By using our website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully before using our services.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Eligibility</div>
        <p>
          You must be at least <strong>18 years old</strong> to use this website and make purchases. By using this website, you confirm that you meet this eligibility requirement.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Intellectual Property</div>
        <p>
          All content on this website, including images, text, and graphics, is the intellectual property of <strong>Swapnil Sharma Print Company</strong> and may not be reproduced, distributed, or used without our permission.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Product Descriptions</div>
        <p>
          We make every effort to display accurate information regarding our products. However, <strong>Swapnil Sharma Print Company</strong> does not guarantee that product descriptions or other content are completely accurate, reliable, or error-free.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Pricing and Payment</div>
        <p>
          All prices are displayed in Indian Rupees (INR) unless otherwise specified. We reserve the right to change prices without notice. Payments must be made via the methods available at checkout.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Shipping and Delivery</div>
        <p>
          Please refer to our <a href="/shipping-policy">Shipping Policy</a> for detailed information regarding shipping times, costs, and tracking.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Returns and Refunds</div>
        <p>
          If you are not satisfied with your purchase, please refer to our <a href="/returns-policy">Returns Policy</a> for information on returns and refunds.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Limitation of Liability</div>
        <p>
          <strong>Swapnil Sharma Print Company</strong> is not liable for any damages or losses resulting from the use of our website, products, or services, including but not limited to direct, indirect, or incidental damages.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Governing Law</div>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be resolved in the jurisdiction of India.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Changes to Terms</div>
        <p>
          We reserve the right to update or modify these terms and conditions at any time without prior notice. By continuing to use our website after changes are made, you agree to the revised terms.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">Contact Us</div>
        <p>
          If you have any questions regarding these terms and conditions, please contact us at <a href="mailto:info@swapnilsharma.in">info@swapnilsharma.in</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
