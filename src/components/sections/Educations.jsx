import React from 'react';
import { educationData } from '../../data/education';
import { School, BookOpen, Laptop, GraduationCap, Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '../../i18n';
import { motion } from 'framer-motion';

function EducationIcon({ iconType, isOngoing }) {
  if (isOngoing || iconType === 'college') {
    return <Sparkles className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
  }
  if (iconType === 'school') {
    return <School className="w-5 h-5" />;
  }
  if (iconType === 'book') {
    return <BookOpen className="w-5 h-5" />;
  }
  if (iconType === 'laptop') {
    return <Laptop className="w-5 h-5" />;
  }
  return <GraduationCap className="w-5 h-5" />;
}

export default function Educations() {
  const { t } = useLanguage();

  return (
    <section id="educations" className="py-20 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Fade in from Left to Right on Scroll */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
            {t('education.title') || 'Pendidikan'}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            {t('education.subtitle') || 'Latar belakang akademis dan pendidikan formal yang membentuk fondasi pengetahuan serta keahlian saya.'}
          </p>
        </motion.div>

        {/* Timeline Container - Fade in from Bottom to Top on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Central Stem Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gray-200 dark:bg-neutral-800/80 rounded-full" />

          <div className="space-y-12 md:space-y-16">
            {educationData.map((edu, idx) => {
              const getTrans = (key, fallback) => {
                const res = t(key);
                return (res && typeof res === 'string' && !res.startsWith('education.items.')) ? res : fallback;
              };

              const level = getTrans(`education.items.${idx}.level`, edu.level);
              const degree = getTrans(`education.items.${idx}.degree`, edu.degree);
              const institution = getTrans(`education.items.${idx}.institution`, edu.institution);
              const period = getTrans(`education.items.${idx}.period`, edu.period);
              const status = getTrans(`education.items.${idx}.status`, edu.status);
              const description = getTrans(`education.items.${idx}.description`, edu.description);
              const isOngoing = edu.isOngoing;

              const isEven = idx % 2 === 0;

              return (
                <div key={edu.id} className="relative group">
                  {/* Central Node Circle */}
                  <div
                    className={`absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#090b0e] border-2 flex items-center justify-center shadow-md transition-all duration-300 ${
                      isOngoing
                        ? 'border-emerald-500 text-emerald-500 dark:border-emerald-400 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                        : 'border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-neutral-300 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:text-blue-500'
                    }`}
                  >
                    <EducationIcon iconType={edu.iconType} isOngoing={isOngoing} />
                  </div>

                  {/* Grid Layout: Desktop Left vs Right placement */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Left Side Content (if even) or Right Side (if odd) */}
                    <div className={`pl-14 md:pl-0 ${isEven ? 'md:pr-10 md:text-left' : 'md:col-start-2 md:pl-10'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className={`bg-white dark:bg-[#090b0e] border rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 ${
                          isOngoing
                            ? 'border-emerald-500/40 dark:border-emerald-500/30 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 shadow-[0_4px_20px_rgba(16,185,129,0.08)]'
                            : 'border-gray-200 dark:border-neutral-800/90 hover:border-gray-300 dark:hover:border-neutral-700'
                        }`}
                      >
                        {/* Badges Bar */}
                        <div className="flex flex-wrap items-center gap-2">
                          {/* Level Badge */}
                          {level && (
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-800/90 text-gray-700 dark:text-neutral-300 border border-gray-200/80 dark:border-neutral-700/60 font-mono">
                              {level}
                            </span>
                          )}

                          {/* Status Badge */}
                          {isOngoing ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              {status || 'Sedang Berjalan'}
                            </span>
                          ) : (
                            status && (
                              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-50 dark:bg-neutral-900 text-gray-500 dark:text-neutral-400 border border-gray-200/60 dark:border-neutral-800">
                                {status}
                              </span>
                            )
                          )}

                          {/* Date Period Badge */}
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-800/90 text-gray-600 dark:text-neutral-400 border border-gray-200/80 dark:border-neutral-700/60 font-mono ml-auto">
                            <Calendar className="w-3.5 h-3.5 text-gray-400 dark:text-neutral-500" />
                            <span>{period}</span>
                          </span>
                        </div>

                        {/* Title & Institution */}
                        <div className="space-y-1 pt-1">
                          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {degree}
                          </h3>
                          <p className="text-sm font-semibold text-gray-700 dark:text-neutral-300">
                            {institution}
                          </p>
                        </div>

                        {/* Description */}
                        {description && (
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 leading-relaxed pt-1">
                            {description}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

