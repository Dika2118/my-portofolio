import React from 'react';
import { achievementsData } from '../../data/achievements';
import { useLanguage } from '../../i18n';
import { ArrowRight, Flame, Plus, Award } from 'lucide-react';
import { motion } from 'framer-motion';

function IssuerLogo({ logoType, issuer }) {
  if (logoType === 'logokomdigi' || logoType === 'komdigi') {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center shrink-0 shadow-xs p-1 overflow-hidden">
        <img src="/images/logokomdigi.png" alt={issuer || 'KOMDIGI'} className="w-full h-full object-contain rounded-full" />
      </div>
    );
  }
  if (logoType === 'aws') {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center shrink-0 shadow-xs p-1 overflow-hidden">
        <img src="/images/aws.png" alt={issuer || 'AWS'} className="w-full h-full object-contain rounded-full" />
      </div>
    );
  }
  if (logoType === 'ccdt') {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center shrink-0 shadow-xs p-0.5 overflow-hidden">
        <img src="/images/ccdt.jpeg" alt={issuer || 'UKM Computer Club'} className="w-full h-full object-cover rounded-full" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 text-white font-bold text-xs">
      <Award className="w-4 h-4 text-blue-400" />
    </div>
  );
}

export default function Achievements() {
  const { t, language } = useLanguage();

  return (
    <section id="achievements" className="py-20 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="text-left space-y-4 mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
            {t('achievements.title') || 'Pencapaian'}
          </h2>
        </div>

        {/* Certificate Card Carousel on Mobile, 3-Col Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-6 sm:gap-8 scrollbar-none [scroll-padding-left:1rem]">
          {achievementsData.map((item, idx) => {
            const getTrans = (key, fallback) => {
              const res = t(key);
              return (res && typeof res === 'string' && !res.startsWith('achievements.items.')) ? res : fallback;
            };

            const title = getTrans(`achievements.items.${idx}.title`, item.title);
            const issuer = getTrans(`achievements.items.${idx}.issuer`, item.issuer);
            const category = language === 'en'
              ? (item.categoryEn || item.category)
              : getTrans(`achievements.items.${idx}.category`, item.category);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-[84vw] max-w-[340px] sm:w-[360px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink group flex flex-col justify-between"
              >
                {/* Certificate Image Preview Box */}
                <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-[#090b0e] shadow-xs group-hover:border-gray-300 dark:group-hover:border-neutral-700 transition-all duration-300 flex items-center justify-center p-2.5 sm:p-3">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Metadata Row below image */}
                <div className="mt-3.5 flex items-center justify-between gap-3 px-1">
                  <div className="flex items-center gap-3 min-w-0">
                    <IssuerLogo logoType={item.logoType} issuer={issuer} />

                    <div className="min-w-0 space-y-0.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white truncate tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                        <span className="font-semibold text-gray-700 dark:text-neutral-300 truncate">
                          {issuer}
                        </span>
                        <span className="text-neutral-400 dark:text-neutral-600">•</span>
                        <span className="px-2 py-0.5 rounded-md bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold text-[11px] shrink-0">
                          {category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Reaction / Action Button on right */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {item.reactionType === 'fire' ? (
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800/80 text-xs font-semibold text-gray-800 dark:text-neutral-200 border border-gray-200 dark:border-neutral-700/60 shadow-xs">
                        <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{item.reactions || 1}</span>
                        <Plus className="w-3 h-3 text-neutral-400 ml-0.5" />
                      </div>
                    ) : (
                      <button
                        className="p-1.5 rounded-full text-neutral-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Add reaction"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Action Button: Lihat semua pencapaian */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#achievements"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-800 bg-white dark:bg-[#090b0e] text-gray-900 dark:text-white font-semibold text-xs sm:text-sm shadow-xs hover:bg-gray-50 dark:hover:bg-neutral-800/90 hover:border-gray-400 dark:hover:border-neutral-700 transition-all duration-300 group"
          >
            <span>{t('achievements.viewAll') || 'Lihat semua pencapaian'}</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

