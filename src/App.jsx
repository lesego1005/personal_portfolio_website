import React, { useState, useEffect } from 'react';
import { BarChart3, Brain, Code, Database, Mail, Linkedin, Github, ExternalLink, ArrowRight, Moon, Sun, Download, Menu, X } from 'lucide-react';

export default function DataSciencePortfolio() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize dark mode from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: "NYC Airbnb Data Analysis",
      description: "Analysed NYC Airbnb listings with Python to uncover the key factors driving rental prices and neighbourhood trends.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      metrics: ["49K Listings", "5 Boroughs Analysed", "$105 Median Price"],
      image: "nyc.png",
      link: "https://github.com/lesego1005/NYC-Airbnb-Analysis"
    },
    {
      id: 2,
      title: "Music Store Analytics",
      description: "Pure SQL analysis of a digital music store: KPIs, top markets, genre demand, artist revenue, time trends, and customer LTV.",
      technologies: ["SQL", "SQLite", "Jupyter Notebook", "Jupysql"],
      metrics: ["11 Tables Queried", "6 Complex Joins", "20+ Business KPIs Extracted"],
      image: "music analysis.png",
      link: "https://github.com/lesego1005/Music-store-analytics-SQL-project"
    },
    {
      id: 3,
      title: "Northwind Traders Analytics",
      description: "SQL‑only analysis of the Northwind trading company dataset: KPIs, revenue trends, product and supplier performance, employee sales, and customer segmentation.",
      technologies: ["SQL", "SQLite", "Jupyter Notebook", "Jupysql"],
      metrics: ["12 Tables Queried", "7 Complex Joins", "25+ Business KPIs Extracted"],
      image: "SQL3.png",
      link: "https://github.com/lesego1005/northwind_traders_analytics"
    },
    {
      id: 4,
      title: "Data Pipeline Builder – SQL & ETL",
      description: "Complete data engineering workflow featuring Azure SQL Database, Python ETL pipeline, cloud storage integration, and interactive Streamlit dashboard for data visualisation.",
      technologies: ["Azure SQL", "Python", "Pandas", "Azure Blob Storage", "Streamlit"],
      metrics: ["Cloud ETL Pipeline", "Azure Integration", "Team Collaboration"],
      image: "pipeline.png",
      link: "https://github.com/PhalePallo/data-pipeline-builder"
    },
    {
      id: 5,
      title: "AI Coding Assistant",
      description: "Built an intelligent coding assistant web application that helps developers write, debug, and optimize code using AI-powered suggestions and real-time assistance.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      metrics: ["Real-time AI Responses", "Multi-language Support", "Clean UI/UX"],
      image: "Chatbot project.png",
      link: "https://github.com/lesego1005/ChatBot_Project"
    }
  ];

  const skills = {
    "Programming": ["Python", "SQL", "JavaScript"],
    "ML/AI": ["Scikit-learn", "Gemini"],
    "Visualisation": ["Power BI", "Matplotlib", "Seaborn"],
    "Big Data": ["AWS", "Azure"],
    "Statistics": ["Hypothesis Testing", "Regression", "Classification"]
  };

  const bgColor = isDark ? 'bg-gray-900' : 'bg-white';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
  const textTertiary = isDark ? 'text-gray-500' : 'text-gray-500';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';
  const navBg = isDark ? 'bg-gray-900/95' : 'bg-white/95';
  const btnPrimary = isDark ? 'bg-gray-100 text-gray-900 hover:bg-white' : 'bg-gray-900 text-white hover:bg-gray-800';
  const btnSecondary = isDark ? 'border-gray-600 text-gray-100 hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:bg-gray-50';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-gray-50';
  const profileBorder = isDark ? 'border-gray-700' : 'border-gray-200';
  const mobileMenuBg = isDark ? 'bg-gray-900' : 'bg-white';

  const NavLink = ({ href, children }) => {
    const isActive = activeSection === href.substring(1);
    return (
      <a 
        href={href} 
        onClick={(e) => smoothScroll(e, href)} 
        className={`${isActive ? textColor : textSecondary} hover:${textColor} transition font-medium`}
      >
        {children}
      </a>
    );
  };

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${navBg} backdrop-blur-md z-50 border-b ${borderColor}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="#hero" 
            onClick={(e) => smoothScroll(e, '#hero')}
            className={`text-lg font-semibold ${textColor} cursor-pointer hover:opacity-70 transition`}
          >
            LR
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <div className="flex gap-8 text-sm">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${textSecondary} hover:${textColor} transition`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${textSecondary} hover:${textColor} transition`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${mobileMenuBg} border-t ${borderColor}`}>
            <div className="px-6 py-4 flex flex-col gap-4 text-sm">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl text-center md:text-left">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center md:justify-start">
            <img
              src="Portrait.jpg"
              alt="Lesego Radebe"
              className={`w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 ${profileBorder} object-[center_25%] shadow-lg`}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-light mb-4 md:mb-6 ${textColor} tracking-tight`}>
            Lesego Radebe
          </h1>
          <p className={`text-xl md:text-2xl ${textSecondary} mb-6 md:mb-8 font-light`}>
            Data Scientist & Analytics Professional
          </p>
          <p className={`text-base md:text-lg ${textTertiary} mb-8 md:mb-12 max-w-2xl leading-relaxed mx-auto md:mx-0`}>
            Transforming complex data into actionable insights through machine learning, 
            statistical analysis, and compelling data visualisation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center md:justify-start">
            <a 
              href="#contact" 
              onClick={(e) => smoothScroll(e, '#contact')}
              className={`${btnPrimary} px-6 py-3 text-sm font-medium transition flex items-center justify-center gap-2 rounded`}
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => smoothScroll(e, '#projects')}
              className={`border ${btnSecondary} px-6 py-3 text-sm font-medium transition rounded`}
            >
              View Projects
            </a>
            <a 
              href="/CV.pdf" 
              download
              className={`border ${btnSecondary} px-6 py-3 text-sm font-medium transition flex items-center justify-center gap-2 rounded`}
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <div className="flex gap-5 justify-center md:justify-start">
            <a 
              href="https://www.linkedin.com/in/lesego-radebe-a60b95204" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${textTertiary} hover:${textColor} transition`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/lesego1005" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${textTertiary} hover:${textColor} transition`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:rlesego6@gmail.com" 
              className={`${textTertiary} hover:${textColor} transition`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 md:py-24 px-6 border-t ${borderColor}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-sm uppercase tracking-wider ${textTertiary} mb-8`}>About</h2>
          <div className={`space-y-6 ${textSecondary} leading-relaxed`}>
            <p className="text-base md:text-lg">
              I'm a data scientist with a passion for uncovering insights hidden in complex datasets. 
              With expertise in machine learning, statistical modeling, and data visualisation, I help 
              organisations make data-driven decisions that drive real business impact.
            </p>
            <p className="text-base md:text-lg">
              My approach combines rigorous statistical methodology with creative problem-solving to 
              tackle challenges across various domains including predictive analytics, customer behavior, 
              and operational optimisation.
            </p>
          </div>
          <div className={`grid grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-16 pt-8 md:pt-12 border-t ${borderColor}`}>
            <div>
              <div className={`text-3xl md:text-4xl font-light ${textColor} mb-2`}>1+</div>
              <div className={`text-xs md:text-sm ${textTertiary} uppercase tracking-wider`}>Years Experience</div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-light ${textColor} mb-2`}>15+</div>
              <div className={`text-xs md:text-sm ${textTertiary} uppercase tracking-wider`}>Projects Completed</div>
            </div>
            <div>
              <div className={`text-3xl md:text-4xl font-light ${textColor} mb-2`}>10+</div>
              <div className={`text-xs md:text-sm ${textTertiary} uppercase tracking-wider`}>Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 md:py-24 px-6 border-t ${borderColor}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-sm uppercase tracking-wider ${textTertiary} mb-8 md:mb-12`}>Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer rounded-lg"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3EImage%3C/text%3E%3C/svg%3E';
                  }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900 via-gray-900/50' : 'from-gray-900 via-gray-900/40'} to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl md:text-2xl font-light mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Details shown on hover */}
                  <div className={`transform transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-300 flex-wrap">
                      {project.metrics.slice(0, 2).map((metric, idx) => (
                        <span key={idx}>• {metric}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-sm font-medium">
                      View on GitHub
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 md:py-24 px-6 border-t ${borderColor}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-sm uppercase tracking-wider ${textTertiary} mb-8 md:mb-12`}>Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`pb-8 border-b ${borderColor}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={textTertiary}>
                    {category === "Programming" && <Code size={20} />}
                    {category === "ML/AI" && <Brain size={20} />}
                    {category === "Visualisation" && <BarChart3 size={20} />}
                    {category === "Big Data" && <Database size={20} />}
                    {category === "Statistics" && <BarChart3 size={20} />}
                  </div>
                  <h3 className={`text-lg font-medium ${textColor}`}>{category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, idx) => (
                    <span key={idx} className={`text-sm ${textSecondary}`}>
                      {skill}{idx < items.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 md:py-24 px-6 border-t ${borderColor}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-sm uppercase tracking-wider ${textTertiary} mb-8 md:mb-12`}>Let's Connect</h2>
          <p className={`text-xl md:text-2xl font-light ${textColor} mb-8 md:mb-12 leading-relaxed`}>
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          <div className="space-y-4">
            <a href="mailto:rlesego6@gmail.com" className={`flex items-center gap-3 ${textSecondary} hover:${textColor} transition text-base md:text-lg`}>
              <Mail size={20} />
              rlesego6@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/lesego-radebe-a60b95204" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${textSecondary} hover:${textColor} transition text-base md:text-lg`}>
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
            <a 
              href="https://github.com/lesego1005" 
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${textSecondary} hover:${textColor} transition text-base md:text-lg`}>
              <Github size={20} />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${borderColor} text-center text-sm ${textTertiary}`}>
        <p>© 2025 Lesego Radebe. All rights reserved.</p>
      </footer>
    </div>
  );
}