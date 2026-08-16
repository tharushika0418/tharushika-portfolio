import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes(prev => {
        const newIndexes = { ...prev };
        projects.forEach((project, idx) => {
          if (project.images && project.images.length > 1) {
            const currentIndex = newIndexes[idx] || 0;
            newIndexes[idx] = (currentIndex + 1) % project.images.length;
          }
        });
        return newIndexes;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedIndex(prev => (prev + 1) % featuredImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const featuredImages = [
    `${process.env.PUBLIC_URL}/images/vescueye-1.jpeg`,
    `${process.env.PUBLIC_URL}/images/vescueye-2.jpeg`,
    `${process.env.PUBLIC_URL}/images/vescueye-3.jpeg`,
    `${process.env.PUBLIC_URL}/images/1.jpeg`,
    `${process.env.PUBLIC_URL}/images/2.jpeg`,
    `${process.env.PUBLIC_URL}/images/3.jpeg`,
    `${process.env.PUBLIC_URL}/images/4.jpeg`,
    `${process.env.PUBLIC_URL}/images/5.jpeg`,
    `${process.env.PUBLIC_URL}/images/6.jpeg`
  ];

  const projects = [
    {
      title: "Vescueye",
      subtitle: "Real-Time Blood Flow Monitoring System",
      description: "Medical IoT device for post-operative monitoring using NIR imaging, temperature sensing, and AWS IoT cloud integration for real-time surgical alerts.",
      tech: ["IoT", "AWS", "React", "Node.js"],
      category: "IoT & Cloud",
      year: "2024-2025",
      images: [
        `${process.env.PUBLIC_URL}/images/vescueye-1.jpeg`,
        `${process.env.PUBLIC_URL}/images/vescueye-2.jpeg`,
        `${process.env.PUBLIC_URL}/images/vescueye-3.jpeg`,
        `${process.env.PUBLIC_URL}/images/vescueye-4.jpeg`,
        `${process.env.PUBLIC_URL}/images/vescueye-5.jpeg`
      ]
    },
    {
      title: "Metagenomics Analysis",
      subtitle: "Data-Driven Comparative Methods",
      description: "Applied Graph Neural Networks and dimensionality reduction techniques for advanced metagenomics clustering and comparative analysis.",
      tech: ["Python", "GNN", "ML"],
      category: "Machine Learning",
      year: "2025-Present",
      images: [
        `${process.env.PUBLIC_URL}/images/fyp-1.jpeg`,
        `${process.env.PUBLIC_URL}/images/fyp-2.jpeg`,
        `${process.env.PUBLIC_URL}/images/fyp-3.jpeg`,
        `${process.env.PUBLIC_URL}/images/fyp-5.jpeg`,
        `${process.env.PUBLIC_URL}/images/fyp-4.jpeg`,
        `${process.env.PUBLIC_URL}/images/fyp-6.jpeg`,
      ]
    },
    {
      title: "FoundIt",
      subtitle: "AI-Powered Lost & Found System",
      description: "Smart web application using SentenceBERT and OpenAI CLIP for intelligent similarity matching to reconnect lost items with owners through semantic text and multimodal image analysis.",
      tech: ["Python", "Flask", "MongoDB", "AI/ML"],
      category: "Machine Learning",
      year: "2024",
      images: [
        `${process.env.PUBLIC_URL}/images/foundit-1.jpg`,
        `${process.env.PUBLIC_URL}/images/foundit-2.jpg`,
        `${process.env.PUBLIC_URL}/images/foundit-3.jpg`
      ]
    },
    {
      title: "TourMate",
      subtitle: "Smart Travel Companion",
      description: "Full-stack travel planning application with route optimization, real-time data integration, and downloadable PDF itineraries.",
      tech: ["React", "Spring Boot", "MySQL"],
      category: "Web Development",
      year: "2024",
      video: `${process.env.PUBLIC_URL}/videos/vescueye-demo.mp4`
    },
    {
      title: "POSync",
      subtitle: "Point of Sale System",
      description: "Enterprise POS system with JWT authentication, Spring Security REST APIs, and normalized database architecture.",
      tech: ["React", "Spring Boot", "MySQL"],
      category: "Full Stack",
      year: "2023",
      images: [
        "/images/posync-1.jpg",
        "/images/posync-2.jpg",
        "/images/posync-3.jpg"
      ]
    }
  ];

  const skills = [
    { 
      category: "Languages", 
      items: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" }
      ]
    },
    { 
      category: "Frontend", 
      items: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
      ]
    },
    { 
      category: "Database", 
      items: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
      ]
    },
    { 
      category: "Cloud & DevOps", 
      items: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
      ]
    },
    { 
      category: "Tools", 
      items: [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Comprehensive Java Master Developer Professional Level Certificate",
      issuer: "Institute of Java and Software Engineering (IJSE)",
      date: "2023-2024",
      credentialId: ""
    },
    {
      title: "Implementing and Administering Network Solutions (Aligned with CCNA)",
      issuer: "Vibernets Academy",
      date: "2024",
      credentialId: ""
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1d',
      color: '#e0e0e0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        .accent-text {
          color: #e91e63;
        }

        .project-card {
          background: #242428;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          border-radius: 8px;
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(233, 30, 99, 0.15);
          border-color: rgba(233, 30, 99, 0.3);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-radius: 8px 8px 0 0;
          background: #1a1a1d;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease-in-out;
        }

        .project-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-video:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }

        .featured-image-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 500px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 8px;
          background: #1a1a1d;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease-in-out;
        }

        .image-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .indicator-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .indicator-dot.active {
          background: #e91e63;
          width: 24px;
          border-radius: 3px;
        }

        .nav-link {
          position: relative;
          transition: color 0.2s ease;
          padding: 0.5rem 0;
        }

        .nav-link.active {
          color: #e91e63;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #e91e63;
          transition: width 0.2s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .btn-primary {
          background: #e91e63;
          color: #ffffff;
          padding: 12px 28px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          background: #c2185b;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #e91e63;
          padding: 12px 28px;
          border: 2px solid #e91e63;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-outline:hover {
          background: #e91e63;
          color: #ffffff;
        }

        .profile-image {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(233, 30, 99, 0.3);
        }

        .skill-card {
          background: #242428;
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: rgba(233, 30, 99, 0.3);
        }

        .skill-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem;
          background: rgba(233, 30, 99, 0.05);
          border-radius: 6px;
          transition: all 0.2s ease;
          border: 1px solid rgba(233, 30, 99, 0.1);
        }

        .skill-icon-item:hover {
          background: rgba(233, 30, 99, 0.1);
          border-color: rgba(233, 30, 99, 0.3);
        }

        .skill-icon-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .skill-icon-name {
          font-size: 0.8rem;
          color: #b0b0b0;
          font-weight: 500;
          text-align: center;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          background: #242428;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b0b0b0;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background: #e91e63;
          color: #ffffff;
          border-color: #e91e63;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .profile-image {
            width: 240px;
            height: 240px;
            margin: 2rem auto;
            display: block;
          }
          .featured-image-container {
            height: 350px;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: #888;
          margin-bottom: 3rem;
        }

        .info-card {
          background: #242428;
          padding: 1.75rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: rgba(233, 30, 99, 0.3);
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(26, 26, 29, 0.95)' : 'rgba(26, 26, 29, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        padding: '1.25rem 0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.35rem',
            fontWeight: '700',
            color: '#ffffff'
          }}>
            Tharushika
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '2rem'
          }} className="desktop-nav">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Certifications', id: 'certifications' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id ? '#e91e63' : '#b0b0b0',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#e91e63',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{
            background: '#242428',
            padding: '1rem 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem 2rem',
                  background: 'none',
                  border: 'none',
                  color: '#b0b0b0',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 2rem 4rem 2rem',
        background: '#1a1a1d'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 968 ? '1.3fr 1fr' : '1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <p style={{
                fontSize: '0.9rem',
                color: '#e91e63',
                marginBottom: '1.5rem',
                letterSpacing: '0.5px',
                fontWeight: '600'
              }}>
                COMPUTER ENGINEERING STUDENT
              </p>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                marginBottom: '1.5rem',
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }}>
                Hi, I'm <span className="accent-text">Tharushika</span>
                <br />
                <span style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#b0b0b0' }}>Full-Stack Developer</span>
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: '#888',
                lineHeight: '1.7',
                marginBottom: '2.5rem',
                maxWidth: '600px'
              }}>
                Specializing in Software Engineering, Cloud Computing, and Machine Learning. Building innovative solutions to solve real-world problems.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '2.5rem'
              }}>
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  Get In Touch
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => scrollToSection('projects')} className="btn-outline">
                  View Projects
                </button>
              </div>
              <div>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  Connect with me
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/tharushika0418" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/tharushika-prasadinie-29a13a261" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Linkedin size={18} />
                  </a>
                  <a href="mailto:e20300@eng.pdn.ac.lk" className="social-icon">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img 
                src={`${process.env.PUBLIC_URL}/images/image.jpeg`}
                alt="Tharushika Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        background: '#202023'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Education, experience, and achievements
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 968 ? 'repeat(2, 1fr)' : '1fr',
            gap: '2.5rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '600' }}>
                Computer Engineering Student
              </h3>
              <p style={{ fontSize: '1rem', color: '#b0b0b0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Specializing in Software Engineering, DevOps, Cloud Computing, Machine Learning, and Networking. Experienced in full-stack development, database management, and software deployment.
              </p>
              <p style={{ fontSize: '1rem', color: '#b0b0b0', lineHeight: '1.8' }}>
                Passionate about building scalable applications and optimizing processes. Skilled in designing innovative solutions to enhance efficiency and user experience.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gap: '1.25rem'
            }}>
              <div className="info-card">
                <h4 style={{ fontSize: '1rem', color: '#e91e63', marginBottom: '0.5rem', fontWeight: '600' }}>Education</h4>
                <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>BSc Eng Hons - Computer Engineering</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>University of Peradeniya</p>
                <p style={{ color: '#e91e63', marginTop: '0.5rem', fontWeight: '600' }}>GPA: 3.56/4.0</p>
              </div>

              <div className="info-card">
                <h4 style={{ fontSize: '1rem', color: '#e91e63', marginBottom: '0.5rem', fontWeight: '600' }}>Experience</h4>
                <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>Undergraduate Teaching Assistant</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Department of Computer Engineering</p>
                <p style={{ color: '#888', marginTop: '0.5rem', fontSize: '0.85rem' }}>Feb 2023 - Aug 2025</p>
              </div>

              <div className="info-card">
                <h4 style={{ fontSize: '1rem', color: '#e91e63', marginBottom: '0.5rem', fontWeight: '600' }}>Achievement</h4>
                <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600' }}>Second Runner-up</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>IEEE EMBS BioFusion AI/ML Medical Hackathon 2026</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '5rem' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '2rem',
              color: '#ffffff'
            }}>
              Featured Work
            </h3>
            <div className="featured-image-container">
              {featuredImages.map((image, idx) => (
                <img 
                  key={idx}
                  src={image}
                  alt={`Featured ${idx + 1}`}
                  className="featured-image"
                  style={{
                    position: idx === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    opacity: idx === currentFeaturedIndex ? 1 : 0
                  }}
                />
              ))}
              
              <div className="image-indicators">
                {featuredImages.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`indicator-dot ${idx === currentFeaturedIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '6rem 2rem',
        background: '#1a1a1d'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {skills.map((category, idx) => (
              <div key={idx} className="skill-card">
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  marginBottom: '1.25rem', 
                  color: '#ffffff',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  {category.category}
                </h3>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {category.items.map((skill, i) => (
                    <div key={i} className="skill-icon-item">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="skill-icon-img"
                      />
                      <span className="skill-icon-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '6rem 2rem',
        background: '#202023'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected work and case studies
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, idx) => {
              const currentIndex = currentImageIndexes[idx] || 0;
              const hasMultipleImages = project.images && project.images.length > 1;
              const hasVideo = project.video;
              
              return (
                <div key={idx} className="project-card">
                  <div className="project-image-container">
                    {hasVideo ? (
                      <video 
                        className="project-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        {project.images && project.images.map((image, imgIdx) => (
                          <img 
                            key={imgIdx}
                            src={image}
                            alt={`${project.title} - Image ${imgIdx + 1}`}
                            className="project-image"
                            style={{
                              position: imgIdx === 0 ? 'relative' : 'absolute',
                              top: 0,
                              left: 0,
                              opacity: imgIdx === currentIndex ? 1 : 0
                            }}
                          />
                        ))}
                        
                        {hasMultipleImages && (
                          <div className="image-indicators">
                            {project.images.map((_, imgIdx) => (
                              <div 
                                key={imgIdx}
                                className={`indicator-dot ${imgIdx === currentIndex ? 'active' : ''}`}
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div style={{ padding: '1.75rem' }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.35rem 0.85rem',
                      background: 'rgba(233, 30, 99, 0.15)',
                      borderRadius: 4,
                      fontSize: '0.75rem',
                      color: '#e91e63',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      {project.category}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: '#ffffff'
                    }}>
                      {project.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#888',
                      marginBottom: '1rem',
                      fontWeight: '500'
                    }}>
                      {project.subtitle}
                    </p>
                    
                    <p style={{
                      color: '#b0b0b0',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      fontSize: '0.9rem'
                    }}>
                      {project.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.tech.map((tech, i) => (
                          <span key={i} style={{
                            padding: '0.3rem 0.7rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: 4,
                            fontSize: '0.75rem',
                            color: '#b0b0b0',
                            fontWeight: '500'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span style={{
                        color: '#666',
                        fontSize: '0.8rem'
                      }}>
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '5rem' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              Publications
            </h3>
            <div className="info-card">
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1rem',
                lineHeight: '1.5',
                color: '#ffffff'
              }}>
                Evaluating Topology Preservation in Dimensionality Reduction Methods for Metagenomic Data
              </h4>
              <p style={{ color: '#888', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                Tharushika Prasadinie, C. Jananga, P. Malshan, D. Herath, R. Vidanaarachchi, V. Mallawaarachchi
              </p>
              <p style={{ color: '#e91e63', fontSize: '0.85rem', fontWeight: '500', marginBottom: '1.5rem' }}>
                4th International Conference on Image Processing and Robotics (ICIPRob 2026) • Under Review
              </p>
              <a 
                href={`${process.env.PUBLIC_URL}/documents/research-paper.pdf`}
                download
                className="btn-outline"
                style={{ display: 'inline-flex' }}
              >
                Download Paper (PDF)
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" style={{
        padding: '6rem 2rem',
        background: '#1a1a1d'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and achievements
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.5rem'
          }}>
            {certifications.map((cert, idx) => (
              <div key={idx} className="info-card">
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#ffffff'
                }}>
                  {cert.title}
                </h4>
                <p style={{ color: '#e91e63', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '600' }}>
                  {cert.issuer}
                </p>
                <p style={{ color: '#888', fontSize: '0.85rem' }}>
                  Issued: {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: '#202023'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Get In Touch
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#888',
            marginBottom: '3.5rem',
            lineHeight: '1.7',
            textAlign: 'center',
            maxWidth: '650px',
            margin: '0 auto 3.5rem'
          }}>
            I'm currently looking for new opportunities and collaborations. Feel free to reach out if you'd like to connect.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            <div className="info-card" style={{ textAlign: 'center' }}>
              <Mail size={28} color="#e91e63" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '600', color: '#ffffff' }}>Email</h4>
              <a href="mailto:e20300@eng.pdn.ac.lk" style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.9rem',
                wordBreak: 'break-all'
              }}>
                e20300@eng.pdn.ac.lk
              </a>
            </div>

            <div className="info-card" style={{ textAlign: 'center' }}>
              <Phone size={28} color="#e91e63" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '600', color: '#ffffff' }}>Phone</h4>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>+94 703 703 524</p>
            </div>

            <div className="info-card" style={{ textAlign: 'center' }}>
              <MapPin size={28} color="#e91e63" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '600', color: '#ffffff' }}>Location</h4>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Peradeniya, Sri Lanka</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="mailto:e20300@eng.pdn.ac.lk" className="btn-primary">
              Send Message
              <Mail size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#1a1a1d',
        textAlign: 'center'
      }}>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          © 2026 Tharushika Prasadinie. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;