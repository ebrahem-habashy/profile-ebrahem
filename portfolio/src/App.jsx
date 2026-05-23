export default function Portfolio() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'Tailwind CSS',
    'Git & GitHub',
    'Responsive Design',
    'Frontend Development'
  ];

  const projects = [
    {
      title: 'Gym Website',
      desc: 'Modern responsive gym website with clean UI and animations.',
    },
    {
      title: 'Donation Platform',
      desc: 'Frontend for a charity donation system using Vue.js.',
    },
    {
      title: 'E-Commerce Cart',
      desc: 'Interactive shopping cart page with stylish design.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden scroll-smooth">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Habashy Dev
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-28"
      >
        <div className="text-center max-w-4xl">
          <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 shadow-[0_0_50px_rgba(34,211,238,0.6)] mb-8 animate-pulse">
           <img
  src="/img.jpg"
  alt="Ebrahem Habashy"
  className="w-full h-full object-cover rounded-full"
/>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Ebrahem <span className="text-cyan-400">Habashy</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Frontend Developer • Vue.js Developer • Software Engineering Student
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-10">
            Crafting modern, responsive, and interactive web experiences with clean UI,
            smooth animations, and premium frontend designs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/ebrahem-habashy"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 transition font-semibold backdrop-blur-xl"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">
            About <span className="text-cyan-400">Me</span>
          </h3>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl hover:scale-[1.01] transition duration-500">
            <p className="text-gray-300 text-lg leading-9">
              I'm <span className="text-cyan-400 font-semibold">Ebrahem Habashy</span>,
              a third-year Information Technology student specializing in
              Software Engineering. Passionate about frontend development,
              creating modern user interfaces, responsive layouts, and
              interactive web experiences using Vue.js and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">
            My <span className="text-purple-400">Skills</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition duration-500"
              >
                <div className="text-lg font-semibold group-hover:text-cyan-400 transition">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">
            Featured <span className="text-cyan-400">Projects</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-500"
              >
                <div className="h-52 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-3xl font-bold text-white">
                  Project
                </div>

                <div className="p-7">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 leading-7 mb-6">
                    {project.desc}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold">
                      Live Demo
                    </button>

                    <button className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition font-semibold">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">
            Contact <span className="text-purple-400">Me</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <h4 className="text-2xl font-bold mb-8">Get In Touch</h4>

              <div className="space-y-5 text-gray-300">
                <p>
                  <span className="text-cyan-400 font-semibold">Phone:</span>{' '}
                  01029396548
                </p>

                <p>
                  <span className="text-cyan-400 font-semibold">LinkedIn:</span>{' '}
                  linkedin.com/in/ebrahem-habashy
                </p>

                <p>
                  <span className="text-cyan-400 font-semibold">GitHub:</span>{' '}
                  github.com/ebrahem-habashy
                </p>
              </div>

              <div className="flex gap-4 mt-10 flex-wrap">
                <a
                  href="https://github.com/ebrahem-habashy"
                  target="_blank"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ebrahem-habashy-97b252340"
                  target="_blank"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/ebrahem_habashy11"
                  target="_blank"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 transition"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none focus:border-cyan-400"
                ></textarea>

                <button
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition text-lg font-semibold shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Ebrahem Habashy — Frontend Developer Portfolio
      </footer>
    </div>
  );
}
