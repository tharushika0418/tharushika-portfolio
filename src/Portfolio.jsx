import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, Code2, Database, Globe, Server } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'blogs', 'contact'];
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

  // Auto-rotate project images every 2 seconds
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate featured images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedIndex(prev => (prev + 1) % featuredImages.length);
    }, 3000);

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
    "/images/vescueye-1.jpeg",
        "/images/vescueye-2.jpeg", 
        "/images/vescueye-3.jpeg",
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg"
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
        "/images/vescueye-1.jpeg",
        "/images/vescueye-2.jpeg", 
        "/images/vescueye-3.jpeg",
        "/images/vescueye-4.jpeg",
        "/images/vescueye-5.jpeg",
        "/images/vescueye-6.jpeg",
        "/images/vescueye-7.jpeg",
        "/images/vescueye-8.jpeg",
        "/images/vescueye-9.jpeg",
        "/images/vescueye-10.jpeg",
        "/images/vescueye-11.jpeg"
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
        "/images/fyp-1.jpeg",
        "/images/fyp-2.jpeg", 
        "/images/fyp-3.jpeg",
        "/images/fyp-5.jpeg",
        "/images/fyp-4.jpeg",
        "/images/fyp-6.jpeg",
      ]
    },
    {
      title: "TourMate",
      subtitle: "Smart Travel Companion",
      description: "Full-stack travel planning application with route optimization, real-time data integration, and downloadable PDF itineraries.",
      tech: ["React", "Spring Boot", "MySQL"],
      category: "Web Development",
      year: "2024",
      images: [
        "/images/tourmate-1.jpg",
        "/images/tourmate-2.jpg",
        "/images/tourmate-3.jpg"
      ]
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

  const blogs = [
    {
      title: "What does it take to become a web developer?",
      excerpt: "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet...",
      author: "Tharushika",
      date: "10 Oct 2023",
      readTime: "3 Min",
      category: "Web Development"
    },
    {
      title: "Building Scalable IoT Applications with AWS",
      excerpt: "Learn how to leverage AWS IoT Core and Lambda functions to create real-time monitoring systems that can handle thousands of devices...",
      author: "Tharushika",
      date: "15 Nov 2024",
      readTime: "5 Min",
      category: "Cloud & IoT"
    },
    {
      title: "Graph Neural Networks in Bioinformatics",
      excerpt: "Exploring the application of Graph Neural Networks for metagenomics data analysis and how they outperform traditional clustering methods...",
      author: "Tharushika",
      date: "20 Jan 2025",
      readTime: "7 Min",
      category: "Machine Learning"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f1419',
      color: '#e8e8e8',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      position: 'relative'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .project-card {
          background: #1a1f2e;
          border: 1px solid #252b3b;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: #06b6d4;
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.2);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          border: 1px solid #252b3b;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.5s ease-in-out;
        }

        .featured-image-container {
          position: relative;
          width: 60%;
          height: 550px;
          margin: 0 auto; /* This centers the container */
          overflow: hidden;
          border-radius: 12px;
          border: 2px solid #252b3b;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Change to 'contain' to show full image without cropping */
          transition: opacity 0.5s ease-in-out;
        }

        .image-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }

        .indicator-dot.active {
          background: #06b6d4;
          width: 24px;
          border-radius: 4px;
        }

        .blog-card {
          background: #1a1f2e;
          border: 1px solid #252b3b;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .blog-card:hover {
          border-color: #06b6d4;
          transform: translateY(-3px);
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link.active {
          color: #06b6d4;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #06b6d4;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .btn-primary {
          background: #06b6d4;
          color: #0f1419;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          background: #0891b2;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #06b6d4;
          padding: 0.75rem 1.5rem;
          border: 2px solid #06b6d4;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-outline:hover {
          background: #06b6d4;
          color: #0f1419;
        }

        .skill-badge {
          width: 70px;
          height: 70px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .skill-badge:hover {
          transform: translateY(-3px);
        }

        .profile-image {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .profile-image {
            max-width: 300px;
            margin: 2rem auto;
            display: block;
          }
          .featured-image-container {
            width: 90%; /* Adjust mobile width here */
            height: 300px; /* Adjust mobile height here */
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(15, 20, 25, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #252b3b' : 'none',
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
            fontSize: '1.2rem',
            fontWeight: '700',
            fontFamily: '"JetBrains Mono", monospace',
            color: '#06b6d4'
          }}>
            &lt;/&gt; Tharushika
          </div>
          
          {/* Desktop Nav */}
          <div style={{ 
            display: 'flex', 
            gap: '2.5rem'
          }} className="desktop-nav">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Projects', id: 'projects' },
              { name: 'Blogs', id: 'blogs' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id ? '#06b6d4' : '#e8e8e8',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  padding: '0.5rem 0'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#06b6d4',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#1a1f2e',
            padding: '1rem 0',
            borderTop: '1px solid #252b3b'
          }}>
            {['Home', 'About', 'Skills', 'Projects', 'Blogs', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem 2rem',
                  background: 'none',
                  border: 'none',
                  color: '#e8e8e8',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1rem',
                  borderBottom: '1px solid #252b3b'
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
        background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 968 ? '1fr 1fr' : '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Left Side - Text Content */}
            <div>
              <p style={{
                fontSize: '1.1rem',
                color: '#06b6d4',
                marginBottom: '1rem',
                fontFamily: '"JetBrains Mono", monospace'
              }}>
                Hello!
              </p>
              <h1 style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.2',
                marginBottom: '1.5rem'
              }}>
                I'm <span style={{ color: '#06b6d4' }}>Tharushika</span>,<br />
                Full-Stack Developer
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                color: '#a0a0a0',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                Computer Engineering student specializing in <span style={{ color: '#06b6d4', fontWeight: '600' }}>Software Engineering</span>, DevOps, Cloud Computing, and Machine Learning. Building innovative solutions to solve real-world problems.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  LET'S TALK 👋
                </button>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://github.com/tharushika0418" target="_blank" rel="noopener noreferrer" style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '8px',
                  border: '1px solid #252b3b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#06b6d4';
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#252b3b';
                  e.currentTarget.style.background = 'transparent';
                }}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/tharushika-prasadinie" target="_blank" rel="noopener noreferrer" style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '8px',
                  border: '1px solid #252b3b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#06b6d4';
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#252b3b';
                  e.currentTarget.style.background = 'transparent';
                }}>
                  <Linkedin size={20} />
                </a>
                <a href="mailto:e20300@eng.pdn.ac.lk" style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '8px',
                  border: '1px solid #252b3b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06b6d4',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#06b6d4';
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#252b3b';
                  e.currentTarget.style.background = 'transparent';
                }}>
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img 
                src="/images/profile.jpeg"
                alt="Tharushika Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        background: '#0f1419'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#06b6d4'
          }}>
            About Me
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#06b6d4',
            marginBottom: '3rem'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 968 ? 'repeat(2, 1fr)' : '1fr',
            gap: '3rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#e8e8e8' }}>
                Final-year Computer Engineering Student
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#a0a0a0', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Specializing in Software Engineering, DevOps, Cloud Computing, Machine Learning, and Networking. Experienced in full-stack development, database management, and software deployment.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#a0a0a0', lineHeight: '1.8' }}>
                Passionate about building scalable applications and optimizing processes. Skilled in designing innovative solutions to enhance efficiency and user experience.
              </p>
            </div>

            <div style={{
              background: '#1a1f2e',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #252b3b'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: '#06b6d4', marginBottom: '0.5rem' }}>Education</h4>
                <p style={{ color: '#e8e8e8', fontSize: '1.05rem', fontWeight: '600' }}>BSc Eng Hons - Computer Engineering</p>
                <p style={{ color: '#a0a0a0' }}>University of Peradeniya</p>
                <p style={{ color: '#06b6d4', fontFamily: '"JetBrains Mono", monospace', marginTop: '0.5rem' }}>GPA: 3.56/4.0</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: '#06b6d4', marginBottom: '0.5rem' }}>Experience</h4>
                <p style={{ color: '#e8e8e8', fontSize: '1.05rem', fontWeight: '600' }}>Undergraduate Teaching Assistant</p>
                <p style={{ color: '#a0a0a0' }}>Department of Computer Engineering</p>
                <p style={{ color: '#a0a0a0', marginTop: '0.5rem' }}>Feb 2023 - Aug 2025</p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.2rem', color: '#06b6d4', marginBottom: '0.5rem' }}>Achievement</h4>
                <p style={{ color: '#e8e8e8', fontSize: '1.05rem', fontWeight: '600' }}>Second Runner-up</p>
                <p style={{ color: '#a0a0a0' }}>IEEE EMBS BioFusion AI/ML Medical Hackathon 2026</p>
              </div>
            </div>
          </div>

          {/* Featured Section */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#e8e8e8'
            }}>
              Featured
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
              
              {/* Image Indicators */}
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
        background: 'linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#06b6d4'
          }}>
            Skills
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#06b6d4',
            marginBottom: '2rem'
          }} />
          <p style={{ fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '3rem' }}>
            Focusing on learning and adapting real world skills & exploring new technologies
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {[
              { name: 'HTML', color: '#e34c26', bg: 'rgba(227, 76, 38, 0.1)' },
              { name: 'CSS', color: '#264de4', bg: 'rgba(38, 77, 228, 0.1)' },
              { name: 'JS', color: '#f0db4f', bg: 'rgba(240, 219, 79, 0.1)' },
              { name: 'React', color: '#61dafb', bg: 'rgba(97, 218, 251, 0.1)' },
              { name: 'Node', color: '#68a063', bg: 'rgba(104, 160, 99, 0.1)' },
              { name: 'Python', color: '#3776ab', bg: 'rgba(55, 118, 171, 0.1)' },
              { name: 'Java', color: '#f89820', bg: 'rgba(248, 152, 32, 0.1)' },
              { name: 'SQL', color: '#00758f', bg: 'rgba(0, 117, 143, 0.1)' }
            ].map((skill, idx) => (
              <div key={idx} className="skill-badge" style={{
                background: skill.bg,
                border: `2px solid ${skill.color}`,
                color: skill.color
              }}>
                {skill.name}
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { title: 'Frontend Development', icon: <Globe size={32} />, skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
              { title: 'Backend Development', icon: <Server size={32} />, skills: ['Node.js', 'Express', 'Spring Boot', 'Flask', 'REST APIs'] },
              { title: 'Database Management', icon: <Database size={32} />, skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
              { title: 'Cloud & DevOps', icon: <Code2 size={32} />, skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux'] }
            ].map((category, idx) => (
              <div key={idx} style={{
                background: '#1a1f2e',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #252b3b',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#06b6d4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#252b3b';
              }}>
                <div style={{ color: '#06b6d4', marginBottom: '1rem' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#e8e8e8' }}>
                  {category.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill, i) => (
                    <span key={i} style={{
                      padding: '0.4rem 0.9rem',
                      background: '#0f1419',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: '#a0a0a0',
                      border: '1px solid #252b3b'
                    }}>
                      {skill}
                    </span>
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
        background: '#0f1419'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#06b6d4'
          }}>
            Projects
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#06b6d4',
            marginBottom: '3rem'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, idx) => {
              const currentIndex = currentImageIndexes[idx] || 0;
              const hasMultipleImages = project.images && project.images.length > 1;
              
              return (
                <div key={idx} className="project-card" style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  position: 'relative'
                }}>
                  {/* Auto-rotating Image Carousel */}
                  <div className="project-image-container">
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
                    
                    {/* Image Indicators */}
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
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem'
                  }}>
                    <ExternalLink size={20} color="#06b6d4" />
                  </div>
                  
                  <div style={{
                    display: 'inline-block',
                    padding: '0.4rem 0.8rem',
                    background: 'rgba(6, 182, 212, 0.1)',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    color: '#06b6d4',
                    marginBottom: '1rem',
                    fontFamily: '"JetBrains Mono", monospace',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                  }}>
                    {project.category}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: '#e8e8e8'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    color: '#06b6d4',
                    marginBottom: '1rem',
                    fontWeight: '500'
                  }}>
                    {project.subtitle}
                  </p>
                  
                  <p style={{
                    color: '#a0a0a0',
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
                    gap: '1rem'
                  }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tech.map((tech, i) => (
                        <span key={i} style={{
                          padding: '0.3rem 0.7rem',
                          background: '#0f1419',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          color: '#a0a0a0',
                          border: '1px solid #252b3b'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span style={{
                      color: '#606060',
                      fontSize: '0.8rem',
                      fontFamily: '"JetBrains Mono", monospace'
                    }}>
                      {project.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Publication */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#e8e8e8'
            }}>
              Publications
            </h3>
            <div style={{
              background: '#1a1f2e',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #252b3b'
            }}>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '1rem',
                lineHeight: '1.5',
                color: '#e8e8e8'
              }}>
                Evaluating Topology Preservation in Dimensionality Reduction Methods for Metagenomic Data
              </h4>
              <p style={{ color: '#a0a0a0', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                Tharushika Prasadinie, C. Jananga, P. Malshan, D. Herath, R. Vidanaarachchi, V. Mallawaarachchi
              </p>
              <p style={{ color: '#06b6d4', fontSize: '0.85rem', fontFamily: '"JetBrains Mono", monospace' }}>
                4th International Conference on Image Processing and Robotics (ICIPRob 2026) • Under Review
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#06b6d4'
          }}>
            Blogs
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#06b6d4',
            marginBottom: '2rem'
          }} />
          <p style={{ fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '3rem' }}>
            My thoughts on technology and business
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {blogs.map((blog, idx) => (
              <div key={idx} className="blog-card" style={{
                padding: '2rem',
                borderRadius: '12px'
              }}>
                <div style={{
                  width: '100%',
                  height: '180px',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05))',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #252b3b'
                }}>
                  <Code2 size={50} color="#06b6d4" opacity={0.3} />
                </div>
                
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#e8e8e8',
                  lineHeight: '1.4'
                }}>
                  {blog.title}
                </h3>
                
                <p style={{
                  color: '#a0a0a0',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem'
                }}>
                  {blog.excerpt}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #252b3b',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  <div>
                    <p style={{ color: '#606060', fontSize: '0.8rem' }}>
                      {blog.category}
                    </p>
                    <p style={{ color: '#606060', fontSize: '0.8rem', fontFamily: '"JetBrains Mono", monospace' }}>
                      {blog.date} • {blog.readTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn-outline">
              View All Blogs
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: '#0f1419'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#06b6d4'
          }}>
            Get In Touch
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#06b6d4',
            marginBottom: '2rem'
          }} />
          <p style={{
            fontSize: '1.1rem',
            color: '#a0a0a0',
            marginBottom: '3rem',
            lineHeight: '1.7'
          }}>
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: '#1a1f2e',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #252b3b',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#06b6d4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#252b3b';
            }}>
              <Mail size={32} color="#06b6d4" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600', color: '#e8e8e8' }}>Email</h4>
              <a href="mailto:e20300@eng.pdn.ac.lk" style={{
                color: '#06b6d4',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontFamily: '"JetBrains Mono", monospace',
                wordBreak: 'break-all'
              }}>
                e20300@eng.pdn.ac.lk
              </a>
            </div>

            <div style={{
              background: '#1a1f2e',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #252b3b',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#06b6d4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#252b3b';
            }}>
              <Phone size={32} color="#06b6d4" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600', color: '#e8e8e8' }}>Phone</h4>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem', fontFamily: '"JetBrains Mono", monospace' }}>+94 703 703 524</p>
            </div>

            <div style={{
              background: '#1a1f2e',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #252b3b',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#06b6d4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#252b3b';
            }}>
              <MapPin size={32} color="#06b6d4" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600', color: '#e8e8e8' }}>Location</h4>
              <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>Peradeniya, Sri Lanka</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="mailto:e20300@eng.pdn.ac.lk" className="btn-primary" style={{
              fontSize: '1rem',
              padding: '1rem 2rem'
            }}>
              Send Message ✉️
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        borderTop: '1px solid #252b3b',
        background: '#1a1f2e',
        textAlign: 'center'
      }}>
        <p style={{ color: '#a0a0a0', fontSize: '0.9rem', fontFamily: '"JetBrains Mono", monospace' }}>
          © 2026 Tharushika Prasadinie. Designed & Built with React
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;