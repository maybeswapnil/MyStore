import React from 'react';
import './ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-container">
      <div className="policy-title">Shipping Policy</div>

      <div className="policy-section">
        <div className="policy-subtitle">Domestic Shipping</div>
        <p>
          All orders usually get shipped within <strong>5-7 working days</strong> (unless otherwise mentioned in the product description section). So you can expect a delivery between <strong>7-10 days</strong>.
        </p>
        <p>
          You will get a tracking link in your inbox as soon as your order is shipped. Please allow <strong>24 hours</strong> for the status of the shipment to correctly display at the tracking link.
        </p>
        <p>
          In the event that the delivery address is not easily accessible, delivery time may be in excess of our estimate as aforesaid. For confirmation of the delivery address, you may be contacted on your <strong>email id or phone number</strong> provided by you.
        </p>
        <p>
          We only make use of reliable courier companies and/or Speed Post. <strong>Swapnil Sharma Print Company</strong> is not liable for any delays in delivery by the Courier Company/ Speed Post or on account of any factors beyond the control of <strong>Swapnil Sharma Print Company</strong>. We shall endeavor to ensure timely delivery of your order within the estimated time as mentioned in the order confirmation.
        </p>
        <p>
          In the unlikely event that delivery is not possible for any reasons outside the control of <strong>Swapnil Sharma Print Company</strong>, including but not limited to poor courier services in the delivery area, inaccessibility of the delivery area, force major events as laid out hereinafter, we shall inform you of such inability to deliver and cancel your order, followed by a <strong>full refund</strong>.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-subtitle">International Shipping</div>
        <p>
          For international orders, please allow <strong>10-15 working days</strong> for delivery, depending on your location. In some cases, it may take longer due to customs processing or other factors beyond our control.
        </p>
        <p>
          International customers will receive a <strong>tracking link</strong> once the order is shipped. Please allow <strong>48 hours</strong> for the tracking information to update.
        </p>
        <p>
          Please be aware that international shipments may be subject to <strong>customs duties, taxes, and other charges</strong>, which are the responsibility of the recipient. We recommend checking with your local customs office to determine any additional costs prior to purchase.
        </p>
        <p>
          <strong>Swapnil Sharma Print Company</strong> is not liable for any delays due to customs or unforeseen circumstances. If delivery is not possible due to international shipping restrictions or any factors beyond our control, we will inform you and provide a <strong>full refund</strong>.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
