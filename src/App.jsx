import React, { useEffect, useRef } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaExternalLinkAlt,
  FaLaptopCode,
  FaDatabase,
  FaExchangeAlt,
  FaBrain 
} from 'react-icons/fa';

function App() {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
      observer.current.observe(el);
    });

    return () => observer.current?.disconnect();
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-lg z-50 border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">Jana K</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-200 hover:text-cyan-400 transition duration-300 text-lg">About</a>
            <a href="#skills" className="text-gray-200 hover:text-cyan-400 transition duration-300 text-lg">Skills</a>
            <a href="#projects" className="text-gray-200 hover:text-cyan-400 transition duration-300 text-lg">Projects</a>
            <a href="#education" className="text-gray-200 hover:text-cyan-400 transition duration-300 text-lg">Education</a>
            <a href="#contact" className="text-gray-200 hover:text-cyan-400 transition duration-300 text-lg">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Janasmarty" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jana-kandha/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="#contact" className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-full text-black font-semibold text-base transition transform hover:scale-105 shadow-md">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-b from-gray-900 to-gray-950 pt-28 pb-20">
        <div className="animate-on-scroll">
          <h1 className="text-cyan-400 text-2xl md:text-4xl font-light mb-4 tracking-wide">Hello, I'm</h1>
        </div>
        <div className="animate-on-scroll delay-200">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4">Jana K</h2>
        </div>
        <div className="animate-on-scroll delay-400">
          <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8">Software Developer</h3>
        </div>
        <div className="animate-on-scroll delay-600">
          <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Passionate developer with experience in building scalable applications using modern technologies. 
            Creating robust solutions and crafting exceptional user experiences.
          </p>
        </div>
        <div className="animate-on-scroll delay-800 flex flex-col md:flex-row gap-6">
          <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-full text-black text-lg font-bold transition transform hover:scale-110 shadow-xl shadow-cyan-500/50">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/20 rounded-full text-cyan-400 text-lg font-bold transition transform hover:scale-110">
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-8 bg-gray-900 pt-20 pb-20">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16">About Me</h2>
          </div>

          <div className="animate-on-scroll delay-200">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-16 max-w-3xl mx-auto">
              I'm a passionate software developer with a strong foundation in building scalable applications. My journey has equipped me with hands-on experience in both frontend and backend technologies. Proficient in building RESTful APIs, managing databases, and debugging under real-world pressure, I'm eager to contribute in fast-paced environments and continuously expand my technical expertise.
            </p>
          </div>

          <div className="animate-on-scroll delay-400 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              { icon: <FaLaptopCode className="w-24 h-24 text-cyan-400" />, title: "Full Stack Developer", desc: "End-to-end web solutions" },
              { icon: <FaDatabase className="w-24 h-24 text-cyan-400" />, title: "Database Fundamentals", desc: "Hands-on experience with SQL & NoSQL databases" },
              { icon: <FaExchangeAlt className="w-24 h-24 text-cyan-400" />, title: "API Development", desc: "Familiar with RESTful API design and implementation" },
              { icon: <FaBrain className="w-24 h-24 text-cyan-400" />, title: "Problem Solver", desc: "Analytical thinking & debugging" }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/40"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 p-px animate-pulse-glow">
                  <div className="h-full w-full rounded-3xl bg-gray-800/90 backdrop-blur-md" />
                </div>

                <div className="relative bg-transparent rounded-3xl p-10 text-center h-full flex flex-col justify-center">
                  <div className="mb-8 flex justify-center transform transition-transform duration-500 group-hover:scale-110">
                    {card.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300">
                    {card.title}
                  </h4>
                  <p className="text-gray-400 text-base transition-colors duration-300 group-hover:text-gray-200">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-8 bg-gray-950 pt-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Languages & Core", items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"] },
              { title: "Frameworks", items: ["React JS", "Node JS", "Express Js", "Tailwind CSS", "Bootstrap"] },
              { title: "Databases & Tools", items: ["MySQL", "PostgreSQL", "MongoDB", "Postman"] }
            ].map((cat, i) => (
              <div 
                key={i}
                className="group relative rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/40"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 p-px animate-pulse-glow">
                  <div className="h-full w-full rounded-2xl bg-gray-900/80 backdrop-blur-md" />
                </div>
                <div className="relative bg-transparent rounded-2xl p-8 h-full">
                  <h4 className="text-xl md:text-2xl font-bold text-cyan-300 mb-6 transition-colors duration-300 group-hover:text-cyan-200">
                    {cat.title}
                  </h4>
                  <ul className="space-y-3 text-base md:text-lg text-gray-300">
                    {cat.items.map((item, j) => (
                      <li 
                        key={j} 
                        className="flex items-center opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2"
                      >
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 animate-pulse"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Images with Neon Border Glow */}
<section id="projects" className="min-h-screen flex flex-col justify-center px-8 bg-gray-900 pt-20 pb-20">
  <div className="max-w-6xl mx-auto">
    <div className="animate-on-scroll text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">Featured Projects</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Project 1 */}
      <div className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-cyan-500/50">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 p-px animate-pulse-glow">
          <div className="h-full w-full rounded-3xl bg-gray-800/90 backdrop-blur-md" />
        </div>
        <div className="relative bg-transparent rounded-3xl overflow-hidden h-full flex flex-col">
          <a href="https://tpgit-hostels.vercel.app/" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
            {/* Neon Border Around Image */}
            <div className="relative m-4 rounded-2xl overflow-hidden ring-1 ring-cyan-500/50 shadow-lg shadow-cyan-500/20 transition-all duration-500 group-hover:ring-2 group-hover:ring-cyan-400 group-hover:shadow-xl group-hover:shadow-cyan-500/40">
              <img 
                src="https://i.ibb.co/k2XjZ4TL/hostel.png" 
                alt="Hostel Mess Bill Management" 
                className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              {/* Optional overlay glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </a>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300">
              Hostel Mess Bill Management
            </h3>
            <p className="text-gray-300 mb-6 text-base flex-grow">
              Full-stack system managing billing for 7,000+ students across 6+ modules with automated calculations.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["React JS", "Node.js", "Express JS", "Tailwind", "Supabase"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-cyan-900/40 border border-cyan-800 rounded-full text-cyan-300 text-sm font-medium transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-800/60">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-6 mt-auto">
              <a href="https://tpgit-hostels.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-300 hover:text-cyan-100 font-medium transition-all duration-300 group-hover:translate-x-2">
                Live Demo <FaExternalLinkAlt className="ml-2" size={16} />
              </a>
              <a href="https://github.com/Janasmarty/Hostel-Management-Application" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white font-medium transition-all duration-300 group-hover:translate-x-2">
                <FaGithub className="mr-2" size={20} /> Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-cyan-500/50">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 p-px animate-pulse-glow">
          <div className="h-full w-full rounded-3xl bg-gray-800/90 backdrop-blur-md" />
        </div>
        <div className="relative bg-transparent rounded-3xl overflow-hidden h-full flex flex-col">
          <a href="https://janaupskill.vercel.app/" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
            <div className="relative m-4 rounded-2xl overflow-hidden ring-1 ring-cyan-500/50 shadow-lg shadow-cyan-500/20 transition-all duration-500 group-hover:ring-2 group-hover:ring-cyan-400 group-hover:shadow-xl group-hover:shadow-cyan-500/40">
              <img 
                src="https://i.ibb.co/Q70tyx93/upskill.png" 
                alt="Upskill Learning Platform" 
                className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </a>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300">
              Upskill Learning Platform
            </h3>
            <p className="text-gray-300 mb-6 text-base flex-grow">
              Responsive educational platform with modern UI, interactive components, and smooth user flow.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["React JS", "Tailwind CSS", "JavaScript", "Vite"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-cyan-900/40 border border-cyan-800 rounded-full text-cyan-300 text-sm font-medium transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-800/60">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-6 mt-auto">
              <a href="https://janaupskill.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-300 hover:text-cyan-100 font-medium transition-all duration-300 group-hover:translate-x-2">
                Live Demo <FaExternalLinkAlt className="ml-2" size={16} />
              </a>
              <a href="https://github.com/Janasmarty/upskill" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white font-medium transition-all duration-300 group-hover:translate-x-2">
                <FaGithub className="mr-2" size={20} /> Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-cyan-500/50">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 p-px animate-pulse-glow">
          <div className="h-full w-full rounded-3xl bg-gray-800/90 backdrop-blur-md" />
        </div>
        <div className="relative bg-transparent rounded-3xl overflow-hidden h-full flex flex-col">
          <a href="#" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
            <div className="relative m-4 rounded-2xl overflow-hidden ring-1 ring-cyan-500/50 shadow-lg shadow-cyan-500/20 transition-all duration-500 group-hover:ring-2 group-hover:ring-cyan-400 group-hover:shadow-xl group-hover:shadow-cyan-500/40">
              <img 
                src="https://i.ibb.co/Q70tyx93/upskill.png" 
                alt="AI Crop Disease Detection" 
                className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </a>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300">
              AI Crop Disease Detection
            </h3>
            <p className="text-gray-300 mb-6 text-base flex-grow">
              CNN-based web app achieving 98% accuracy in identifying crop diseases from leaf images.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Python", "TensorFlow", "PyTorch", "Streamlit", "OpenCV"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-cyan-900/40 border border-cyan-800 rounded-full text-cyan-300 text-sm font-medium transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-800/60">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-6 mt-auto">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyan-300 hover:text-cyan-100 font-medium transition-all duration-300 group-hover:translate-x-2">
                Live Demo <FaExternalLinkAlt className="ml-2" size={16} />
              </a>
              <a href="https://github.com/Janasmarty/Hostel-Management-Application" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white font-medium transition-all duration-300 group-hover:translate-x-2">
                <FaGithub className="mr-2" size={20} /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex flex-col justify-center px-8 bg-gray-950 pt-20 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">Education & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="group relative rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 p-px animate-pulse-glow">
                <div className="h-full w-full rounded-2xl bg-gray-900/80 backdrop-blur-md" />
              </div>
              <div className="relative bg-transparent rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-cyan-300 mb-8">Education</h3>
                <div className="space-y-8 text-gray-300">
                  <div>
                    <p className="text-cyan-400 font-semibold">2021 – 2025</p>
                    <h4 className="text-xl font-bold text-white mt-2">Bachelor's Degree, Electronics and Communication</h4>
                    <p>Thanthai Periyar Government Institute of Technology • CGPA: 7.2</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold">2020 – 2021</p>
                    <h4 className="text-xl font-bold text-white mt-2">12th Grade, Biology Stream</h4>
                    <p>Higher Secondary School • Percentage: 87%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 p-px animate-pulse-glow">
                <div className="h-full w-full rounded-2xl bg-gray-900/80 backdrop-blur-md" />
              </div>
              <div className="relative bg-transparent rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-cyan-300 mb-8">Achievements</h3>
                <div className="space-y-8 text-gray-300">
                  <div>
                    <p className="text-cyan-400 font-semibold">2024</p>
                    <h4 className="text-xl font-bold text-white mt-2">Hackathon Runner</h4>
                    <p>Second place for building a website for our college in Inter-College Hackathon(TPGIT)</p>
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold">2023</p>
                    <h4 className="text-xl font-bold text-white mt-2">Code Strom</h4>
                    <p>Organizer for Code Storm(Coding Event) for symposium at Tpgit </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section - Refined with Proper Mailto Link */}
<section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden"
  style={{
    background: 'radial-gradient(circle at center, #0f172a 0%, #000000 100%)',
  }}
>
  {/* Subtle glowing background orbs */}
  <div className="absolute inset-0 opacity-25 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-600 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  <div className="relative z-10 w-full max-w-5xl text-center animate-on-scroll">
    {/* Improved futuristic neon crystal icon */}
    <div className="mb-10 flex justify-center">
      <img 
        src="https://thumbs.dreamstime.com/b/geometric-structure-neon-polyhedron-d-form-green-purple-glow-interconnected-lines-network-pattern-futuristic-geometry-glowing-390381938.jpg" 
        alt="Futuristic Neon Polyhedron"
        className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-2xl animate-pulse"
      />
    </div>

    <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
      Let's Connect
    </h2>
    <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed px-4">
      I'm always open to discussing new opportunities, exciting projects, or collaborations.<br className="hidden md:block" />
      Feel free to reach out — let's build something amazing together!
    </p>

    {/* Contact Cards - Thin 1px neon border */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
      {/* Email Card - Clickable mailto link */}
      <div className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/50">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 p-px animate-pulse-glow">
          <div className="h-full w-full rounded-3xl bg-gray-900/90 backdrop-blur-md" />
        </div>
        <div className="relative bg-transparent rounded-3xl p-8 flex items-center gap-5">
          <FaEnvelope className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
          <div className="text-left">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</p>
            <a 
              href="mailto:janak2003b3@gmail.com" 
              className="text-lg md:text-xl text-white hover:text-cyan-300 transition-colors font-medium"
            >
              janak2003b3@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Phone Card */}
      <div className="group relative rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/50">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 p-px animate-pulse-glow">
          <div className="h-full w-full rounded-3xl bg-gray-900/90 backdrop-blur-md" />
        </div>
        <div className="relative bg-transparent rounded-3xl p-8 flex items-center gap-5">
          <FaPhone className="w-10 h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
          <div className="text-left">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Phone</p>
            <a href="tel:9360032471" className="text-lg md:text-xl text-white hover:text-cyan-300 transition-colors font-medium">
              +91 93600 32471
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Social Links - Centered with good spacing */}
    <div className="flex justify-center gap-16">
      <a 
        href="https://github.com/Janasmarty" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-500/60"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 p-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow">
          <div className="h-full w-full rounded-2xl bg-gray-900/40" />
        </div>
        <FaGithub className="relative z-10 w-16 h-16 text-gray-400 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-110" />
      </a>

      <a 
        href="https://www.linkedin.com/in/jana-kandha/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative p-6 rounded-2xl bg-gray-900/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/60"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 p-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow">
          <div className="h-full w-full rounded-2xl bg-gray-900/40" />
        </div>
        <FaLinkedin className="relative z-10 w-16 h-16 text-gray-400 group-hover:text-purple-400 transition-all duration-500 group-hover:scale-110" />
      </a>
    </div>
  </div>
</section>

      {/* Footer - Dark background with cyan accent */}
      <footer className="py-8 bg-gray-950/95 border-t border-cyan-900/30 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Jana K • Built with <span className="text-cyan-400 font-semibold">React</span> & <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
        </p>
      </footer>
    </>
  );
}

export default App;