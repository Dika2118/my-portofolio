import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Testimoni & Rekomendasi</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Apa yang dikatakan oleh rekan kerja, atasan, dan klien mengenai hasil kolaborasi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              <p className="text-muted-foreground italic text-base leading-relaxed relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role} - {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
