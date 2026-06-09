export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 border-t border-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">

        <div className="flex flex-col items-center text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let's Connect
          </h2>

          <a
            href="mailto:gajendra.sap.consultant@gmail.com"
            className="mt-8 text-lg text-slate-300 hover:text-blue-400 transition"
          >
            gajendra.sap.consultant@gmail.com
          </a>

          <a
            href="tel:+919907355128"
            className="mt-2 text-lg text-slate-300 hover:text-blue-400 transition"
          >
            +91 9907355128
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://www.linkedin.com/in/gajendrasinghthakur/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/gajendrasthakur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition"
            >
              GitHub
            </a>

          </div>

          <div className="w-full h-px bg-slate-800 my-10" />

          <p className="text-sm text-slate-500">
            © 2026 Gajendra Singh Thakur • Built with Love ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}