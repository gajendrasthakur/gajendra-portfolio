export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Professional Journey
        </h2>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-blue-500">

          <h3 className="text-2xl font-bold">
            SAP Integration Consultant
          </h3>

          <p className="mt-2 text-blue-400 font-medium">
            IBM
          </p>

          <p className="mt-2 text-sm text-slate-400">
            📅 July 2023 – Present
          </p>

          <div className="w-20 h-px bg-slate-700 my-6"></div>

          <ul className="space-y-3 text-slate-300 leading-7">
            <li>• Developing SAP CPI integration flows</li>
            <li>• Working on SAP PI/PO support and enhancements</li>
            <li>• Building REST, SOAP and OData integrations</li>
            <li>• Handling IDoc and RFC interfaces</li>
            <li>• Supporting enterprise clients across global projects</li>
          </ul>

        </div>

      </div>
    </section>
  );
}