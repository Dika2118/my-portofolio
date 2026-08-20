import React from 'react';
import { skillsCategories } from '../../data/skills';
import { MockupRenderer } from './SkillsMockups';
import { useLanguage } from '../../i18n';
import {
  Crown,
  FileCode,
  Palette,
  Code2,
  Code,
  Globe,
  Server,
  Terminal,
  Flame,
  Smartphone,
  Layers,
  Box,
  Wrench,
  Cpu,
  Boxes,
  BookOpen,
  Layout,
  Sparkles,
  Workflow,
  ListChecks,
  FileText,
  Kanban,
  Grid,
  Cloud,
  Settings,
  Plus
} from 'lucide-react';

const iconMap = {
  html: FileCode,
  css: Palette,
  javascript: Code2,
  typescript: Code,
  vue: Code2,
  react: Code2,
  next: Globe,
  php: Server,
  node: Server,
  express: Terminal,
  laravel: Flame,
  codeigniter: Flame,
  kotlin: Smartphone,
  jetpack: Layers,
  android: Smartphone,
  sdk: Box,
  gradle: Wrench,
  mvvm: Cpu,
  figma: Layout,
  adobe: Palette,
  designsystem: Layers,
  tokenstudio: Boxes,
  styledictionary: BookOpen,
  wireframe: Layout,
  prototype: Sparkles,
  scrum: Workflow,
  jira: ListChecks,
  confluence: FileText,
  trello: Kanban,
  miro: Grid,
  linux: Terminal,
  docker: Box,
  gcp: Cloud,
  aws: Cloud,
  jenkins: Settings,
  githubactions: Workflow,
  nginx: Server,
  more: Plus
};

function TagIcon({ iconKey }) {
  const IconComponent = iconMap[iconKey] || Code;
  return (
    <IconComponent className="w-3.5 h-3.5 text-gray-500 dark:text-neutral-400" />
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Cards Layout: Horizontal Scroll Peek on Mobile, Grid on Tablet/Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 scrollbar-none [scroll-padding-left:1rem]">
          {skillsCategories.map((item) => {
            const categoryTitle = t(`skills.categories.${item.id}.title`);
            const categoryDesc = t(`skills.categories.${item.id}.description`);
            const badgeLabel = item.badgeType === 'expert' ? t('skills.badgeExpert') : t('skills.badgeIntermediate');

            return (
              <div
                key={item.id}
                className="w-[84vw] max-w-[340px] sm:w-[360px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink bg-white dark:bg-[#0e1117] rounded-2xl border border-gray-200 dark:border-[#1d2433] overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                {/* Card Top: UI Window Mockup */}
                <MockupRenderer id={item.id} />

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Badge */}
                    <div>
                      {item.badgeType === 'expert' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/90 border border-amber-300 text-amber-800 dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-400">
                          <Crown className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          {badgeLabel}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/90 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400">
                          {badgeLabel}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {categoryTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
                      {categoryDesc}
                    </p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-100 dark:bg-[#181d28] border border-gray-200 dark:border-[#263044] text-gray-800 dark:text-neutral-300 text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 cursor-default"
                      >
                        <TagIcon iconKey={tag.icon} />
                        <span className="font-medium text-[11px] text-gray-800 dark:text-neutral-300">{tag.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
