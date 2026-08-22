import React, { useState } from 'react';
import { experiencesData } from '../../data/experiences';
import { Calendar, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { motion, AnimatePresence } from 'framer-motion';

function FormattedText({ text }) {
  if (!text) return null;
  // Regex to match **bold** and `code` pills
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index} className="font-bold text-gray-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={index}
              className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-mono text-xs px-2 py-0.5 rounded-md border border-blue-500/20 inline-block my-0.5 mx-0.5"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      })}
    </span>
  );
}

function CompanyLogo({ logoType, company }) {
  if (logoType === 'STI' || logoType === 'sintek' || logoType === 'logosintek') {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center shrink-0 shadow-md p-1.5 overflow-hidden">
        <img src="/images/logosintek.png" alt={company || 'Sintek'} className="w-full h-full object-contain rounded-full" />
      </div>
    );
  }
  if (logoType === 'diskominfo' || logoType === 'komdigi' || logoType === 'logokomdigi') {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center shrink-0 shadow-md p-1.5 overflow-hidden">
        <img src="/images/logokomdigi.png" alt={company || 'KOMDIGI'} className="w-full h-full object-contain rounded-full" />
      </div>
    );
  }
  if (logoType === 'blibli') {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 shadow-md">
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-[#0095da] fill-current">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z" />
        </svg>
      </div>
    );
  }
  if (logoType === 'spi') {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0052cc] border border-blue-600 flex items-center justify-center shrink-0 shadow-md">
        <span className="font-black text-white italic tracking-tighter text-sm sm:text-base">SPI</span>
      </div>
    );
  }
  if (typeof logoType === 'string' && (logoType.startsWith('/') || logoType.startsWith('http'))) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center shrink-0 shadow-md p-1.5 overflow-hidden">
        <img src={logoType} alt={company} className="w-full h-full object-contain rounded-full" />
      </div>
    );
  }
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 text-white font-bold">
      {company ? company.charAt(0) : 'E'}
    </div>
  );
}

export default function Experiences() {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState(1); // Item 1 expanded by default

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experiences" className="py-20 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="text-left space-y-4 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
            {t('experiences.title')}
          </h2>
        </div>

        {/* Accordion Experience List */}
        <div className="space-y-4">
          {experiencesData.map((exp, idx) => {
            const getTrans = (key, fallback) => {
              const res = t(key);
              return (res && typeof res === 'string' && !res.startsWith('experiences.items.')) ? res : fallback;
            };

            const role = getTrans(`experiences.items.${idx}.role`, exp.role);
            const company = getTrans(`experiences.items.${idx}.company`, exp.company);
            const period = getTrans(`experiences.items.${idx}.period`, exp.period);
            const location = getTrans(`experiences.items.${idx}.location`, exp.location);
            const workType = language === 'en' ? (exp.typeEn || exp.type) : getTrans(`experiences.items.${idx}.type`, exp.type);
            const rawContributions = t(`experiences.items.${idx}.contributions`);
            const contributions = Array.isArray(rawContributions) ? rawContributions : (language === 'en' ? exp.contributionsEn : exp.contributions);

            const isOpen = openId === exp.id;

            return (
              <div
                key={exp.id}
                className="bg-white dark:bg-[#090b0e] border border-gray-200 dark:border-neutral-800/90 rounded-2xl overflow-hidden shadow-xs transition-colors duration-300 hover:border-gray-300 dark:hover:border-neutral-700"
              >
                {/* Header (Clickable) */}
                <div
                  onClick={() => toggleAccordion(exp.id)}
                  className="p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <CompanyLogo logoType={exp.logoType} company={company} />

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        {role}
                      </h3>
                      <p className="text-sm font-bold text-gray-700 dark:text-neutral-300">
                        {company}
                      </p>

                      {/* Meta Info Row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 pt-0.5">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{period}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{location}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{workType}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors shrink-0">
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gray-900 dark:text-white' : ''
                        }`}
                    />
                  </div>
                </div>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-gray-100 dark:border-neutral-800/80 space-y-6">
                        {/* Contributions Section */}
                        {Array.isArray(contributions) && contributions.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase">
                              {t('experiences.contributionsLabel') || 'KONTRIBUSI :'}
                            </h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">
                              {contributions.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-2 shrink-0" />
                                  <div>
                                    <FormattedText text={item} />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Gallery Section (If Available) */}
                        {Array.isArray(exp.gallery) && exp.gallery.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase">
                              {t('experiences.galleryLabel') || 'GALERI :'}
                            </h4>
                            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none -mx-1 px-1">
                              {exp.gallery.map((imgUrl, i) => (
                                <div
                                  key={i}
                                  className="shrink-0 w-52 sm:w-64 h-36 sm:h-44 rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-neutral-900 shadow-sm group/img"
                                >
                                  <img
                                    src={imgUrl}
                                    alt={`Gallery ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
