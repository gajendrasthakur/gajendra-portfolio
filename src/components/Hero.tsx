import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white pt-32 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              SAP Integration Consultant
            </span>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Gajendra Singh
              <br />
              <span className="text-blue-500">
                Thakur
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-slate-300 leading-8 max-w-xl">
              SAP Integration Consultant with 3+ years of experience
              specializing in SAP CPI, SAP PI/PO and SAP BTP Integration
              Suite, delivering enterprise integrations, APIs and
              cloud-native solutions.
            </p>

            <div className="w-28 h-px bg-slate-700 my-10"></div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl">

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-400">
                  3+
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  IBM
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400">
                  Employer
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  SAP
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400">
                  Certified
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative w-full max-w-[380px]">

              <div className="absolute inset-0 -z-10 pointer-events-none bg-blue-500/20 blur-3xl rounded-full"></div>

              <div className="relative z-10 rounded-3xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl px-8 py-10 transition duration-300 hover:-translate-y-1 hover:border-blue-500">

                <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-blue-500">

                  <Image
                    src="/profile.jpg"
                    alt="Gajendra Singh Thakur"
                    fill
                    priority
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover"
                  />

                </div>

                <h2 className="mt-8 text-center text-2xl font-bold">
                  SAP Integration Consultant
                </h2>

                <div className="mt-5 flex flex-wrap justify-center gap-2">

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    IBM
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    SAP Certified
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                    Azure Certified
                  </span>

                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">

                  <span className="rounded-full bg-slate-700 px-3 py-1 text-sm">
                    SAP CPI
                  </span>

                  <span className="rounded-full bg-slate-700 px-3 py-1 text-sm">
                    SAP PI/PO
                  </span>

                  <span className="rounded-full bg-slate-700 px-3 py-1 text-sm">
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
