import React from 'react';
import { PERSONAL_INFO } from '../../lib/constants';
import { GithubIcon, LinkedinIcon } from '../ui/icons';
import { useLanguage } from '../../i18n';

function CodeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Halo Dika, saya tertarik untuk berkarya/berkolaborasi proyek bersama Anda.")}`;

  return (
    <footer className="bg-background text-foreground transition-colors duration-300 pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-border">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center text-center space-y-5 sm:space-y-6">
        {/* Project Prompt Subtitle */}
        <p className="text-muted-foreground text-sm sm:text-base font-medium">
          {t('footer.projectPrompt') || 'Punya ide proyek?'}
        </p>

        {/* Main CTA Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight max-w-2xl">
          {t('footer.ctaTitle') || 'Mari berkarya bersama saya.'}
        </h2>

        {/* WhatsApp Hubungi Saya Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md active:scale-95 inline-flex items-center justify-center gap-2 mt-1"
        >
          <span>{t('footer.contactMe') || 'Hubungi saya'}</span>
        </a>

        {/* Social Icons Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all shadow-xs"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all shadow-xs"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-all shadow-xs"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Bottom Bar - Compact Height */}
        <div className="w-full border-t border-border pt-5 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. {t('footer.rights') || 'Hak cipta dilindungi.'}</p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-medium">
            <a href="#changelog" className="hover:text-foreground transition-colors">{t('footer.changelog') || 'Changelog'}</a>
            <a href="#gear" className="hover:text-foreground transition-colors">{t('footer.gear') || 'Gear & Setup'}</a>
            <a href="#inspiration" className="hover:text-foreground transition-colors">{t('footer.inspiration') || 'Inspirasi Website'}</a>
            <a href="#privacy" className="hover:text-foreground transition-colors">{t('footer.privacy') || 'Kebijakan Privasi'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


