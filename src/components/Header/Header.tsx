import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  displayText: string;
}

export const Header = ({ displayText: _ }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "projects" },
    { href: "#education", label: "education" },
    { href: "#languages", label: "languages" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <header className="border-b border-green-400/30 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6" />
          <span className="text-xl font-bold">~/developer</span>
        </div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-green-400/30 bg-black/90">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-green-300 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
