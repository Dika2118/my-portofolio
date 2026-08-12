import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../lib/constants';
import { Download, Languages, Palette, Menu, X, Sun, Moon, Laptop, ChevronDown } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#hero');
  const [theme, setTheme] = useTheme();
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [lang, setLang] = useState('ID');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeOptions = [
    { value: 'light', label: 'Cerah', icon: Sun },
    { value: 'dark', label: 'Gelap', icon: Moon },
    { value: 'system', label: 'Sistem', icon: Laptop },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
          ? 'bg-background/90 backdrop-blur-md border-border shadow-md py-3'
          : 'bg-background/80 backdrop-blur-sm py-4 border-border/80'
        }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">

        {/* Left Side: Monogram Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo AR */}
          <a href="#hero" className="group flex items-center gap-1">
            <span className="font-extrabold text-2xl tracking-tighter text-foreground group-hover:text-primary transition-colors italic">
              AR
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveNav(link.href)}
                  className={`text-xs lg:text-sm font-medium transition-colors ${isActive
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Unduh Resume Button */}
          <a
            href="#resume"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-100 transition-all shadow-xs"
          >
            <span>Unduh Resume</span>
            <Download className="w-3.5 h-3.5" />
          </a>

          {/* Language Switcher Button */}
          <button
            onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
            className="p-2 rounded-full border border-border bg-card hover:bg-accent text-foreground transition-all"
            title="Ganti Bahasa"
          >
            <Languages className="w-4 h-4" />
          </button>

          {/* Theme Palette Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 rounded-full border border-border bg-card hover:bg-accent text-foreground transition-all"
              title="Pilih Tema"
            >
              <Palette className="w-4 h-4" />
            </button>

            {themeDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setThemeDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-36 py-1 bg-card border border-border rounded-xl shadow-lg z-50 animate-in fade-in zoom-in-95 duration-150">
                  {themeOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isActive = theme === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setTheme(opt.value);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium transition-colors ${isActive
                            ? 'bg-primary/10 text-primary font-semibold'
                            : 'text-foreground hover:bg-muted'
                          }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveNav(link.href);
                setMobileMenuOpen(false);
              }}
              className={`block text-sm font-medium py-2 border-b border-border/40 last:border-none ${activeNav === link.href ? 'text-primary font-bold' : 'text-muted-foreground'
                }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 flex items-center justify-between border-t border-border">
            <button className="px-4 py-1.5 rounded-full border border-border bg-card text-xs font-medium">
              Masuk
            </button>
            <a
              href="#resume"
              className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs"
            >
              <span>Unduh Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Pilih Tema:</span>
            <div className="flex items-center gap-1 bg-muted p-1 rounded-lg border border-border">
              {themeOptions.map((opt) => {
                const Icon = opt.icon;
                const isActive = theme === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setTheme(opt.value)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${isActive
                        ? 'bg-background text-foreground shadow-xs'
                        : 'text-muted-foreground'
                      }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
