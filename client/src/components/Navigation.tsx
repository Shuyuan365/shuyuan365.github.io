import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "education", label: "Education", href: "#education" },
  { id: "research", label: "Research", href: "#research" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-card text-foreground border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`
          fixed md:relative w-64 h-screen bg-sidebar border-r border-sidebar-border
          flex flex-col p-8 overflow-y-auto transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          z-40 md:z-auto
        `}
      >
        {/* Logo/Name */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-sidebar-foreground">
            Shuyuan Jin
          </h1>
          <p className="text-sm text-sidebar-accent mt-2">
            Software Engineer
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-6 flex-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id, item.href)}
                className={`
                  text-left w-full text-lg font-medium transition-all duration-300
                  relative pb-2 group
                  ${
                    activeSection === item.id
                      ? "text-sidebar-accent"
                      : "text-sidebar-foreground hover:text-sidebar-accent"
                  }
                `}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`
                    absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sidebar-accent to-transparent
                    transition-all duration-300
                    ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-1/2"}
                  `}
                />
              </button>
            </li>
          ))}
        </ul>


      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
