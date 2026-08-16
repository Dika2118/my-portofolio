import React from 'react';
import { experiencesData } from '../../data/experiences';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../../i18n';

export default function Experiences() {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('experiences.title')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('experiences.subtitle')}
          </p>
        </div>

        <div className="relative border-l-2 border-primary/30 pl-6 ml-4 md:ml-8 space-y-12">
          {experiencesData.map((exp, idx) => {
            const role = t(`experiences.items.${idx}.role`) || exp.role;
            const company = t(`experiences.items.${idx}.company`) || exp.company;
            const period = t(`experiences.items.${idx}.period`) || exp.period;
            const description = t(`experiences.items.${idx}.description`) || exp.description;
            const responsibilities = t(`experiences.items.${idx}.responsibilities`) || exp.responsibilities;

            return (
              <div key={exp.id} className="relative group">
                {/* Dot Icon */}
                <div className="absolute -left-8.75 top-0 p-1.5 rounded-full bg-background border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Briefcase className="w-4 h-4" />
                </div>

                <div className="space-y-3 bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground">{role}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-primary">{company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

                  {Array.isArray(responsibilities) && (
                    <ul className="list-disc list-inside space-y-1 pt-2 text-sm text-muted-foreground">
                      {responsibilities.map((res, resIdx) => (
                        <li key={resIdx}>{res}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
