import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import { Quote } from 'lucide-react';
import { useLanguage } from '../../i18n';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item, idx) => {
            const content = t(`testimonials.items.${idx}.content`) || item.content;
            const name = t(`testimonials.items.${idx}.name`) || item.name;
            const role = t(`testimonials.items.${idx}.role`) || item.role;
            const company = t(`testimonials.items.${idx}.company`) || item.company;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                <p className="text-muted-foreground italic text-base leading-relaxed relative z-10">
                  "{content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={item.avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{name}</h4>
                    <p className="text-xs text-muted-foreground">{role} - {company}</p>
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
