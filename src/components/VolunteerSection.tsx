const volunteers = [
  {
    name: "TEDxITS 2026",
    image: "/img/lp_tedx26.png",
    date: "Jan 2026 - Mar 2026",
    role: "Senior Backend Developer",
    roleColor: "bg-cyan-100 text-cyan-700",
    description:
      "TEDxITS is an annual event that provides a platform for the community, especially those within the Institut Teknologi Sepuluh Nopember environment, to share their compelling ideas.",
    tech: [
      { icon: "/img/go.svg", name: "Go" },
      { icon: "/img/fiber.svg", name: "Fiber" },
      { icon: "/img/postgresql.svg", name: "PostgreSQL" },
    ],
    link: "https://www.instagram.com/tedxits/",
  },
  {
    name: "Futurest 2026",
    image: "/img/lp_futurest.png",
    date: "Feb 2026 - Apr 2026",
    role: "Senior Backend Developer",
    roleColor: "bg-cyan-100 text-cyan-700",
    description:
      "Futurest (Future Energy Summit) is the annual flagship event of the Society of Renewable Energy (SRE) ITS.",
    tech: [
      { icon: "/img/go.svg", name: "Go" },
      { icon: "/img/gin.svg", name: "Gin" },
      { icon: "/img/postgresql.svg", name: "PostgreSQL" },
    ],
    link: "https://www.instagram.com/futurest.2026/",
  },
  {
    name: "Ini Lho ITS! 2026",
    image: "/img/lp_ilits26.png",
    date: "Feb 2026 - Apr 2026",
    role: "Manager Backend Developer",
    roleColor: "bg-blue-100 text-blue-700",
    description:
      "Ini Lho ITS! is an annual event that introduces Institut Teknologi Sepuluh Nopember to the wider public especially high school and vocational school students.",
    tech: [
      { icon: "/img/go.svg", name: "Go" },
      { icon: "/img/gin.svg", name: "Gin" },
      { icon: "/img/postgresql.svg", name: "PostgreSQL" },
    ],
    link: "https://www.instagram.com/inilhoits/",
  },
  {
    name: "180DC ITS",
    image: "/img/lp_180dc.png",
    date: "Oct 2025 - Dec 2025",
    role: "Junior Backend Developer",
    roleColor: "bg-green-100 text-green-700",
    description:
      "180dc ITS is a global consultancy organization that offer high-quality consulting services to nonprofits, social enterprises, and socially conscious organizations.",
    tech: [
      { icon: "/img/go.svg", name: "Go" },
      { icon: "/img/gin.svg", name: "Gin" },
      { icon: "/img/postgresql.svg", name: "PostgreSQL" },
    ],
    link: "https://www.instagram.com/180dcits/",
  },
  {
    name: "Schematics 2025",
    image: "/img/lp_sch25.png",
    date: "Sep 2025 - Oct 2025",
    role: "Vice Director 2 - WebDev",
    roleColor: "bg-purple-100 text-purple-700",
    description:
      "Schematics is an annual event organized by students of the Informatics Engineering Department at Institut Teknologi Sepuluh Nopember.",
    tech: [
      { icon: "/img/go.svg", name: "Go" },
      { icon: "/img/gin.svg", name: "Gin" },
      { icon: "/img/postgresql.svg", name: "PostgreSQL" },
    ],
    link: "https://www.instagram.com/schematics.its/",
  },
  {
    name: "TEDxITS 2025",
    image: "/img/lp_tedx25.jpg",
    date: "Aug 2025 - Sep 2025",
    role: "Junior Backend Developer",
    roleColor: "bg-green-100 text-green-700",
    description:
      "TEDxITS is an annual event that provides a platform for the community, especially those within the Institut Teknologi Sepuluh Nopember environment, to share their compelling ideas.",
    tech: [
      { icon: "/img/go.svg", name: "Go" },
      { icon: "/img/gin.svg", name: "Gin" },
      { icon: "/img/postgresql.svg", name: "PostgreSQL" },
    ],
    link: "https://www.instagram.com/tedxits/",
  },
  {
    name: "Ini Lho ITS! 2025",
    image: "/img/lp_ilits25.png",
    date: "Jun 2025 - Aug 2025",
    role: "Junior Backend Developer",
    roleColor: "bg-green-100 text-green-700",
    description:
      "Ini Lho ITS! is an annual event that introduces Institut Teknologi Sepuluh Nopember to the wider public especially high school and vocational school students.",
    tech: [
      { icon: "/img/go.svg", name: "Go" },
      { icon: "/img/gin.svg", name: "Gin" },
      { icon: "/img/postgresql.svg", name: "PostgreSQL" },
    ],
    link: "https://www.instagram.com/inilhoits/",
  },
];

export default function VolunteerSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Volunteer Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {volunteers.map((item) => (
            <div key={item.name} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                </div>
                <p className="text-slate-500 text-xs mb-3">{item.date}</p>
                <span className={`inline-block px-3 py-1 ${item.roleColor} text-sm font-medium rounded-full mb-3`}>
                  {item.role}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  {item.tech.map((t) => (
                    <div key={t.name} className="flex items-center gap-1">
                      <img src={t.icon} alt={t.name} className="w-5 h-5" />
                      <span className="text-xs text-slate-500">{t.name}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center gap-2"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
