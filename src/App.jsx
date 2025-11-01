import { useState } from 'react';
import './App.css';

// Icon components
const Icons = {
  Layers: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  Smartphone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  Compass: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  Film: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
      <line x1="7" y1="2" x2="7" y2="22"/>
      <line x1="17" y1="2" x2="17" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <line x1="2" y1="7" x2="7" y2="7"/>
      <line x1="2" y1="17" x2="7" y2="17"/>
      <line x1="17" y1="17" x2="22" y2="17"/>
      <line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  )
};

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Brand Identity',
      client: 'Horizon Tech',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80',
      year: '2024'
    },
    {
      id: 2,
      title: 'Website Redesign',
      client: 'Urban Cafe',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      year: '2024'
    },
    {
      id: 3,
      title: 'Mobile App',
      client: 'FitLife',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
      year: '2023'
    },
    {
      id: 4,
      title: 'Marketing Campaign',
      client: 'EcoWear',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
      year: '2023'
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      client: 'Modern Living',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80',
      year: '2024'
    },
    {
      id: 6,
      title: 'Brand Guidelines',
      client: 'Pulse Studios',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      year: '2023'
    }
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80'
    },
    {
      name: 'Marcus Thompson',
      role: 'Art Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80'
    }
  ];

  return (
    <div className="agency-site">
      {/* Bold Header */}
      <header className="header-creative">
        <div className="header-top">
          <div className="logo-creative">STUDIO</div>
          <nav className="nav-creative">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="btn-menu">Menu</button>
        </div>
      </header>

      {/* Hero - Full Viewport */}
      <section className="hero-creative">
        <div className="hero-bg-pattern"></div>
        <div className="hero-grid-creative">
          <div className="hero-left-creative">
            <div className="hero-badge">AWARD WINNING STUDIO</div>
            <h1 className="hero-title-creative">
              We Create
              <br />
              <span className="title-italic">Experiences</span>
              <br />
              That Matter
            </h1>
            <div className="hero-visual-line"></div>
          </div>
          <div className="hero-right-creative">
            <div className="hero-stats-creative">
              <div className="stat-creative">
                <div className="stat-num">50+</div>
                <div className="stat-text">Projects</div>
              </div>
              <div className="stat-creative">
                <div className="stat-num">20+</div>
                <div className="stat-text">Clients</div>
              </div>
              <div className="stat-creative">
                <div className="stat-num">5</div>
                <div className="stat-text">Awards</div>
              </div>
            </div>
            <p className="hero-description">
              A creative studio specializing in brand identity, 
              digital experiences, and strategic design that pushes boundaries.
            </p>
            <button className="btn-hero-creative">View Our Work </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Services - Grid */}
      <section className="services-creative">
        <div className="services-container">
          <div className="section-header-with-badge">
            <div className="section-badge">WHAT WE DO</div>
            <h2 className="section-title-creative">Our Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card-creative">
              <div className="service-icon-creative">
                <Icons.Layers />
              </div>
              <div className="service-number">01</div>
              <h3 className="service-title">Brand Strategy</h3>
              <p className="service-desc">
                We craft authentic brand identities that resonate with 
                your audience and stand the test of time.
              </p>
              <a href="#branding" className="service-link">Learn More →</a>
            </div>
            <div className="service-card-creative">
              <div className="service-icon-creative">
                <Icons.Smartphone />
              </div>
              <div className="service-number">02</div>
              <h3 className="service-title">Digital Design</h3>
              <p className="service-desc">
                Beautiful, functional websites and apps that deliver 
                exceptional user experiences.
              </p>
              <a href="#digital" className="service-link">Learn More →</a>
            </div>
            <div className="service-card-creative">
              <div className="service-icon-creative">
                <Icons.Compass />
              </div>
              <div className="service-number">03</div>
              <h3 className="service-title">Creative Direction</h3>
              <p className="service-desc">
                Strategic creative leadership that brings your vision 
                to life across all touchpoints.
              </p>
              <a href="#creative" className="service-link">Learn More →</a>
            </div>
            <div className="service-card-creative">
              <div className="service-icon-creative">
                <Icons.Film />
              </div>
              <div className="service-number">04</div>
              <h3 className="service-title">Motion & Video</h3>
              <p className="service-desc">
                Engaging motion graphics and video content that 
                captures attention and tells your story.
              </p>
              <a href="#motion" className="service-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Large Images */}
      <section className="work-showcase">
        <div className="work-header">
          <div>
            <div className="section-badge">PORTFOLIO</div>
            <h2 className="section-title-creative">Featured Work</h2>
          </div>
          <button className="btn-view-all">View All Projects</button>
        </div>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-item"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                  <button className="btn-view-project">View Project</button>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-client">{project.client}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="section-badge">THE TEAM</div>
          <h2 className="section-title-creative">Meet The Creatives</h2>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-member">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href="#linkedin">LinkedIn</a>
                      <a href="#dribbble">Dribbble</a>
                    </div>
                  </div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Bold */}
      <section className="testimonial-bold">
        <div className="testimonial-content-bold">
          <div className="quote-large">"</div>
          <blockquote className="testimonial-quote-bold">
            Working with Studio was a game-changer. They transformed our brand 
            into something truly remarkable and exceeded every expectation.
          </blockquote>
          <div className="testimonial-author-bold">
            <div className="author-name-bold">Sarah Johnson</div>
            <div className="author-title-bold">CEO, Horizon Tech</div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="contact-content">
          <h2 className="contact-heading">
            Let's Create
            <br />
            Something Amazing
          </h2>
          <p className="contact-text">
            Have a project in mind? We'd love to hear about it.
          </p>
          <div className="contact-actions">
            <button className="btn-contact-primary">Start a Project</button>
            <a href="mailto:hello@studio.com" className="contact-email">hello@studio.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-creative">
        <div className="footer-grid-creative">
          <div className="footer-main">
            <div className="footer-logo">STUDIO</div>
            <p className="footer-tagline">
              A creative studio pushing the boundaries of design and innovation.
            </p>
            <div className="footer-social">
              <a href="#instagram">Instagram</a>
              <a href="#dribbble">Dribbble</a>
              <a href="#behance">Behance</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Studio</h4>
              <a href="#about">About Us</a>
              <a href="#team">Our Team</a>
              <a href="#careers">Careers</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#branding">Branding</a>
              <a href="#web">Web Design</a>
              <a href="#ui">UI/UX</a>
              <a href="#motion">Motion</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:hello@studio.com">hello@studio.com</a>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
              <p>123 Design Street<br/>New York, NY 10001</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom-creative">
          <div>© 2024 Studio · Designed by Brian Munene Mwirigi · All rights reserved.</div>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;