'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { Button } from '@/components/ui/Button';
import { REALISATIONS, CATEGORIES } from '@/lib/constants';

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered =
    activeCategory === 'Tous'
      ? REALISATIONS
      : REALISATIONS.filter((r) => r.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-cream text-center">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Des projets en production,
              <br />
              pas des demos
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
              Plateformes, apps metiers, IA, automatisation — tout est en production,
              utilise au quotidien par de vraies equipes.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-card text-text-secondary border border-border hover:bg-cream-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <AnimateOnScroll key={project.id} delay={i * 0.1}>
                <Card hover className="h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="bg-gradient-to-br from-sky-light to-sky rounded-xl h-48 mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-sky-dark/40">{project.title.split(' ')[0]}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-text-primary mb-3">{project.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-cream-dark px-2.5 py-1 rounded-md text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border-light">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-1.5">
                        <svg className="h-3.5 w-3.5 text-success shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-text-secondary">{metric}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-cream to-sky-light/30">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Un projet similaire en tete ?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Discutons-en. 30 minutes pour comprendre votre besoin et vous proposer la bonne approche.
            </p>
            <Button href="/contact" size="lg">
              Prendre rendez-vous
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
