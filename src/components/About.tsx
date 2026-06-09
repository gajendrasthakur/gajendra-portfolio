export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        <p className="text-blue-500 font-semibold uppercase tracking-widest">
          About Me
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Passionate SAP Integration Consultant
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-16">

          <div>

            <p className="text-slate-300 text-lg leading-9">
              I am an SAP Integration Consultant with more than
              3 years of experience designing and implementing
              enterprise integrations using SAP CPI, SAP PI/PO
              and SAP BTP Integration Suite.
            </p>

            <p className="mt-6 text-slate-300 text-lg leading-9">
              Currently working at IBM, I specialize in API
              integrations, IDOCs, SOAP, REST, OData services,
              SuccessFactors integrations and cloud-native SAP
              solutions for global clients.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                3+
              </h3>

              <p className="mt-2 text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                IBM
              </h3>

              <p className="mt-2 text-slate-400">
                Current Employer
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                SAP
              </h3>

              <p className="mt-2 text-slate-400">
                Certified
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-blue-500">
                Azure
              </h3>

              <p className="mt-2 text-slate-400">
                Certified
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}