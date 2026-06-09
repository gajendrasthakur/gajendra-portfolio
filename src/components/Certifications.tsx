export default function Certifications() {
  const certifications = [
    {
      title: "SAP Integration Suite",
      provider: "SAP",
    },
    {
      title: "SAP BTP",
      provider: "SAP",
    },
    {
      title: "SAP MDG",
      provider: "SAP",
    },
    {
      title: "SAP Sourcing & Procurement",
      provider: "SAP",
    },
    {
      title: "SAP PI/PO",
      provider: "SAP",
    },
    {
      title: "Microsoft Azure",
      provider: "Microsoft",
    },
    {
      title: "Associate Data Practitioner Certification",
      provider: "Google Cloud",
      expires: "Nov 8, 2028",
    },
    {
      title: "Generative AI Leader Certification",
      provider: "Google Cloud",
      expires: "Oct 19, 2028",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          Certifications
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Professional Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl border border-slate-700 bg-slate-950 p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-3xl mb-6">
                🏅
              </div>

              <h3 className="text-xl font-bold leading-snug">
                {cert.title}
              </h3>

              <p className="mt-3 text-blue-400">
                {cert.provider}
              </p>

              {cert.expires && (
                <p className="mt-6 text-sm text-slate-400">
                  Expires: {cert.expires}
                </p>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}