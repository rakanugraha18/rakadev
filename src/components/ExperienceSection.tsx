import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,

    title: "Manual QA",
    company: "PT Karya Kaya Bahagia",
    location: "Remote",
    period: "2025 - Now",
    description: [
      "Designed and executed test cases based on functional requirements, documenting results in Excel.",
      "Created detailed bug reports with reproduction steps and severity levels.",
      "Coordinated with developers and delivered regular testing evaluations to improve overall application quality",
    ],
    current: true,
  },
  {
    id: 2,
    title: "IT Support Staff",
    company: "PT American Hamburger",
    location: "Jakarta, Indonesia",
    period: "2017 - 2020",
    description: [
      "Managed PC setup, LAN networks, and Internet access across offices, factories, and headquarters in Jabodetabek and Bandung.",
      "Troubleshot PC, network, Internet, and device issues (POS, printers, CCTV) for all outlets",
      "Handled procurement and maintenance reports for hardware, and managed web/email servers including cPanel and Outlook configurations.",
    ],
    current: false,
  },
  {
    id: 3,
    title: "Store Leader",
    company: "PT Surganya Motor Indonesia",
    location: "Sukabumi, Indonesia",
    period: "2014 - 2016",
    description: [
      "Managed daily store operations, assisted customers, and coordinated product installations.",
      "Handled inventory checks, damage reports, and store supply procurement.",
      "Prepared sales and attendance reports and evaluated monthly performance.",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/50 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey Before and After becoming Fullstack Developer
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 md:left-1/2 top-12 w-0.5 h-full bg-border md:-translate-x-1/2" />
              )}

              {/* Timeline Item */}
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-4 ${exp.current
                      ? "bg-primary border-primary/30"
                      : "bg-card border-border"
                      }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Current Badge */}
                    {exp.current && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Current Position
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
