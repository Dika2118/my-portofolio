import React from 'react';
import { projectsData } from '../../data/projects';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/icons';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
            Proyek Terbaru
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Beberapa karya terbaik yang telah saya selesaikan dengan fokus pada UX, kecepatan, dan skala.
          </p>
        </div>

        {/* Horizontal Peek Carousel on Mobile, Grid on Tablet/Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 scrollbar-none [scroll-padding-left:1rem]">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="w-[84vw] max-w-[340px] sm:w-[360px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink group rounded-2xl border border-gray-200 dark:border-[#1d2433] bg-white dark:bg-[#0e1117] overflow-hidden shadow-sm hover:shadow-lg dark:shadow-none transition-all flex flex-col justify-between md:hover:-translate-y-1"
            >
              {/* Image Preview */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-[#12151c]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white dark:bg-blue-500/20 dark:text-blue-400 border border-blue-500/30 backdrop-blur-xs">
                    Unggulan
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
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
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
