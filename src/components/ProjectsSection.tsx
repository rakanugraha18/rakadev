import { useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Clone mi.co.id",
    description: "A full-stack mi.co.id clone built with React, Tailwind, Node.js, Express, and MySQL, deployed on Vercel and Render to demonstrate responsive UI, scalable backend, and effective team collaboration.",
    image: "https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/Raka%2FProject%2FFullstack%20group.jpg?alt=media&token=b358f8f3-9096-420a-842a-565839f57011",
    tags: ["React", "Node.js", "MySQL", "Sequelize", "Tailwind CSS", "Vercel", "Render.com", "express",],
    category: "fullstack",
    github: "https://github.com/rakanugraha18/fs-xiaomi-phone",
    demo: "https://xiaomi-phone.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Smartliving",
    description: "Built a Smart Living e-commerce platform using React, Tailwind, Node.js, Express, Sequelize, and MySQL during a one-month virtual internship with CMLABS, collaborating with a PM and UI/UX Designer.",
    image: "https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/Raka%2FProject%2Fsmartliving.png?alt=media&token=c857f687-e89a-44b9-83a3-bd12ada7d5f9",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel", "Render.com", "Node.js", "Express", "Sequelize", "MySQL", "Vercel"],
    category: "fullstack",
    github: "https://github.com/rakanugraha18/frontend-smartliving",
    demo: "https://smartliving.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Movie Recomendation Website",
    description: "Developed a movie website using React, Tailwind, and the TMDB API, later expanded into a full-stack app with Express, MySQL, and user authentication to strengthen frontend–backend integration skills.",
    image: "https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/Raka%2FProject%2FFullstack.jpg?alt=media&token=b79b2e49-cc65-41ac-9795-b9bf6e6a23c7",
    tags: ["React", "javascript", "API Integration"],
    category: "frontend",
    github: "https://github.com/rakanugraha18/fs-flixflix",
    demo: "https://flixflix.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Rest full API Learning english",
    description: "A RESTful English-learning API with user authentication, topic and word selection, AI-generated content, and interactive quizzes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Node.js", "javascript", "Express", "MySQL", "Swagger"],
    category: "backend",
    github: "https://github.com/rakanugraha18/backendupoe",
    demo: "https://backendupoe.onrender.com",
    featured: false,
  },
  {
    id: 5,
    title: "Desktop POS App with Electron ",
    description: "A modern POS system for fast transactions, product management, and daily sales tracking, complete with an admin dashboard for real-time reports, inventory monitoring, and user management.",
    image: "https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/Raka%2FProject%2Fpos.jpg?alt=media&token=18c0cf0d-a41e-48c7-94af-7168a5269276",
    tags: ["Electron", "React", "SQLite"],
    category: "desktop",
    github: "https://github.com/rakanugraha18/pos",
    demo: "#",
    featured: true,
  },
  {
    id: 6,
    title: "My first HTML CSS Project",
    description: "A simple HTML CSS project to learn the basics of HTML and CSS.",
    image: "https://firebasestorage.googleapis.com/v0/b/xiaomi-phone-e544c.appspot.com/o/Raka%2FProject%2FHtml%20Css.jpg?alt=media&token=3fd25d97-c6c8-4e85-bfb4-3b57bc395f09",
    tags: ["HTML", "CSS"],
    category: "frontend",
    github: "https://github.com/rakanugraha18/HTML-CSS-RakaN",
    demo: "https://html-css-raka-n.vercel.app/",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "desktop", label: "Desktop" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, featuring web applications, APIs, and desktop software
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                "group overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",
                project.featured && "md:col-span-2 lg:col-span-1"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/20 backdrop-blur-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-primary">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                {/* Project Info */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
