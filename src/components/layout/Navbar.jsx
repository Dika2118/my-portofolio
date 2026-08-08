import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../../lib/constants';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
            <Code2 className="w-5 h-5" />
          </div>
          <span>{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-border text-foreground hover:bg-secondary"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border/50 last:border-none"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
