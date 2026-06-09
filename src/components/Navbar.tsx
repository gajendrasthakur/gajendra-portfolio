export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="w-full px-8 lg:px-20">

        <div className="h-24 flex justify-end items-center">

          <div className="hidden md:flex items-center gap-10">

            <a
              href="#about"
              className="text-slate-300 hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-300 hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="text-slate-300 hover:text-white transition"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-slate-300 hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white transition"
            >
              Resume
            </a>

          </div>

        </div>

      </div>

    </nav>
  );
}