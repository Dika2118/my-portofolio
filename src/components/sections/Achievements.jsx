import React from 'react';
import { Trophy, Star, Medal, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n';

const achievementsIcons = [Trophy, Star, Medal];

export default function Achievements() {
  const { t } = useLanguage();

  const achievementsList = [0, 1, 2].map((idx) => ({
    id: idx + 1,
    title: t(`achievements.items.${idx}.title`),
    issuer: t(`achievements.items.${idx}.issuer`),
    year: t(`achievements.items.${idx}.year`),
    description: t(`achievements.items.${idx}.description`),
    icon: achievementsIcons[idx] || Trophy,
  }));

  return (
    <section id="achievements" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> {t('achievements.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('achievements.title')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('achievements.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsList.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-xs font-semibold text-primary">{item.issuer}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
