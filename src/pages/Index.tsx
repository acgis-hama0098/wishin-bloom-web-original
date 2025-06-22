
import React from 'react';

const Index = () => {
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>WishIn Bloom</h1>
          <p className="slogan">Where Every Gift Blooms with Meaning</p>
          <a href="#gallery" className="cta-button">Explore Our Creations</a>
        </div>
      </section>

      {/* Slideshow */}
      <section className="slideshow-container">
        <div className="slide active">
          <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt="Beautiful orange flowers arrangement" />
          <div className="slide-content">
            <h3>Baptism Celebrations</h3>
            <p>Sacred moments deserve sacred gifts</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22" alt="Warm golden lights" />
          <div className="slide-content">
            <h3>Christmas Magic</h3>
            <p>Handcrafted treasures for the holiday season</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" alt="Sunlight through green leaves" />
          <div className="slide-content">
            <h3>Mother's Day</h3>
            <p>Celebrating the nurturing spirit</p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="gallery" className="gallery">
        <h2>Our Handcrafted Creations</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt="Elegant floral arrangement" />
            <h3>Blessed Beginnings Set</h3>
            <p>A beautiful collection for baptism celebrations, featuring handcrafted elements that symbolize new life and faith.</p>
            <button className="inquire-btn">Inquire</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" alt="Cozy handmade items" />
            <h3>Mother's Love Bundle</h3>
            <p>Thoughtfully curated gifts that celebrate the warmth and care of motherhood with personalized touches.</p>
            <button className="inquire-btn">Inquire</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22" alt="Festive decorations" />
            <h3>Holiday Wonder Collection</h3>
            <p>Magical Christmas creations that bring joy and wonder to your holiday celebrations.</p>
            <button className="inquire-btn">Inquire</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" alt="Natural elements" />
            <h3>First Steps Keepsake</h3>
            <p>Commemorating life's precious milestones with handcrafted memories that last a lifetime.</p>
            <button className="inquire-btn">Inquire</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027" alt="Peaceful nature scene" />
            <h3>Anniversary Treasures</h3>
            <p>Romantic and meaningful gifts that celebrate enduring love and cherished memories together.</p>
            <button className="inquire-btn">Inquire</button>
          </div>
          
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Crafting workspace" />
            <h3>Graduation Dreams</h3>
            <p>Inspiring gifts for new graduates, celebrating achievements and encouraging future success.</p>
            <button className="inquire-btn">Inquire</button>
          </div>
        </div>
      </section>

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

export default Index;
