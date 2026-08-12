import React from 'react';
import { projectsData } from '../../data/projects';
import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from '../ui/icons';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Proyek Terbaru</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beberapa karya terbaik yang telah saya selesaikan dengan fokus pada UX, kecepatan, dan skala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    Unggulan
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2 border-t border-border">
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
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
