import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Briefcase, GraduationCap, Heart, Users, PenTool as Tool, ChevronDown, Globe, Clock, Target } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Enhanced Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dynamic background with particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 transform scale-105 animate-gradient"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/80 to-black"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Animated glowing orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-x-10 -inset-y-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 transform group-hover:scale-150 transition-transform duration-500"></div>
                <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient tracking-tight leading-none">
                  Pesha Enock
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-8 transform group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
            
            <p className="text-3xl md:text-4xl text-gray-300 mb-12 font-light leading-relaxed glass-effect p-8 rounded-3xl transform hover:scale-105 transition-transform duration-500">
              Full Stack Developer & Software Engineer
            </p>

            <div className="flex flex-col items-center gap-8 mt-16">
              <div className="flex justify-center gap-6">
                <a href="https://github.com/Pesha14" target="_blank" rel="noopener noreferrer" 
                  className="p-4 bg-gray-800/50 backdrop-blur rounded-2xl hover:bg-gray-700/50 transition-all hover:scale-110 hover:shadow-glow group">
                  <Github className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
                </a>
                
                <a href="mailto:peshaenock91@gmail.com"
                  className="p-4 bg-gray-800/50 backdrop-blur rounded-2xl hover:bg-gray-700/50 transition-all hover:scale-110 hover:shadow-glow group">
                  <Mail className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
                <span className="px-6 py-2 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium backdrop-blur hover:bg-blue-500/20 transition-colors">React.js</span>
                <span className="px-6 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium backdrop-blur hover:bg-purple-500/20 transition-colors">Node.js</span>
                <span className="px-6 py-2 bg-green-500/10 text-green-300 rounded-full text-sm font-medium backdrop-blur hover:bg-green-500/20 transition-colors">C#</span>
                <span className="px-6 py-2 bg-pink-500/10 text-pink-300 rounded-full text-sm font-medium backdrop-blur hover:bg-pink-500/20 transition-colors">ASP.NET</span>
                <span className="px-6 py-2 bg-yellow-500/10 text-yellow-300 rounded-full text-sm font-medium backdrop-blur hover:bg-yellow-500/20 transition-colors">JavaScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 animate-float">
          <div className="flex flex-col items-center space-y-4">
            <span className="text-sm text-blue-400 font-medium tracking-wider uppercase glass-effect px-6 py-2 rounded-full hover:text-blue-300 transition-colors">
              Explore My Work
            </span>
            <div className="p-2 rounded-full bg-blue-500/10 animate-pulse-glow glass-effect">
              <div className="p-2 rounded-full bg-blue-500/20">
                <ChevronDown className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80" 
                  alt="Professional headshot"
                  className="rounded-lg shadow-2xl w-full relative transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with a deep love for creating innovative solutions that make a difference. 
                  With expertise in C#, JavaScript, and modern web technologies, I bridge the gap between sophisticated backend systems 
                  and intuitive user experiences.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  My journey in software development has been driven by curiosity and a constant desire to learn. 
                  I believe in writing clean, maintainable code and creating applications that not only work flawlessly 
                  but also provide genuine value to users.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="group bg-gray-800/30 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
                <Globe className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Global Perspective</h3>
                <p className="text-gray-300">
                  Working with diverse teams and clients worldwide has given me a unique perspective on creating 
                  solutions that work across cultures and markets.
                </p>
              </div>
              <div className="group bg-gray-800/30 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
                <Clock className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Continuous Learning</h3>
                <p className="text-gray-300">
                  Technology evolves rapidly, and I stay current with the latest developments through continuous 
                  learning and professional development.
                </p>
              </div>
              <div className="group bg-gray-800/30 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
                <Target className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-green-300">Goal-Oriented</h3>
                <p className="text-gray-300">
                  I approach each project with clear objectives and a strategic mindset, ensuring deliverables 
                  that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Code2 className="w-8 h-8 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-blue-300">Programming</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>C#, JavaScript, Node.js, Express.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>React.js, HTML, CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Arduino, Pico</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Server className="w-8 h-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-purple-300">Web Dev</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span>ASP.NET MVC</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span>UI/UX Design</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-green-300">Databases</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>MySQL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>MSSQL (Entity Framework)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Database Design & Optimization</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Tool className="w-8 h-8 text-yellow-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-yellow-300">Tools & IDEs</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span>Visual Studio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span>Visual Studio Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  <span>GitHub Version Control</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-red-300">Soft Skills</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                  <span>Project Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                  <span>Problem Solving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="group bg-gray-800/30 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-blue-300">GNovation LTD</h3>
              </div>
              <p className="text-xl text-blue-200 mb-4">Software Developer</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Contribute to the development of Packing System applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Collaborate with team members on live projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>PLC Programming</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-purple-300">SwizzSoft Systems</h3>
              </div>
              <p className="text-xl text-purple-200 mb-4">Software Developer</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span>Contributed to the development of a Co-Banking application</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span>Gained experience in software development processes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  <span>Collaborated with team members on live projects</span>
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur p-8 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-green-300">Oasis Mathare</h3>
              </div>
              <p className="text-xl text-green-200 mb-4">Trainer</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Delivered training in Basic Computer Skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Taught Pico Programming and Scratch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Instructed ASP.NET Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  <span>Designed course materials and practical exercises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gray-800/30 backdrop-blur rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                  alt="Co-Banking Application"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">Co-Banking Application</h3>
                <p className="text-gray-300 mb-4">
                  A full-stack banking solution built with ASP.NET MVC, featuring account management,
                  transaction processing, and user authentication.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">ASP.NET</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">MVC</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">SQL</span>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                  alt="Employee Management System"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Employee Management System</h3>
                <p className="text-gray-300 mb-4">
                  An ASP.NET web application for managing employee data, schedules, and performance tracking.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">C#</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">ASP.NET</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">MSSQL</span>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800/30 backdrop-blur rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                  alt="Student Management System"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-300">Student Management System</h3>
                <p className="text-gray-300 mb-4">
                  An ASP.NET web application for managing Students data, Exams and performance tracking.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">C#</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">ASP.NET</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">MSSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Hobbies & Interests</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
                <Code2 className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-lg">Exploring New Technologies</p>
              </div>
              <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
                <Github className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-lg">Contributing to Developer Communities</p>
              </div>
              <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
                <Users className="w-10 h-10 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-lg">Participating in Hackathons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-xl text-gray-300 mb-8">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <div className="group bg-gray-800/30 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:-translate-y-1">
              <div className="flex justify-center items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:peshaenock91@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 text-lg font-medium">
                  peshaenock91@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Pesha Enock. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;