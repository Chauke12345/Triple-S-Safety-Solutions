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
              <a href="#quote">Request a Quote →</a>
            </article>

            <article className="product-card">
              <div className="product-icon">FE</div>
              <h3>Fire Extinguishers</h3>
              <p>
                Dependable fire safety equipment for offices, businesses
                and commercial environments.
              </p>
              <a href="#quote">Request a Quote →</a>
            </article>

            <article className="product-card">
              <div className="product-icon">✓</div>
              <h3>Safety Solutions</h3>
              <p>
                Safety equipment and solutions tailored to the needs of
                your workplace or organisation.
              </p>
              <a href="#contact">Contact Us →</a>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
