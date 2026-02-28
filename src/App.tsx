import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Award, Terminal, Database, Globe, Sun, Moon, User, Heart, Music, Book, Camera, Plane, Coffee, Github, Linkedin, Twitter, MessageSquare, Trophy, Star, CheckCircle } from 'lucide-react';
import { useTheme } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-gray-100'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-xl transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-slate-700 border border-cyan-400/40 text-cyan-300 hover:bg-slate-600 shadow-cyan-500/20'
            : 'bg-white border border-gray-400 text-gray-800 hover:bg-gray-50 shadow-gray-400/30'
        }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Animated Background */}
      <div className={`fixed inset-0 transition-opacity duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-60'
          : 'bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100 opacity-90'
      }`}>
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_50%)]'
        }`}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with Profile Photo */}
        <header className="relative overflow-hidden">
          <div className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-teal-500/15'
              : 'bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-teal-500/15'
          }`}></div>
          <div className="max-w-7xl mx-auto px-6 py-20 relative">
            <div className="text-center">
              {/* Profile Photo */}
              <div className="mb-8 flex justify-center">
                <div className={`relative group ${
                  theme === 'dark' ? '' : ''
                }`}>
                  <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 opacity-40 group-hover:opacity-60'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 opacity-30 group-hover:opacity-50'
                  }`}></div>
                  <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'border-cyan-400/50 shadow-xl shadow-cyan-500/30'
                      : 'border-gray-400 shadow-2xl shadow-gray-500/40'
                  }`}>
                    <img
                      src="/prabeen_pic.png"
                      alt="Prabeen Stha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 ${
                    theme === 'dark'
                      ? 'bg-green-400 border-slate-800'
                      : 'bg-green-500 border-white'
                  }`}></div>
                </div>
              </div>

              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 ${
                theme === 'dark'
                  ? 'bg-cyan-400/20 border border-cyan-400/40'
                  : 'bg-cyan-600/90 border border-cyan-700'
              }`}>
                <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-cyan-200' : 'text-white'
                }`}>Available for opportunities</span>
              </div>

              <h1 className={`text-6xl md:text-7xl font-bold mb-4 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-cyan-700 via-blue-700 to-teal-700 bg-clip-text text-transparent'
              }`}>
                Prabeen Kumar Subudhi
              </h1>
              <p className={`text-2xl md:text-3xl mb-3 font-light ${
                theme === 'dark' ? 'text-slate-200' : 'text-gray-800'
              }`}>Technical Lead</p>
              <p className={`text-xl mb-8 ${
                theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
              }`}>Java & Microservices Specialist</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                {[
                  { icon: Github, label: "GitHub" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Mail, label: "Email" }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-700/80 border border-cyan-400/30 text-cyan-300 hover:bg-slate-600 hover:border-cyan-400/60 hover:scale-110'
                        : 'bg-white border border-gray-400 text-gray-700 hover:bg-gray-100 hover:border-gray-600 hover:scale-110 shadow-lg'
                    }`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </button>
                ))}
              </div>

              <div className={`flex flex-wrap justify-center gap-6 ${
                theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
              }`}>
                <a href="mailto:prabeen.social@gmail.com" className={`flex items-center gap-2 transition-colors group ${
                  theme === 'dark' ? 'hover:text-cyan-300' : 'hover:text-cyan-700'
                }`}>
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span>prabeen.social@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>+91-9438067471</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-10">
                <div className={`rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 shadow-lg shadow-cyan-500/20'
                    : 'bg-gradient-to-br from-cyan-600 to-blue-600 border border-cyan-700 shadow-xl shadow-cyan-600/40'
                }`}>
                  <div className={`text-3xl font-bold ${
                    theme === 'dark' ? 'text-cyan-200' : 'text-white'
                  }`}>9+</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-slate-300' : 'text-cyan-50'
                  }`}>Years Experience</div>
                </div>
                <div className={`rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-blue-500/30 to-teal-500/30 border border-blue-400/40 shadow-lg shadow-blue-500/20'
                    : 'bg-gradient-to-br from-blue-600 to-teal-600 border border-blue-700 shadow-xl shadow-blue-600/40'
                }`}>
                  <div className={`text-3xl font-bold ${
                    theme === 'dark' ? 'text-blue-200' : 'text-white'
                  }`}>4</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-slate-300' : 'text-blue-50'
                  }`}>Major Projects</div>
                </div>
                <div className={`rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-teal-500/30 to-cyan-500/30 border border-teal-400/40 shadow-lg shadow-teal-500/20'
                    : 'bg-gradient-to-br from-teal-600 to-cyan-600 border border-teal-700 shadow-xl shadow-teal-600/40'
                }`}>
                  <div className={`text-3xl font-bold ${
                    theme === 'dark' ? 'text-teal-200' : 'text-white'
                  }`}>15+</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-slate-300' : 'text-teal-50'
                  }`}>Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className={`backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
            theme === 'dark'
              ? 'bg-slate-800/90 border border-cyan-400/30 shadow-xl shadow-cyan-500/10'
              : 'bg-white border border-gray-300 shadow-2xl shadow-gray-400/30'
          }`}>
            <div className={`absolute inset-0 ${
              theme === 'dark' ? 'bg-gradient-to-br from-cyan-500/10 to-transparent' : 'bg-gradient-to-br from-cyan-100/30 to-transparent'
            }`}></div>
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl ${
                  theme === 'dark' ? 'bg-cyan-400/20 shadow-lg shadow-cyan-500/30' : 'bg-cyan-600 shadow-lg shadow-cyan-600/40'
                }`}>
                  <Terminal className={theme === 'dark' ? 'text-cyan-300' : 'text-white'} size={28} />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold ${
                  theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                }`}>Professional Summary</h2>
              </div>

              <div className="space-y-4 leading-relaxed">
                <p className={`text-lg md:text-xl font-medium ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`}>
                  Results-driven Technical Lead with 9+ years of expertise in Java, Spring Boot, Microservices, and TypeScript.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Developing events and PX in Oracle Agile PLM tool using quality management",
                    "Engineering collaboration and management of governance rules & compliances",
                    "Developing new functionalities, both back-end and front-end",
                    "Investigating alternate configurations & implementing better solutions",
                    "Hands-on experience on Java, JDBC, JPA, Servlets, JSP, Spring Boot, REST API",
                    "Utilized frameworks such as Hibernate and Spring for persistence and application layers",
                    "Very specific skill set on data enhancement and management",
                    "Good team player with ability to work independently"
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 group">
                      <div className="mt-1.5">
                        <div className={`w-2 h-2 rounded-full group-hover:scale-150 transition-transform ${
                          theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-600'
                        }`}></div>
                      </div>
                      <span className={`transition-colors ${
                        theme === 'dark' ? 'text-slate-200 group-hover:text-slate-100' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-yellow-400/20 shadow-lg shadow-yellow-500/30' : 'bg-yellow-600 shadow-lg shadow-yellow-600/40'
            }`}>
              <Trophy className={theme === 'dark' ? 'text-yellow-300' : 'text-white'} size={28} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Certifications & Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Oracle Certified Professional",
                issuer: "Oracle",
                year: "2020",
                icon: Award,
                color: "yellow"
              },
              {
                title: "AWS Solutions Architect",
                issuer: "Amazon Web Services",
                year: "2021",
                icon: Star,
                color: "orange"
              },
              {
                title: "Spring Framework Certification",
                issuer: "VMware",
                year: "2019",
                icon: CheckCircle,
                color: "green"
              },
              {
                title: "Agile Scrum Master",
                issuer: "Scrum Alliance",
                year: "2022",
                icon: Trophy,
                color: "blue"
              },
              {
                title: "Best Performer Award",
                issuer: "IBM India",
                year: "2023",
                icon: Star,
                color: "cyan"
              },
              {
                title: "Innovation Excellence",
                issuer: "Tech Mahindra",
                year: "2025",
                icon: Award,
                color: "teal"
              }
            ].map((cert, index) => (
              <div key={index} className={`backdrop-blur-xl rounded-xl p-6 transition-all duration-300 hover:scale-105 group ${
                theme === 'dark'
                  ? 'bg-slate-800/90 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'
                  : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl hover:shadow-2xl shadow-gray-400/30'
              }`}>
                <div className="flex items-start gap-4 mb-3">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dark' ? 'bg-cyan-400/20' : 'bg-cyan-600'
                  }`}>
                    <cert.icon className={theme === 'dark' ? 'text-cyan-300' : 'text-white'} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-1 ${
                      theme === 'dark' ? 'text-slate-100 group-hover:text-cyan-300' : 'text-gray-900 group-hover:text-cyan-700'
                    }`}>{cert.title}</h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
                    }`}>{cert.issuer}</p>
                  </div>
                </div>
                <div className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  theme === 'dark'
                    ? 'bg-cyan-400/20 border border-cyan-400/40 text-cyan-200'
                    : 'bg-cyan-600 border border-cyan-700 text-white'
                }`}>
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hobbies & Personal Interests */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-pink-400/20 shadow-lg shadow-pink-500/30' : 'bg-pink-600 shadow-lg shadow-pink-600/40'
            }`}>
              <Heart className={theme === 'dark' ? 'text-pink-300' : 'text-white'} size={28} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Hobbies & Interests</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Code, label: "Coding", color: "cyan" },
              { icon: Book, label: "Reading", color: "blue" },
              { icon: Music, label: "Music", color: "teal" },
              { icon: Camera, label: "Photography", color: "purple" },
              { icon: Plane, label: "Travel", color: "green" },
              { icon: Coffee, label: "Coffee", color: "orange" }
            ].map((hobby, index) => (
              <div key={index} className={`backdrop-blur-xl rounded-xl p-6 transition-all duration-300 hover:scale-110 group text-center ${
                theme === 'dark'
                  ? 'bg-slate-800/90 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'
                  : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl hover:shadow-2xl shadow-gray-400/30'
              }`}>
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-xl transition-all ${
                    theme === 'dark' ? 'bg-cyan-400/20 group-hover:bg-cyan-400/30' : 'bg-cyan-600 group-hover:bg-cyan-700'
                  }`}>
                    <hobby.icon className={theme === 'dark' ? 'text-cyan-300' : 'text-white'} size={24} />
                  </div>
                </div>
                <h3 className={`font-semibold text-sm ${
                  theme === 'dark' ? 'text-slate-200 group-hover:text-cyan-300' : 'text-gray-800 group-hover:text-cyan-700'
                }`}>{hobby.label}</h3>
              </div>
            ))}
          </div>

          <div className={`mt-8 backdrop-blur-xl rounded-xl p-8 ${
            theme === 'dark'
              ? 'bg-slate-800/90 border border-cyan-400/30 shadow-lg'
              : 'bg-white border border-gray-300 shadow-xl shadow-gray-400/30'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Personal Philosophy</h3>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-slate-200' : 'text-gray-700'
            }`}>
              Passionate about continuous learning and innovation in technology. I believe in writing clean, maintainable code and sharing knowledge with the community. When not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring junior developers. Life is a journey of constant growth, and I embrace every opportunity to learn and evolve both professionally and personally.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-blue-400/20 shadow-lg shadow-blue-500/30' : 'bg-blue-600 shadow-lg shadow-blue-600/40'
            }`}>
              <Briefcase className={theme === 'dark' ? 'text-blue-300' : 'text-white'} size={28} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Professional Experience</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Technical Lead",
                company: "Tech Mahindra",
                period: "Apr 2025 - Present",
                achievements: [
                  "Worked for CISCO true-forward and pricing structure application services",
                  "Handled JUNIT coverage with fully 100% code coverage using Mockito and reflection API",
                  "Configured utility classes to prevent directory traversal attacks",
                  "Worked on vulnerability fixes using Qwiet scan reports and corona reports"
                ]
              },
              {
                title: "Senior Application Developer",
                company: "IBM India Private Limited",
                period: "Oct 2019 - Aug 2025",
                achievements: [
                  "Managed healthcare domain applications (Enrollment, CRM, Claims, Billing) for Elevancehealth",
                  "Integrated multiple technologies like Java, Spring Boot, and Microservices",
                  "Delivered code changes using tools like Anita, Interactive SQL, and Bitbucket",
                  "DevOps responsibilities for application management"
                ]
              },
              {
                title: "Software Engineer",
                company: "Foray Software Pvt Ltd",
                period: "Jul 2018 - Aug 2019",
                achievements: [
                  "Developed data integration and API customization for Agile PLM tool (Amgen project)",
                  "Configured classes, GUIs, and business logic to manage pharmaceutical data",
                  "Created APIs and generated FDA-compliant reports"
                ]
              },
              {
                title: "Java Developer",
                company: "Try Logic Soft Solutions AP Private Limited",
                period: "Dec 2015 - Jul 2018",
                achievements: [
                  "Developed and maintained secure online examination system for DDUGKY program",
                  "Created Java interfaces and developed servlets and JSP using Spring MVC",
                  "Provided immediate exam results to students through secure online system"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -left-3 top-0 bottom-0 w-1 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gradient-to-b from-cyan-400 via-blue-400 to-teal-400 opacity-40'
                    : 'bg-gradient-to-b from-cyan-600 via-blue-600 to-teal-600 opacity-60'
                }`}></div>
                <div className={`backdrop-blur-xl rounded-xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-slate-800/90 border border-slate-700 hover:border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'
                    : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl hover:shadow-2xl shadow-gray-400/30'
                }`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold mb-1 ${
                        theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                      }`}>{job.title}</h3>
                      <p className={`text-lg ${
                        theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                      }`}>{job.company}</p>
                    </div>
                    <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium text-sm whitespace-nowrap ${
                      theme === 'dark'
                        ? 'bg-cyan-400/20 border border-cyan-400/40 text-cyan-200'
                        : 'bg-cyan-600 border border-cyan-700 text-white shadow-md'
                    }`}>
                      {job.period}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-3 group/item">
                        <div className="mt-1.5">
                          <div className={`w-2 h-2 rounded-full group-hover/item:scale-150 transition-transform ${
                            theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-600'
                          }`}></div>
                        </div>
                        <span className={`transition-colors ${
                          theme === 'dark' ? 'text-slate-300 group-hover/item:text-slate-200' : 'text-gray-700 group-hover/item:text-gray-900'
                        }`}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Core Expertise Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl ${
                  theme === 'dark' ? 'bg-teal-400/20 shadow-lg shadow-teal-500/30' : 'bg-teal-600 shadow-lg shadow-teal-600/40'
                }`}>
                  <GraduationCap className={theme === 'dark' ? 'text-teal-300' : 'text-white'} size={28} />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold ${
                  theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                }`}>Education</h2>
              </div>

              <div className="space-y-6">
                <div className={`backdrop-blur-xl rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-slate-800/90 border border-cyan-400/30 hover:border-teal-400/60 shadow-lg'
                    : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl shadow-gray-400/30'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-teal-300' : 'bg-teal-600'
                    }`}></div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                      }`}>Master of Computer Applications</h3>
                      <p className={`mt-1 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                      }`}>Kushagra Institute of Information & Management Science</p>
                      <p className={`text-sm mt-1 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                      }`}>Affiliated to BPUT, Cuttack</p>
                      <div className="flex gap-4 mt-3">
                        <span className={`font-semibold ${
                          theme === 'dark' ? 'text-teal-300' : 'text-teal-700'
                        }`}>75%</span>
                        <span className={theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}>|</span>
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>2015</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`backdrop-blur-xl rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-slate-800/90 border border-cyan-400/30 hover:border-teal-400/60 shadow-lg'
                    : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl shadow-gray-400/30'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      theme === 'dark' ? 'bg-teal-300' : 'bg-teal-600'
                    }`}></div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                      }`}>Bachelor of Computer Applications</h3>
                      <p className={`mt-1 ${
                        theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                      }`}>Capital Academy of Professional Studies</p>
                      <p className={`text-sm mt-1 ${
                        theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                      }`}>Affiliated to Utkal University, Bhubaneswar</p>
                      <div className="flex gap-4 mt-3">
                        <span className={`font-semibold ${
                          theme === 'dark' ? 'text-teal-300' : 'text-teal-700'
                        }`}>67%</span>
                        <span className={theme === 'dark' ? 'text-slate-500' : 'text-gray-500'}>|</span>
                        <span className={theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}>2012</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Expertise */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl ${
                  theme === 'dark' ? 'bg-cyan-400/20 shadow-lg shadow-cyan-500/30' : 'bg-cyan-600 shadow-lg shadow-cyan-600/40'
                }`}>
                  <Code className={theme === 'dark' ? 'text-cyan-300' : 'text-white'} size={28} />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold ${
                  theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                }`}>Core Expertise</h2>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Terminal, label: "Languages", value: "Java 1.7/8, Python, TypeScript" },
                  { icon: Code, label: "Frameworks", value: "Spring Boot, Hibernate, Spring MVC" },
                  { icon: Database, label: "Databases", value: "Oracle, MySQL, NoSQL" },
                  { icon: Globe, label: "Technologies", value: "Microservices, REST API, JSP" }
                ].map((skill, index) => (
                  <div key={index} className={`backdrop-blur-xl rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] ${
                    theme === 'dark'
                      ? 'bg-slate-800/90 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg'
                      : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl shadow-gray-400/30'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        theme === 'dark' ? 'bg-cyan-400/20' : 'bg-cyan-600'
                      }`}>
                        <skill.icon className={theme === 'dark' ? 'text-cyan-300' : 'text-white'} size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold mb-1 ${
                          theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                        }`}>{skill.label}</h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                        }`}>{skill.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-blue-400/20 shadow-lg shadow-blue-500/30' : 'bg-blue-600 shadow-lg shadow-blue-600/40'
            }`}>
              <Database className={theme === 'dark' ? 'text-blue-300' : 'text-white'} size={28} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Technical Proficiency</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: "Programming", items: ["Java 1.7/8", "Python", "Scripting"] },
              { title: "Frontend", items: ["JavaScript", "TypeScript", "jQuery", "Ajax"] },
              { title: "J2EE", items: ["Servlets", "JSP", "Spring MVC", "Microservices"] },
              { title: "Frameworks", items: ["Spring Boot", "Hibernate", "RESTful WS"] },
              { title: "Tools", items: ["Agile PLM", "Maven", "JUnit", "Log4j"] },
              { title: "Servers", items: ["Tomcat 7/8/9", "WebLogic", "Bamboo"] },
              { title: "Databases", items: ["Oracle", "MySQL", "NoSQL"] },
              { title: "IDEs", items: ["IntelliJ", "Eclipse", "NetBeans", "STS"] }
            ].map((category, index) => (
              <div key={index} className={`backdrop-blur-xl rounded-xl p-5 transition-all duration-300 group hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-slate-800/90 border border-cyan-400/30 hover:border-blue-400/60 shadow-lg'
                  : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl shadow-gray-400/30'
              }`}>
                <h3 className={`font-bold mb-3 text-sm ${
                  theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                }`}>{category.title}</h3>
                <div className="space-y-1.5">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full group-hover:scale-150 transition-transform ${
                        theme === 'dark' ? 'bg-blue-300' : 'bg-blue-600'
                      }`}></div>
                      <span className={`text-sm transition-colors ${
                        theme === 'dark' ? 'text-slate-300 group-hover:text-slate-200' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-cyan-400/20 shadow-lg shadow-cyan-500/30' : 'bg-cyan-600 shadow-lg shadow-cyan-600/40'
            }`}>
              <Award className={theme === 'dark' ? 'text-cyan-300' : 'text-white'} size={28} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Key Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "EAWS - CISCO Application Services",
                client: "CISCO",
                org: "Tech Mahindra",
                highlights: [
                  "Developed true-forward and pricing structure application services",
                  "Achieved 100% code coverage using Mockito and reflection API",
                  "Implemented security measures to prevent directory traversal attacks"
                ]
              },
              {
                title: "Decare Dental System (DDS)",
                client: "Elevancehealth (ANTHEM)",
                org: "IBM India",
                highlights: [
                  "Managed healthcare domain applications (Enrollment, CRM, Claims, Billing)",
                  "Integrated Java, Spring Boot, and Microservices architecture",
                  "Handled DevOps responsibilities for application management"
                ]
              },
              {
                title: "Tech Transfer, RMS, Data Migration",
                client: "Amgen",
                org: "Tata Consulting Services",
                highlights: [
                  "Developed data integration and API customization for Agile PLM tool",
                  "Configured classes, GUIs, and business logic for pharmaceutical data",
                  "Generated FDA-compliant reports"
                ]
              },
              {
                title: "DDUGKY Online Examination (TOE)",
                client: "Education Sector",
                org: "Trylogic Soft Solutions",
                highlights: [
                  "Developed secure online examination system for students",
                  "Created Java interfaces and implemented Spring MVC architecture",
                  "Provided immediate result delivery system"
                ]
              }
            ].map((project, index) => (
              <div key={index} className={`backdrop-blur-xl rounded-xl p-6 md:p-8 transition-all duration-300 group hover:scale-[1.02] ${
                theme === 'dark'
                  ? 'bg-slate-800/90 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'
                  : 'bg-white border border-gray-300 hover:border-gray-500 shadow-xl hover:shadow-2xl shadow-gray-400/30'
              }`}>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  theme === 'dark' ? 'text-slate-100 group-hover:text-cyan-300' : 'text-gray-900 group-hover:text-cyan-700'
                }`}>{project.title}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className={`rounded-full px-3 py-1 text-sm ${
                    theme === 'dark'
                      ? 'bg-cyan-400/20 border border-cyan-400/40 text-cyan-200'
                      : 'bg-cyan-600 border border-cyan-700 text-white shadow-md'
                  }`}>
                    {project.client}
                  </span>
                  <span className={`rounded-full px-3 py-1 text-sm ${
                    theme === 'dark'
                      ? 'bg-blue-400/20 border border-blue-400/40 text-blue-200'
                      : 'bg-blue-600 border border-blue-700 text-white shadow-md'
                  }`}>
                    {project.org}
                  </span>
                </div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3 group/item">
                      <div className="mt-1.5">
                        <div className={`w-2 h-2 rounded-full group-hover/item:scale-150 transition-transform ${
                          theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-600'
                        }`}></div>
                      </div>
                      <span className={`text-sm transition-colors ${
                        theme === 'dark' ? 'text-slate-300 group-hover/item:text-slate-200' : 'text-gray-700 group-hover/item:text-gray-900'
                      }`}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className={`p-3 rounded-xl ${
              theme === 'dark' ? 'bg-green-400/20 shadow-lg shadow-green-500/30' : 'bg-green-600 shadow-lg shadow-green-600/40'
            }`}>
              <MessageSquare className={theme === 'dark' ? 'text-green-300' : 'text-white'} size={28} />
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Let's Connect</h2>
          </div>

          <div className={`backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-400/30 shadow-2xl shadow-cyan-500/20'
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-300 shadow-2xl shadow-gray-400/40'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
            }`}>Ready to Collaborate?</h3>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-slate-200' : 'text-gray-700'
            }`}>
              I'm always interested in hearing about new opportunities, challenging projects, and innovative ideas. Let's build something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a href="mailto:prabeen.social@gmail.com" className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-slate-700/80 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'
                  : 'bg-white border border-gray-300 hover:border-gray-500 shadow-lg hover:shadow-xl shadow-gray-400/30'
              }`}>
                <Mail className={`mx-auto mb-3 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`} size={32} />
                <h4 className={`font-bold mb-1 ${
                  theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                }`}>Email</h4>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>prabeen.social@gmail.com</p>
              </a>

              <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-slate-700/80 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'
                  : 'bg-white border border-gray-300 hover:border-gray-500 shadow-lg hover:shadow-xl shadow-gray-400/30'
              }`}>
                <Phone className={`mx-auto mb-3 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`} size={32} />
                <h4 className={`font-bold mb-1 ${
                  theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                }`}>Phone</h4>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>+91-9438067471</p>
              </div>

              <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-slate-700/80 border border-cyan-400/30 hover:border-cyan-400/60 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'
                  : 'bg-white border border-gray-300 hover:border-gray-500 shadow-lg hover:shadow-xl shadow-gray-400/30'
              }`}>
                <MapPin className={`mx-auto mb-3 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
                }`} size={32} />
                <h4 className={`font-bold mb-1 ${
                  theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
                }`}>Location</h4>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                }`}>Hyderabad, India</p>
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 rounded-full px-6 py-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 shadow-lg shadow-cyan-500/30'
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 border border-cyan-700 shadow-xl shadow-cyan-600/40'
            }`}>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className={`font-medium ${
                theme === 'dark' ? 'text-cyan-200' : 'text-white'
              }`}>Available for Technical Leadership Opportunities</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`relative ${
          theme === 'dark' ? 'border-t border-slate-800' : 'border-t border-gray-300'
        }`}>
          <div className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10'
              : 'bg-gradient-to-r from-cyan-100 via-blue-100 to-teal-100'
          }`}></div>
          <div className="relative max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-slate-100' : 'text-gray-900'
              }`}>Prabeen Kumar Subudhi</h3>
              <p className={`mb-4 ${
                theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
              }`}>Technical Lead | Java & Microservices Specialist</p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
              }`}>© 2025 All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
