import { Code2, Briefcase, GraduationCap, MapPin, Calendar, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import fotoRaka from "@/assets/rakaNugraha.jpeg";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "6+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "1+" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "Committed to delivering high-quality solutions on time",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Love learning new technologies and solving complex problems",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get to Know Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate fullstack developer dedicated to creating impactful web solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Stats */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border relative">
                {/* Background Image */}
                <img src={fotoRaka} alt="Foto Raka Nugraha" className="w-full h-full object-cover absolute inset-0" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Name at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Raka Nugraha</h3>
                  <p className="text-white/80">Fullstack Developer</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">2+</p>
                    <p className="text-sm text-muted-foreground">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-4 left-4 w-full h-full rounded-2xl border-2 border-dashed border-primary/30 -z-10" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Fullstack JavaScript Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hello! I'm Raka Nugraha, a Fullstack Developer focused on the JavaScript ecosystem. I have experience in building modern web applications using React, Next.js, and various backend technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong passion for web development, I always strive to create solutions that are not only functional but also deliver an optimal user experience. I believe that good code is clean, well-structured, and easy to maintain.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <GraduationCap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">Computer and Network Engineering</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">2+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Code2 className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Specialty</p>
                  <p className="font-medium">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
