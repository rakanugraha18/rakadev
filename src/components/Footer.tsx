import { Code2, Heart, ArrowUp, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoRK from "@/assets/logork.png";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: Github, href: "https://github.com/rakanugraha18", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rakanugraha", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/rakajnugraha", label: "Instagram" },
    { icon: Mail, href: "mailto:rakanugraha2@gmail.com", label: "Email" },
  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <Button
          variant="default"
          size="icon"
          className="rounded-full shadow-lg hover:-translate-y-1 transition-transform"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <img src={logoRK} alt="Logo" className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">
                Raka<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Fullstack JavaScript Developer passionate about building modern web applications
              with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {new Date().getFullYear()} Raka Nugraha. Made with{" "}
              <Heart className="w-4 h-4 text-destructive fill-destructive" /> in Indonesia
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
