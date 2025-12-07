import { useState } from "react";
import { cn } from "@/lib/utils";

type SkillCategory = "all" | "languages" | "frontend" | "backend" | "tools";

interface Skill {
  name: string;
  icon: string;
  category: SkillCategory[];
  level: number;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: ["languages", "frontend", "backend"], level: 95 },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: ["languages", "frontend", "backend"], level: 90 },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: ["frontend"], level: 92 },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: ["frontend"], level: 88 },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", category: ["frontend", "tools"], level: 85 },
  { name: "Electron", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", category: ["frontend", "tools"], level: 80 },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: ["backend"], level: 85 },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", category: ["backend"], level: 82 },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: ["backend"], level: 85 },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: ["backend"], level: 88 },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: ["tools"], level: 90 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: ["tools"], level: 88 },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: ["tools"], level: 75 },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: ["frontend"], level: 92 },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: ["backend"], level: 85 },
];

const categories = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills & Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies for building robust applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Skill Icon */}
              <div className="relative mb-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Skill Name */}
              <h4 className="text-center font-medium text-sm mb-3">
                {skill.name}
              </h4>

              {/* Progress Bar */}
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Level Indicator */}
              <p className="text-xs text-muted-foreground text-center mt-2">
                {skill.level}%
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Additional Tools Mention */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["DBeaver", "Swagger", "VS Code", "Figma", "Linux"].map(
              (tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  {tool}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
