import React from 'react';
import { experiencesData } from '../../data/experiences';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experiences() {
  return (
    <section id="experiences" className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pengalaman Kerja</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Perjalanan karir profesional dan kontribusi saya di industri teknologi.
          </p>
        </div>

        <div className="relative border-l-2 border-primary/30 pl-6 ml-4 md:ml-8 space-y-12">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Dot Icon */}
              <div className="absolute -left-8.75 top-0 p-1.5 rounded-full bg-background border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="space-y-3 bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-primary">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>

                {exp.responsibilities && (
                  <ul className="list-disc list-inside space-y-1 pt-2 text-sm text-muted-foreground">
                    {exp.responsibilities.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
