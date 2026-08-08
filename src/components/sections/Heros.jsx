import React from 'react';
import { PERSONAL_INFO } from '../../lib/constants';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons';

export default function Heros() {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-secondary/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Siap Bekerja & Berkolaborasi
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600">{PERSONAL_INFO.name}</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
              {PERSONAL_INFO.role}
            </h2>

            <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all shadow-md"
              >
                Lihat Proyek <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background hover:bg-secondary/60 font-medium transition-all"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-border hover:border-primary/50 hover:bg-secondary transition-all text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-border hover:border-primary/50 hover:bg-secondary transition-all text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full border border-border hover:border-primary/50 hover:bg-secondary transition-all text-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Avatar/Card Illustration */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-tr from-primary/20 via-purple-500/20 to-blue-500/20 p-2 shadow-xl backdrop-blur-sm">
              <div className="w-full h-full rounded-xl overflow-hidden bg-card border border-border flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
