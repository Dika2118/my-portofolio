import React from 'react';
import { PERSONAL_INFO } from '../../lib/constants';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/icons';
import { useLanguage } from '../../i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg">{PERSONAL_INFO.name}</h3>
          <p className="text-muted-foreground text-sm mt-1">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. {t('footer.rights')}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
