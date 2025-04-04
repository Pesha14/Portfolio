import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Briefcase, GraduationCap, Heart, Users, PenTool as Tool, ChevronDown, Globe, Clock, Target } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Pesha Enock
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & Software Engineer
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Pesha14" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              
             
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80" 
                  alt="Professional headshot"
                  className="rounded-lg shadow-2xl w-full"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-900 p-8 rounded-lg text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                <p className="text-gray-300">
                  Working with diverse teams and clients worldwide has given me a unique perspective on creating 
                  solutions that work across cultures and markets.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg text-center">
                <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-gray-300">
                  Technology evolves rapidly, and I stay current with the latest developments through continuous 
                  learning and professional development.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg text-center">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Goal-Oriented</h3>
                <p className="text-gray-300">
                  I approach each project with clear objectives and a strategic mindset, ensuring deliverables 
                  that exceed expectations.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-6">My Development Philosophy</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                I believe in creating software that not only meets technical requirements but also delivers real value 
                to users. My approach combines technical excellence with user-centered design, ensuring that every 
                project I work on is both powerful and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Code2 className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• C#, JavaScript, Node.js, Express.js</li>
                <li>• React.js, HTML, CSS</li>
                <li>• Arduino, Pico</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Server className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Responsive Web Design</li>
                <li>• ASP.NET MVC</li>
                <li>• User Interface Design</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• MySQL</li>
                <li>• MSSQL (Entity Framework)</li>
                <li>• Database Design & Optimization</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Tool className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold">Tools & IDEs</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Visual Studio</li>
                <li>• Visual Studio Code</li>
                <li>• GitHub Version Control</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Project Management</li>
                <li>• Team Collaboration</li>
                <li>• Client Communication</li>
                <li>• Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">

            <div className="bg-gray-900 p-8 rounded-lg">

              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">GNovation LTD</h3>
              </div>
              <p className="text-xl text-gray-300 mb-4">Software Developer</p>
              <ul className="text-gray-300 space-y-2">
                <li>• contribute to the development of a Packing System applications</li>
                <li>• Collaborat with team members on live projects</li>
                <li>• PLC Programming</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">SwizzSoft Systems</h3>
              </div>
              <p className="text-xl text-gray-300 mb-4">Software Developer (Volunteering)</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Contributed to the development of a Co-Banking application</li>
                <li>• Gained experience in software development processes</li>
                <li>• Collaborated with team members on live projects</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold">Oasis Mathare</h3>
              </div>
              <p className="text-xl text-gray-300 mb-4">Trainer (December 2023 – End Of May 2024)</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Delivered training in Basic Computer Skills</li>
                <li>• Taught Scratch Programming and Pico Coding</li>
                <li>• Instructed ASP.NET Development</li>
                <li>• Designed course materials and practical exercises</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Co-Banking Application"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Co-Banking Application</h3>
                <p className="text-gray-300 mb-4">
                  A full-stack banking solution built with ASP.NET MVC, featuring account management,
                  transaction processing, and user authentication.
                </p>
                
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Employee Management System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Employee Management System</h3>
                <p className="text-gray-300 mb-4">
                  An ASP.NET web application for managing employee data, schedules, and performance tracking.
                </p>
               
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Student Management System"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Student Management System</h3>
                <p className="text-gray-300 mb-4">
                  An ASP.NET web application for managing Students data, Exams, and performance tracking.
                </p>
               
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Hobbies & Interests</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <p className="text-gray-300">Photography</p>
              </div>
              <div className="p-4">
                <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-300">Exploring New Technologies</p>
              </div>
              <div className="p-4">
                <Github className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <p className="text-gray-300">Contributing to Developer Communities</p>
              </div>
              <div className="p-4">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-gray-300">Participating in Hackathons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-gray-300 mb-8">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Mail className="w-6 h-6 text-blue-400" />
              <a href="mailto:peshaencok91@gmail.com" 
                className="text-blue-400 hover:text-blue-300 text-lg">
                peshaenock91@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
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