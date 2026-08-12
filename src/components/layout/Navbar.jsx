import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../lib/constants';
import { Download, Languages, Palette, Menu, X, Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

function Logo() {
  return (
    <a href="#hero" className="group flex items-center gap-2">
      <img
        src="/images/logo-dark.png"
        alt="AR Logo"
        className="h-8 w-auto dark:hidden object-contain"
      />
      <img
        src="/images/logo-light.png"
        alt="AR Logo"
        className="h-8 w-auto hidden dark:block object-contain"
      />
    </a>
  );
}

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-border shadow-md py-3'
            : 'bg-background/80 backdrop-blur-sm py-4 border-border/80'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Mobile Left: Hamburger + Logo */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Logo />
          </div>

          {/* Desktop Left: Logo + Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Logo />

            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeNav === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveNav(link.href)}
                    className={`text-xs lg:text-sm font-medium transition-colors ${
                      isActive
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

          {/* Right Action Icons (Language & Theme Palette) */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Desktop Unduh Resume Button */}
            <a
              href="#resume"
              className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-100 transition-all shadow-sm"
            >
              <span>Unduh Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
              className="p-2 rounded-full text-foreground hover:bg-accent transition-all"
              title="Ganti Bahasa"
            >
              <Languages className="w-5 h-5" />
            </button>

            {/* Theme Palette Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-full text-foreground hover:bg-accent transition-all"
                title="Pilih Tema"
              >
                <Palette className="w-5 h-5" />
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
                          className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium transition-colors ${
                            isActive
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
        </div>
      </header>

      {/* Mobile Left Sliding Sidebar & Backdrop Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Left Drawer Panel */}
          <aside className="fixed top-14 left-0 bottom-0 z-50 w-72 sm:w-80 bg-background border-r border-border p-4 flex flex-col justify-between md:hidden shadow-2xl animate-in slide-in-from-left duration-200">
            {/* Nav Links */}
            <div className="space-y-1.5 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeNav === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveNav(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600/15 text-blue-500 dark:bg-[#1a2b5e] dark:text-blue-400 font-bold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Bottom Action: Unduh Resume */}
            <div className="pt-4 border-t border-border/60">
              <a
                href="#resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>Unduh Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
