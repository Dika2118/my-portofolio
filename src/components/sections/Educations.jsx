import React from 'react';
import { educationData } from '../../data/education';
import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../../i18n';

export default function Educations() {
  const { t } = useLanguage();

  return (
    <section id="educations" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('education.title')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => {
            const degree = t(`education.items.${idx}.degree`) || edu.degree;
            const institution = t(`education.items.${idx}.institution`) || edu.institution;
            const period = t(`education.items.${idx}.period`) || edu.period;
            const description = t(`education.items.${idx}.description`) || edu.description;
            const achievements = t(`education.items.${idx}.achievements`) || edu.achievements;

            return (
              <div
                key={edu.id}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {period}
                  </span>
                  <h3 className="text-xl font-bold">{degree}</h3>
                  <p className="text-sm font-medium text-primary">{institution}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                {Array.isArray(achievements) && (
                  <div className="pt-4 border-t border-border space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-primary" /> {t('education.achievementsHeading')}
                    </h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {achievements.map((item, itemIdx) => (
                        <li key={itemIdx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
