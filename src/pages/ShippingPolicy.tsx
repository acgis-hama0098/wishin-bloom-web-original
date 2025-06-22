
import React from 'react';

const ShippingPolicy = () => {
  return (
    <>
      <link rel="stylesheet" href="/src/styles/WishInBloom.css" />
      
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">WishIn Bloom</a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link">Occasions ▼</a>
              <div className="dropdown-content">
                <a href="/baptism">Baptism</a>
                <a href="/mothers-day">Mother's Day</a>
                <a href="/christmas">Christmas</a>
                <a href="/communion">First Communion</a>
                <a href="/baby-shower">Baby Shower</a>
                <a href="/anniversary">Anniversary</a>
                <a href="/valentines-day">Valentine's Day</a>
                <a href="/easter">Easter</a>
                <a href="/graduation">Graduation</a>
                <a href="/engagement">Engagement</a>
                <a href="/new-year">New Year</a>
                <a href="/retirement">Retirement</a>
                <a href="/casual-gifts">Casual Gifts</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Header */}
      <section className="page-header">
        <h1>Shipping Policy</h1>
      </section>

      {/* Page Content */}
      <div className="page-content">
        <div style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.1rem', color: 'var(--warm-taupe)', marginBottom: '2rem'}}>
            <strong>Effective Date:</strong> [Date]
          </p>
          
          <h2 style={{color: 'var(--charcoal-gray)', marginBottom: '1rem'}}>Processing Time</h2>
          <p style={{marginBottom: '1.5rem'}}>
            As all WishIn Bloom items are handcrafted to order, processing times vary depending on the complexity of your custom piece and current order volume. We will provide you with an estimated completion time when you place your order.
          </p>

          <h2 style={{color: 'var(--charcoal-gray)', marginBottom: '1rem'}}>Shipping Methods</h2>
          <p style={{marginBottom: '1rem'}}>We offer several shipping options:</p>
          <ul style={{marginBottom: '1.5rem', paddingLeft: '2rem'}}>
            <li><strong>Standard Shipping:</strong> 5-7 business days</li>
            <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
            <li><strong>Priority Shipping:</strong> 1-2 business days</li>
            <li><strong>Local Delivery:</strong> Available in select areas</li>
          </ul>

          <h2 style={{color: 'var(--charcoal-gray)', marginBottom: '1rem'}}>Shipping Costs</h2>
          <p style={{marginBottom: '1.5rem'}}>
            Shipping costs are calculated based on the size, weight, and destination of your order. We will provide you with shipping costs before you confirm your order.
          </p>

          <h2 style={{color: 'var(--charcoal-gray)', marginBottom: '1rem'}}>International Shipping</h2>
          <p style={{marginBottom: '1.5rem'}}>
            We currently offer shipping within Canada and the United States. International shipping may be available for certain items - please contact us to discuss your specific needs.
          </p>

          <h2 style={{color: 'var(--charcoal-gray)', marginBottom: '1rem'}}>Package Care</h2>
          <p style={{marginBottom: '1.5rem'}}>
            All items are carefully packaged to ensure they arrive in perfect condition. We use eco-friendly packaging materials whenever possible and include care instructions for your handcrafted items.
          </p>

          <h2 style={{color: 'var(--charcoal-gray)', marginBottom: '1rem'}}>Tracking Information</h2>
          <p style={{marginBottom: '1.5rem'}}>
            You will receive tracking information via email once your order ships. This allows you to follow your package's journey to your door.
          </p>

          <h2 style={{color: 'var(--charcoal-gray)', marginBottom: '1rem'}}>Questions?</h2>
          <p style={{marginBottom: '1.5rem'}}>
            If you have any questions about shipping, please don't hesitate to <a href="/contact" style={{color: 'var(--dusty-rose)'}}>contact us</a>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WishIn Bloom</h3>
            <p>Where Every Gift Blooms with Meaning</p>
            <p>Handcrafted with love for life's special moments.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
          
          <div className="footer-section">
            <h3>Policies</h3>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/shipping-policy">Shipping Policy</a>
            <a href="/refund-policy">Return & Refund Policy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 WishIn Bloom. All rights reserved.</p>
        </div>
      </footer>

      <script src="/src/scripts/WishInBloom.js"></script>
    </>
  );
};

export default ShippingPolicy;
