export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="max-w-4xl">

          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Building enterprise integrations that scale.
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-8">
            I am an SAP Integration Consultant with 3+ years of
            experience specializing in SAP CPI, SAP PI/PO and SAP
            BTP Integration Suite. Currently working at IBM,
            I design and develop enterprise-grade integrations
            connecting SAP and non-SAP systems using APIs,
            IDocs, RFCs, SOAP, REST and OData services.
          </p>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            I enjoy solving complex integration challenges,
            modernizing legacy interfaces and building reliable,
            scalable middleware solutions for global clients.
          </p>

        </div>

      </div>
    </section>
  );
}