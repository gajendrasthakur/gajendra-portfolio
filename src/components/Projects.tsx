export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">
              Integration Monitoring Dashboard
            </h3>

            <p className="mt-4 text-slate-300">
              MERN application for monitoring SAP integration logs,
              failures and analytics with intelligent alerts.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">
              IBM WatsonX Challenge
            </h3>

            <p className="mt-4 text-slate-300">
              AI-powered document reviewer for SAP TSD and FSD
              using IBM WatsonX.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}