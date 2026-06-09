export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="mt-6 text-slate-300">
          gajendra.sap.consultant@gmail.com
        </p>

        <p className="mt-2 text-slate-300">
          +91 9907355128
        </p>

        <div className="mt-10">

          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}