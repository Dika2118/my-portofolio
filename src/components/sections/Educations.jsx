import React from 'react';
import { educationData } from '../../data/education';
import { GraduationCap, Award } from 'lucide-react';

export default function Educations() {
  return (
    <section id="educations" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pendidikan & Sertifikasi</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Latar belakang akademis dan pelatihan formal yang membentuk fondasi pengetahuan saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-sm font-medium text-primary">{edu.institution}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {edu.achievements && (
                <div className="pt-4 border-t border-border space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-primary" /> Pencapaian
                  </h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {edu.achievements.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
