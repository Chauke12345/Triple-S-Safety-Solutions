import './base.css'
import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="brand">
          <h2>TRIPLE S</h2>
          <span>Safety Solutions</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#quote" className="quote-btn">
          Request a Quote
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="hero-label">WORKPLACE SAFETY SOLUTIONS</p>

            <h1>
              Safety Equipment
              <br />
              You Can Depend On
            </h1>

            <p className="hero-description">
              Supplying quality first aid kits, fire extinguishers and
              essential safety equipment for businesses and individuals.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="primary-btn">
                View Products
              </a>

              <a href="#quote" className="secondary-btn">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="safety-icon">+</div>

            <h3>Safety Starts Here</h3>

            <p>
              Reliable safety equipment to help protect your workplace,
              employees and customers.
            </p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section" id="products">
          <div className="section-heading">
            <p>OUR PRODUCTS</p>
            <h2>Essential Safety Equipment</h2>
            <span>
              Practical safety solutions for workplaces, vehicles,
              organisations and individuals.
            </span>
          </div>

          <div className="product-grid">
            <article className="product-card">
              <div className="product-icon">+</div>

              <h3>First Aid Kits</h3>

              <p>
                Essential first aid supplies for workplaces, vehicles and
                everyday emergency preparedness.
              </p>

              <a href="#quote">Request a Quote ?</a>
            </article>

            <article className="product-card">
              <div className="product-icon">FE</div>

              <h3>Fire Extinguishers</h3>

              <p>
                Fire safety equipment for businesses, offices and other
                environments where dependable protection matters.
              </p>

              <a href="#quote">Request a Quote ?</a>
            </article>

            <article className="product-card">
              <div className="product-icon">?</div>

              <h3>Safety Solutions</h3>

              <p>
                Speak to Triple S Safety Solutions about safety equipment
                required for your workplace or organisation.
              </p>

              <a href="#contact">Contact Us ?</a>
            </article>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-content">
            <p className="section-label">ABOUT TRIPLE S</p>

            <h2>Helping You Put Safety First</h2>

            <p>
              Triple S Safety Solutions supplies essential safety equipment
              to businesses, organisations and individuals.
            </p>

            <p>
              Our focus is simple: provide practical safety products with
              responsive service and an easy quotation process.
            </p>

            <a href="#quote" className="primary-btn">
              Get a Quote
            </a>
          </div>

          <div className="about-panel">
            <div className="about-stat">
              <strong>First Aid</strong>
              <span>Workplace & vehicle solutions</span>
            </div>

            <div className="about-stat">
              <strong>Fire Safety</strong>
              <span>Essential fire equipment</span>
            </div>

            <div className="about-stat">
              <strong>Direct Support</strong>
              <span>Easy quotation assistance</span>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-section">
          <div className="section-heading">
            <p>WHY CHOOSE US</p>
            <h2>Safety Made Simple</h2>
            <span>
              Straightforward service for customers looking for essential
              workplace safety equipment.
            </span>
          </div>

          <div className="why-grid">
            <article>
              <span>01</span>
              <h3>Quality Focus</h3>
              <p>
                We focus on supplying dependable safety equipment for
                everyday workplace needs.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Responsive Service</h3>
              <p>
                Contact us directly and receive assistance with your
                product or quotation enquiry.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Business & Individual Supply</h3>
              <p>
                Solutions for businesses, organisations, vehicles and
                individual customers.
              </p>
            </article>
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-section" id="quote">
          <div className="quote-copy">
            <p className="section-label">REQUEST A QUOTE</p>

            <h2>Need Safety Equipment?</h2>

            <p>
              Tell us what you need and Triple S Safety Solutions can
              contact you regarding your enquiry.
            </p>

            <div className="quote-contact">
              <strong>Quick enquiry</strong>
              <span>
                Complete the form and provide as much information as
                possible about the products you require.
              </span>
            </div>
          </div>

          <form
            className="quote-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your contact number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="product">Product Required</label>

              <select id="product" defaultValue="">
                <option value="" disabled>
                  Select a product
                </option>
                <option>First Aid Kits</option>
                <option>Fire Extinguishers</option>
                <option>Other Safety Equipment</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Enquiry Details</label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell us what you need..."
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Submit Quote Request
            </button>
          </form>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div>
            <p className="section-label">CONTACT US</p>
            <h2>Let's Talk Safety</h2>
          </div>

          <div className="contact-message">
            <p>
              Have a question about first aid kits, fire extinguishers or
              other safety equipment?
            </p>

            <a href="#quote" className="primary-btn">
              Send an Enquiry
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <h2>TRIPLE S</h2>
          <span>Safety Solutions</span>
        </div>

        <p>
          Safety equipment solutions for businesses and individuals.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#quote">Request a Quote</a>
        </div>

        <div className="footer-bottom">
          © 2026 Triple S Safety Solutions. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default App
