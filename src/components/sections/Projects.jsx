import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/icons';
import { useLanguage } from '../../i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const toggleShowAll = () => {
    if (showAll) {
      const section = document.getElementById('projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-20 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left space-y-4 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-sans whitespace-pre-line">
            {t('projects.title')}
          </h2>
          {t('projects.subtitle') && (
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              {t('projects.subtitle')}
            </p>
          )}
        </div>

        {/* Horizontal Peek Carousel on Mobile, Grid on Tablet/Desktop */}
        <motion.div
          layout
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 scrollbar-none [scroll-padding-left:1rem]"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => {
              const projectTitle = t(`projects.items.${idx}.title`) || project.title;
              const projectDesc = t(`projects.items.${idx}.description`) || project.description;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.35, delay: idx < 3 ? 0 : (idx - 3) * 0.08 }}
                  className="w-[84vw] max-w-[340px] sm:w-[360px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink group rounded-2xl border border-gray-200 dark:border-[#1d2433] bg-white dark:bg-[#0e1117] overflow-hidden shadow-xs hover:shadow-lg dark:shadow-none transition-all flex flex-col justify-between md:hover:-translate-y-1"
                >
                  {/* Image Preview */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-[#12151c]">
                    <img
                      src={project.image}
                      alt={projectTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white dark:bg-blue-500/20 dark:text-blue-400 border border-blue-500/30 backdrop-blur-xs">
                        {t('projects.featured')}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {projectTitle}
                      </h3>
                      <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3">
                        {projectDesc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-[#181d28] border border-gray-200 dark:border-[#263044] text-gray-700 dark:text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-[#1d2433]">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" /> {t('projects.liveDemo')}
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" /> {t('projects.code')}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button: Lihat semua proyek */}
        {projectsData.length > 3 && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-300 dark:border-neutral-800 bg-white dark:bg-[#090b0e] text-gray-900 dark:text-white font-semibold text-xs sm:text-sm shadow-xs hover:bg-gray-50 dark:hover:bg-neutral-800/90 hover:border-gray-400 dark:hover:border-neutral-700 transition-all duration-300 group cursor-pointer"
            >
              <span>
                {showAll
                  ? (t('projects.showLess') || 'Sembunyikan proyek')
                  : (t('projects.viewAll') || 'Lihat semua proyek')}
              </span>
              <ArrowRight
                className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${
                  showAll ? '-rotate-90 text-blue-500' : 'group-hover:translate-x-1'
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

