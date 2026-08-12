import React from 'react';
import { skillsData } from '../../data/skills';
import { MockupRenderer } from './SkillsMockups';
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
    <IconComponent className="w-3.5 h-3.5 text-gray-500 dark:text-neutral-400 group-hover/tag:text-blue-600 dark:group-hover/tag:text-blue-400 transition-colors" />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
            {skillsData.title}
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {skillsData.subtitle}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0e1117] rounded-2xl border border-gray-200 dark:border-[#1d2433] hover:border-gray-300 dark:hover:border-[#2b374e] transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-lg dark:shadow-none hover:-translate-y-1"
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
                        {item.badge}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/90 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 dark:bg-[#181d28] border border-gray-200 dark:border-[#263044] hover:border-gray-300 dark:hover:border-[#3b82f6]/40 text-gray-800 dark:text-neutral-300 text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors group/tag cursor-default"
                    >
                      <TagIcon iconKey={tag.icon} />
                      <span className="font-medium text-[11px] text-gray-800 dark:text-neutral-300">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
