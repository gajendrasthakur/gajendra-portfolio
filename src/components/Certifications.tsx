import Image from "next/image";

export default function Certifications() {
  const certifications = [
    {
      title: "SAP Integration Suite",
      provider: "SAP",
      logo: "/logos/sap.png",
      expires: "May 29, 2027",
      link: "https://www.credly.com/badges/b50715a9-a707-4ad7-ac85-2db70ab771a8",
    },
    {
      title: "Associate Data Practitioner",
      provider: "Google Cloud",
      logo: "/logos/google.png",
      expires: "Nov 8, 2028",
      link: "https://www.credly.com/badges/81da9b98-737a-4189-b64e-24d1fe6519eb",
    },
    {
      title: "SAP BTP Administrator",
      provider: "SAP",
      logo: "/logos/sap.png",
      expires: "June 9, 2027",
      link: "https://www.credly.com/badges/1cab585d-45e4-430d-a635-e7d3300a1427",
    },
    {
      title: "Microsoft Azure Fundamentals",
      provider: "Microsoft",
      logo: "/logos/microsoft.png",
      expires: "Doesn't Expire",
      link: "https://learn.microsoft.com/en-us/users/gajendrasinghthakur-2627/credentials/4f859bc54a61f071?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      title: "SAP MDG",
      provider: "SAP",
      logo: "/logos/sap.png",
      expires: "June 9, 2027",
      link: "https://www.credly.com/badges/c0c3bfa6-c1ce-4be6-8b8e-988e55456642",
    },
    {
      title: "Generative AI Leader",
      provider: "Google Cloud",
      logo: "/logos/google.png",
      expires: "Oct 19, 2028",
      link: "https://www.credly.com/badges/cd5a8bc2-0e00-408b-b9e0-33bbf79c0814",
    },
    {
      title: "SAP Sourcing & Procurement",
      provider: "SAP",
      logo: "/logos/sap.png",
      expires: "April 7, 2027",
      link: "https://www.credly.com/badges/2297b057-5a7c-4129-ae4b-21def88bd429",
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

        <div className="grid gap-8 mt-14 sm:grid-cols-2 lg:grid-cols-3">

          {certifications.map((cert) => {
            const Card = (
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">

                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white p-3 mb-6">
                  <Image
                    src={cert.logo}
                    alt={cert.provider}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold leading-snug">
                  {cert.title}
                </h3>

                <p className="mt-3 text-blue-400">
                  {cert.provider}
                </p>

                <p className="mt-5 text-sm text-slate-400">
                  Expires: {cert.expires}
                </p>

              </div>
            );

            return cert.link ? (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Card}
              </a>
            ) : (
              <div key={cert.title}>
                {Card}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
