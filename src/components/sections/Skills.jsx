import React from 'react';
import { skillsCategories } from '../../data/skills';
import { Code, Server, Wrench, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Keahlian & Spesialisasi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan alat yang saya gunakan sehari-hari untuk membangun produk digital berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {idx === 0 ? <Code className="w-6 h-6" /> : idx === 1 ? <Server className="w-6 h-6" /> : <Wrench className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold">{cat.category}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-xs">{skill.level}</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
