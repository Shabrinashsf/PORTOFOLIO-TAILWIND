import { useState } from "react";

const workExperience = [
  {
    id: 1,
    company: "Jago Teknik",
    logo: "/img/jago teknik.jpg",
    badge: "Freelance",
    date: "February 2026 - Present",
    position: "Backend Developer",
    description: (
      <>
        <p className="mb-2">Designed a web-based learning platform architecture with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            User authentication, personalized dashboards, class management (schedules, live links, recordings), quizzes,
            and progress tracking.
          </li>
          <li>
            Role-based access control for admins, tutors, and members with workflows for material uploads, quiz creation,
            and attendance tracking.
          </li>
          <li>Administrative features including member data export and tutor performance monitoring.</li>
          <li>Tech stack: Golang, Gin, Gorm, PostgreSQL.</li>
        </ul>
      </>
    ),
  },
];

export default function WorkSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleWorkItem = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {workExperience.map((item) => (
            <div
              key={item.id}
              className="work-item block cursor-pointer"
              onClick={() => toggleWorkItem(item.id)}
            >
              <div className="rounded-lg bg-white p-4 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-none">
                    <div className="relative flex shrink-0 overflow-hidden rounded-full size-12 bg-slate-100">
                      <img
                        className="aspect-square h-full w-full object-cover"
                        alt={item.company}
                        src={item.logo}
                      />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between gap-x-2">
                        <h3 className="inline-flex items-center justify-center font-semibold text-sm sm:text-base">
                          {item.company}
                          <span className="inline-flex gap-x-1 ml-2">
                            <span className="inline-flex items-center rounded-md border border-transparent bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 transition-colors">
                              {item.badge}
                            </span>
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`chevron-icon size-4 ${expandedId === item.id ? "expanded" : ""}`}
                            style={{
                              transform: expandedId === item.id ? "rotate(90deg)" : "rotate(0deg)",
                            }}
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </h3>
                        <div className="text-xs sm:text-sm tabular-nums text-slate-500 text-right whitespace-nowrap">
                          {item.date}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-cyan-600 font-medium mt-1">{item.position}</div>
                    </div>
                  </div>
                </div>

                <div
                  className="work-description overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: expandedId === item.id ? "500px" : "0px",
                    opacity: expandedId === item.id ? 1 : 0,
                  }}
                >
                  <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
