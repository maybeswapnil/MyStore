import React from 'react';

const ContactDetails = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontFamily: 'Space Grotesk, sans-serif', marginTop: "200px", marginBottom: "170px"  }}>
      <h2 style={{ fontFamily: 'Cabin Sketch, cursive', fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
      <p style={{ marginBottom: '1.5rem' }}>For any queries, feel free to reach out to us:</p>
      
      <div style={{ marginBottom: '1rem' }}>
        <strong>Email:</strong> <span style={{ marginLeft: '0.5rem' }}>info@swapnilsharma.in</span>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Phone:</strong> <span style={{ marginLeft: '0.5rem' }}>+91 9755448822</span>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Business Hours:</strong> <span style={{ marginLeft: '0.5rem' }}>Monday - Friday, 10:00 AM - 6:00 PM IST</span>
      </div>
    </div>
  );
};

export default ContactDetails;
