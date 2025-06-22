
import React from 'react';

const Contact = () => {
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
        <h1>Contact Us</h1>
      </section>

      {/* Page Content */}
      <div className="page-content">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{color: 'var(--deep-plum)', marginBottom: '1rem'}}>Let's Create Something Beautiful Together</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--sage-green)'}}>
            We'd love to hear about your special occasion and help you create the perfect meaningful gift.
          </p>
        </div>

        <form id="contact-form" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="occasion">Occasion (Optional)</label>
            <select id="occasion" name="occasion" style={{width: '100%', padding: '1rem', border: '2px solid var(--sage-green)', borderRadius: '10px', fontSize: '1rem'}}>
              <option value="">Select an occasion</option>
              <option value="baptism">Baptism</option>
              <option value="mothers-day">Mother's Day</option>
              <option value="christmas">Christmas</option>
              <option value="communion">First Communion</option>
              <option value="baby-shower">Baby Shower</option>
              <option value="anniversary">Anniversary</option>
              <option value="valentines-day">Valentine's Day</option>
              <option value="easter">Easter</option>
              <option value="graduation">Graduation</option>
              <option value="engagement">Engagement</option>
              <option value="new-year">New Year</option>
              <option value="retirement">Retirement</option>
              <option value="casual-gifts">Casual Gifts</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Tell us about your vision, the occasion, any special requirements, or ask us any questions..." required></textarea>
          </div>
          
          <button type="submit" className="cta-button" style={{width: '100%'}}>Send Message</button>
        </form>

        <div style={{marginTop: '3rem', textAlign: 'center', padding: '2rem', backgroundColor: 'var(--ivory-white)', borderRadius: '15px', border: '2px solid var(--dusty-rose)'}}>
          <h3 style={{color: 'var(--deep-plum)', marginBottom: '1rem'}}>Get In Touch</h3>
          <p style={{marginBottom: '0.5rem', color: 'var(--sage-green)'}}>
            <strong>Response Time:</strong> We typically respond within 24-48 hours
          </p>
          <p style={{marginBottom: '0.5rem', color: 'var(--sage-green)'}}>
            <strong>Custom Orders:</strong> Lead time varies based on complexity and current orders
          </p>
          <p style={{color: 'var(--sage-green)'}}>
            <strong>Consultations:</strong> Available for special projects and events
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

export default Contact;
