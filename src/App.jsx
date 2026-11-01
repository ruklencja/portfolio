import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [lang, setLang] = useState('EN');
  const [activeTab, setActiveTab] = useState('all');
  const [showImprint, setShowImprint] = useState(false);

  // Content dictionary for multi-language toggle
  const translations = {
    EN: {
      role: "Master's Student in European Business Management",
      headline: "Connecting EU Innovation, AI Accessibility, and Business Operations.",
      heroDesc: "Specializing in EU project coordination, digital business strategy, and cross-border innovation. Currently leading project workflows and open-science knowledge management for the EU-funded AIMused project.",
      ctaPrimary: "Explore Projects",
      ctaSecondary: "Download CV (PDF)"
    },
    DE: {
      role: "Master-Studentin in European Business Management",
      headline: "Verbindung von EU-Innovation, KI-Barrierefreiheit und Unternehmensführung.",
      heroDesc: "Spezialisiert auf EU-Projektkoordination, digitale Geschäftsstrategien und grenzüberschreitende Innovation. Derzeit verantwortlich für Projekt-Workflows und Knowledge Management im EU-geförderten Projekt AIMused.",
      ctaPrimary: "Projekte entdecken",
      ctaSecondary: "Lebenslauf herunterladen (PDF)"
    },
    PL: {
      role: "Studentka Studiów Magisterskich European Business Management",
      headline: "Łączenie innowacji UE, dostępności AI oraz zarządzania biznesem.",
      heroDesc: "Specjalizacja w koordynacji projektów unijnych, cyfrowych strategiach biznesowych oraz innowacjach transgranicznych. Zarządzanie workflow i wiedzą w finansowanym z UE projekcie AIMused.",
      ctaPrimary: "Zobacz Projekty",
      ctaSecondary: "Pobierz CV (PDF)"
    }
  };

  const t = translations[lang];

  return (
    <div className="portfolio-container">
      {/* HEADER & NAVIGATION */}
      <header className="site-header">
        <div className="logo-brand">
          <span className="name">Karolina Zdziarska</span>
          <span className="badge">EU Project Management & Innovation</span>
        </div>
        
        <div className="header-right">
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#languages">Languages</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Language Switcher */}
          <div className="lang-switcher">
            {['EN', 'DE', 'PL'].map((code) => (
              <button
                key={code}
                className={`lang-btn ${lang === code ? 'active' : ''}`}
                onClick={() => setLang(code)}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <span className="subhead-tag">{t.role}</span>
        <h1 className="hero-headline">{t.headline}</h1>
        <p className="hero-desc">{t.heroDesc}</p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">{t.ctaPrimary}</a>
          <a href="/CV_Karolina_Zdziarska.pdf" download className="btn btn-secondary">{t.ctaSecondary}</a>
        </div>
      </section>

      {/* 5-LANGUAGE MATRIX */}
      <section id="languages" className="section">
        <h2 className="section-title">Multilingual Capabilities</h2>
        <p className="section-subtitle">Leveraging 5 languages for international European operations, partner negotiations, and cross-cultural leadership.</p>
        
        <div className="language-grid">
          <div className="lang-card">
            <div className="lang-header">
              <h3>Polish</h3>
              <span className="level-badge native">Native</span>
            </div>
            <p>Primary language for corporate strategy, legal documentation, and regional analysis.</p>
          </div>

          <div className="lang-card">
            <div className="lang-header">
              <h3>English</h3>
              <span className="level-badge c2">C2 Proficient</span>
            </div>
            <p>Full academic and professional fluency; EU grant drafting, research reporting, and global partner alignment.</p>
          </div>

          <div className="lang-card">
            <div className="lang-header">
              <h3>German</h3>
              <span className="level-badge b2">B2 Upper-Inter.</span>
            </div>
            <p>Berlin municipal coordination, local partner communication, and regional business operations.</p>
          </div>

          <div className="lang-card">
            <div className="lang-header">
              <h3>Spanish</h3>
              <span className="level-badge b2">B2 Upper-Inter.</span>
            </div>
            <p>European cross-border networking, cultural exchange management, and international delegation support.</p>
          </div>

          <div className="lang-card">
            <div className="lang-header">
              <h3>Italian</h3>
              <span className="level-badge a2">B1 Elementary</span>
            </div>
            <p>Conversational communication and cultural context for Southern European project scope.</p>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section id="projects" className="section alt-bg">
        <h2 className="section-title">Key Projects & Case Studies</h2>
        
        {/* Category Filter */}
        <div className="filter-bar">
          {['all', 'eu-tech', 'business', 'event-logistics'].map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'all' && 'All Focus Areas'}
              {tab === 'eu-tech' && 'EU Research & AI'}
              {tab === 'business' && 'Entrepreneurship'}
              {tab === 'event-logistics' && 'Event Logistics'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {/* Project 1: AIMused */}
          {(activeTab === 'all' || activeTab === 'eu-tech') && (
            <div className="project-card featured">
              <span className="project-tag">EU-Funded Research</span>
              <h3>AIMused — AI-Driven Tactile Art & Museum Accessibility</h3>
              <p className="project-summary">
                Coordinating workflows and knowledge management for an EU research project transforming classic art masterpieces into 3D tactile prints for visually impaired visitors.
              </p>
              <ul className="project-bullets">
                <li>Managed 2D-to-3D AI conversion pipelines and physical prototyping workflows (3D printing, thermoforming).</li>
                <li>Created and maintained the official open-science Zenodo repository for consortium knowledge sharing.</li>
                <li>Executed vendor comparison matrices for standard vs. recycled PLA filaments to optimize project budgets.</li>
              </ul>
              <div className="tech-stack">
                <span>AI Image Processing</span>
                <span>3D Printing (PLA)</span>
                <span>Zenodo Repository</span>
                <span>EU Grant Management</span>
              </div>
            </div>
          )}

          {/* Project 2: Business Owner */}
          {(activeTab === 'all' || activeTab === 'business') && (
            <div className="project-card">
              <span className="project-tag">Sole Proprietorship</span>
              <h3>Language Learning & Translation Enterprise</h3>
              <p className="project-summary">
                Established and scaled a sole proprietorship delivering specialized translation and language instruction across legal, healthcare, and educational sectors.
              </p>
              <ul className="project-bullets">
                <li>Handled end-to-end strategic planning, client acquisition, and financial oversight.</li>
                <li>Implemented client management workflows resulting in sustained high retention rates.</li>
              </ul>
              <div className="tech-stack">
                <span>Business Operations</span>
                <span>B2B/B2C Sales</span>
                <span>Financial Management</span>
              </div>
            </div>
          )}

          {/* Project 3: Event Logistics & EUROEXPERT */}
          {(activeTab === 'all' || activeTab === 'event-logistics') && (
            <div className="project-card">
              <span className="project-tag">Logistics & Strategy</span>
              <h3>Festival Operations & EU Grant Coordination</h3>
              <p className="project-summary">
                Combined early experience at Funding Center EUROEXPERT with large-scale international group logistics for music festivals and student exchange networks.
              </p>
              <ul className="project-bullets">
                <li>Managed event logistics, artist relations, and eco-sustainability initiatives at major festivals (FEST, OnAir, Orange Warsaw).</li>
                <li>Coordinated travel, budgets, and cross-cultural events for international student delegations (ESN Warsaw).</li>
              </ul>
              <div className="tech-stack">
                <span>Event Operations</span>
                <span>EU Funding</span>
                <span>Crisis Adaptation</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* BEYOND THE RESUME / PASSIONS */}
      <section className="section">
        <h2 className="section-title">Core Competencies & Personal Pillars</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <span className="pillar-icon">🎯</span>
            <h3>EU Project Orchestration</h3>
            <p>Structuring cross-border collaboration, tracking deliverables, and maintaining compliance across multinational consortia.</p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">💡</span>
            <h3>Inclusive Innovation</h3>
            <p>Leveraging modern tools—from AI modeling to tactile 3D prints—to build accessible cultural and business experiences.</p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">⚡</span>
            <h3>Rapid Adaptability</h3>
            <p>Proven execution under tight deadlines, whether managing festival logistics or navigating complex business environments.</p>
          </div>
        </div>
      </section>

      {/* FOOTER & LEGAL */}
      <footer className="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Karolina Zdziarska. Built with React.js.</p>
          <div className="footer-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:k.zdziarska@wp.pl">Email</a>
            <button className="text-link" onClick={() => setShowImprint(true)}>Impressum / Legal Notice</button>
          </div>
        </div>
      </footer>

      {/* IMPRINT MODAL */}
      {showImprint && (
        <div className="modal-backdrop" onClick={() => setShowImprint(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Legal Notice (Impressum)</h3>
            <p><strong>Information according to § 5 TMG:</strong></p>
            <p>Karolina Zdziarska<br />Berlin, Germany</p>
            <p><strong>Contact:</strong><br />Email: k.zdziarska@wp.pl<br />Phone: +48 792 400 821</p>
            <p><strong>Responsibility for Content:</strong><br />The content of this website has been created with the utmost care. As a service provider, I am responsible for my own content on these pages under general law.</p>
            <button className="btn btn-primary btn-sm" onClick={() => setShowImprint(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}