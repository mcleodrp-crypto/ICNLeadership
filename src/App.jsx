import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      function onKeyDown(e) {
        if (e.key === "Escape") setMenuOpen(false);
      }
      function onClickOutside(e) {
        if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
          setMenuOpen(false);
        }
      }

      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onClickOutside);
      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.removeEventListener("mousedown", onClickOutside);
      };
    }, [menuOpen]);
  
  return (
    <div className="container" id="top">

      {/* NAVIGATION */}
      <header className="navbar" ref={navRef}>
        <div className="nav-container">
          <a href="#top" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-primary">Impact</span>
            <span className="logo-secondary">Coaching Network</span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            <a href="#about">About</a>
            <a href="#who">Who We Work With</a>
            <a href="#icn-system">Our Approach</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a
              href="https://calendar.app.google/ea8WhHeknLZuqffu8"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Schedule a Call
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="nav-mobile-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="nav-mobile" id="mobile-nav">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#who" onClick={() => setMenuOpen(false)}>Who We Work With</a>
            <a href="#icn-system" onClick={() => setMenuOpen(false)}>Our Approach</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a
              href="https://calendar.app.google/ea8WhHeknLZuqffu8"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Schedule a Call
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero section">
        <div className="inner-narrow">
          <h1>Empowering Educational Leaders to Achieve Extraordinary Impact</h1>
          <p>
            Impact Coaching Network partners with high-performing leaders to sharpen executive presence, expand perspective, and design systems that sustain impact.
          </p>
          <div className="buttons">
            <a href="https://calendar.app.google/ea8WhHeknLZuqffu8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="primary-btn">
              Schedule a 30-Minute Strategy Call            
            </a>
            <a href="#contact" className="secondary-btn">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="inner">
          <div className="about-grid">
            <img
              src="/ryan-mcleod-headshot.jpg"
              alt="Ryan McLeod Headshot"
              className="headshot"
              loading="lazy"
            />
          <div>
            <h2>Ryan McLeod, EdD</h2>

            <p className="credentials">
              Executive Leadership Coach
            </p>

            <p className="credentials-sub">
              Former Superintendent • Newfield Trained (ICF-accredited)
            </p>

            <p>
              Ryan McLeod brings more than 30 years of experience in education and public service, including over two decades serving in diverse school districts as a teacher, building leader, central office administrator, and superintendent.
            </p>

            <p>
              As Superintendent, he led comprehensive district reconfiguration efforts—designing and implementing systems for performance management, talent development, student support, collaborative teacher practice, and instructional leadership.
            </p>

            <p>
              Through executive coaching and organizational consulting, he helps high-performing leaders strengthen executive presence, expand perspective, and build systems that elevate leadership and organizational effectiveness. His work is structured, reflective, and grounded in practical experience—helping leaders translate clarity into sustained impact.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section id="who" className="who section">
        <div className="inner-narrow">
          <h2>Designed for High-Performing Leaders</h2>
          <p className="section-lede">
            This work is designed for superintendents, district leaders, principals, and emerging leaders who are already strong in their roles and ready to operate at a higher level of clarity and influence.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section id="icn-system" className="icn-system section">
        <div className="inner-narrow">
          <h2>Our Approach</h2>

          <div className="icn-content">
            <div className="icn-text">
              <p>
                Most coaching is episodic. Insightful conversations — disconnected from disciplined follow-through.
              </p>

              <p>
                <strong>The ICN Coaching System is different.</strong>
              </p>

              <p>
                It is built around a deliberate cycle of intentional preparation, strategic clarification, deliberate practice, and reflective inquiry — repeated over time until new ways of leading become integrated and sustained.
              </p>

              <p>
                This approach is designed for leaders who value growth and measurable impact.
              </p>
            </div>

            <div className="icn-graphic">
              <img
                src="/icn-cycle-graphic.png"
                alt="ICN Coaching System leadership development cycle"
                className="icn-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services section">
        <div className="inner">
          <div className="services-grid">

            <div className="service-card">
              <h3>Executive Leadership Coaching</h3>
              <p>
                Individual and small-group executive coaching focused on expanding perspective, strengthening executive presence, and increasing leadership effectiveness.
              </p>
            </div>

            <div className="service-card">
              <h3>Systems Development & Consulting</h3>
              <p>
                Strategic systems consulting focused on performance management, talent development, instructional leadership structures, and organizational design.
              </p>
            </div>

          </div>
          <div className="inner-narrow">
            <p>
              Coaching engagements are structured in focused phases — beginning with a strategic diagnostic and progressing into multi-month coaching partnerships that deepen perspective, strengthen execution, and create measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="engagement section">
        <div className="inner">
          <div className="inner-narrow">
            <h2>How Engagements Begin</h2>
            <p>
              Engagements are structured to create clarity, alignment, and sustained impact.
            </p>
          </div>

          <div className="engagement-grid">
            <div className="engagement-card">
              <h3>Clarify</h3>
              <p>Define outcomes, constraints, and the leadership moments that matter most.</p>
            </div>

            <div className="engagement-card">
              <h3>Design</h3>
              <p>Identify shifts in thinking and behavior—and design practical moves that fit your context.</p>
            </div>

            <div className="engagement-card">
              <h3>Sustain</h3>
              <p>Build routines and systems that reinforce progress and support lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta section">
        <div className="inner-narrow">
          <h2>Sustained Impact Requires Intentional Leadership</h2>
          <a
            href="https://calendar.app.google/ea8WhHeknLZuqffu8"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn large"
          >
            Schedule a 30-Minute Strategy Call
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact section">
        <div className="inner-narrow">
        <h2>Contact</h2>
        <p>
          If you're exploring executive coaching or organizational consulting, share a brief message below. I will follow up personally to discuss next steps.
        </p>

        <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="inner footer-container">
          <div>
            <h3>Impact Coaching Network</h3>
            <p>
              Executive Coaching and Strategic Consulting
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a 
              href="https://calendar.app.google/ea8WhHeknLZuqffu8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Impact Coaching Network, LLC. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnjbbyqk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="success-message">
        <h3>Message Sent</h3>
        <p>
          Thank you for reaching out. I will respond personally within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="hp-field"
      />
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
      ></textarea>

      <button type="submit" className="primary-btn">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

        <p className="form-note">
          Coaching engagements are limited to ensure depth and focus.
        </p>

      {status === "error" && (
        <p className="error-message">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default App;