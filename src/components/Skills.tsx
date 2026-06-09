const skills = [
  "SAP CPI",
  "SAP PI/PO",
  "SAP BTP",
  "Groovy",
  "REST APIs",
  "SOAP",
  "OData",
  "IDoc",
  "RFC",
  "XML",
  "XSLT",
  "JSON",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Azure",
  "Git",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Technologies I work with
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}