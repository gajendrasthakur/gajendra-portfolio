import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center pt-28">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              SAP Integration Consultant
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight">
              Gajendra Singh
              <br />
              <span className="text-blue-500">
                Thakur
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-xl">
              SAP CPI, PI/PO and SAP BTP Integration Suite Consultant with
              3+ years of experience building enterprise integrations,
              APIs and cloud-based solutions.
            </p>

            <div className="w-32 h-px bg-slate-700 mt-12 mb-8"></div>

            <div className="grid grid-cols-3 gap-8 max-w-lg">

              <div>
                <h3 className="text-3xl font-bold">3+</h3>
                <p className="text-slate-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">IBM</h3>
                <p className="text-slate-400">
                  Current Employer
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">SAP</h3>
                <p className="text-slate-400">
                  Certified
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <div className="relative w-[400px] h-[500px] rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 shadow-2xl flex flex-col items-center justify-center">

                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                  <Image
                    src="/profile.jpg"
                    alt="Gajendra Singh Thakur"
                    fill
                    sizes="224px"
                    className="object-cover"
                    priority
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  SAP Integration Consultant
                </h3>

                <div className="mt-4 flex flex-wrap justify-center gap-2">

                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                    IBM
                  </span>

                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                    SAP Certified
                  </span>

                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                    Azure Certified
                  </span>

                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3 px-6">

                  <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                    SAP CPI
                  </span>

                  <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                    SAP PI/PO
                  </span>

                  <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                    SAP BTP
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}