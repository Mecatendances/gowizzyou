'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { LayoutGrid, Clock, FileSpreadsheet, BarChart3 } from 'lucide-react';

export function Showcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sky-light/50 to-cream" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Project table mockup */}
          <AnimateOnScroll direction="left">
            <Card className="bg-card/90 backdrop-blur-sm shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Projets livres</h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-cream-dark rounded-lg px-3 py-1.5 text-sm text-text-muted">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Rechercher...
                  </div>
                  <span className="text-xs text-text-muted bg-cream-dark rounded-md px-2 py-1">EN COURS &middot; 5</span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-hidden">
                <div className="grid grid-cols-4 gap-4 text-xs font-medium text-text-muted uppercase tracking-wider pb-3 border-b border-border-light">
                  <span>Projet</span>
                  <span>Stack</span>
                  <span>Client</span>
                  <span>Statut</span>
                </div>
                {[
                  { name: 'Plateforme NOLT', stack: 'Next.js / NestJS', client: 'Sport', status: 'Production', statusColor: 'bg-success' },
                  { name: 'Matching IA', stack: 'n8n / pgvector', client: 'RH', status: 'Production', statusColor: 'bg-success' },
                  { name: 'Portail Runner', stack: 'Angular / NestJS', client: 'Portage', status: 'Production', statusColor: 'bg-success' },
                  { name: 'WizzyMatch', stack: 'FastAPI / React', client: 'Recrutement', status: 'Production', statusColor: 'bg-success' },
                  { name: 'Agent Inspiration', stack: 'n8n / Pinecone', client: 'Sport', status: 'Actif', statusColor: 'bg-accent' },
                ].map((project) => (
                  <div key={project.name} className="grid grid-cols-4 gap-4 py-3 border-b border-border-light/50 text-sm">
                    <span className="font-medium text-text-primary">{project.name}</span>
                    <span className="text-text-muted text-xs">{project.stack}</span>
                    <span className="text-text-secondary">{project.client}</span>
                    <span className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${project.statusColor}`} />
                      <span className="text-xs">{project.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </AnimateOnScroll>

          {/* Right: Description */}
          <AnimateOnScroll direction="right">
            <div>
              <SectionLabel>Expertise prouvee</SectionLabel>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
                Des projets
                <br />
                en production
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Pas de demos, pas de POC abandonnes. Chaque projet est concu pour durer :
                Clean Architecture, DDD, tests, securite OWASP et deploiement automatise.
              </p>
              <Button href="/realisations">
                Voir les realisations
              </Button>

              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { icon: LayoutGrid, label: 'Clean Architecture' },
                  { icon: Clock, label: 'Livraison rapide' },
                  { icon: FileSpreadsheet, label: 'Documentation' },
                  { icon: BarChart3, label: 'Metriques & KPIs' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-card/60 rounded-xl px-4 py-3 border border-border-light/50"
                  >
                    <Icon size={18} className="text-text-muted shrink-0" />
                    <span className="text-sm font-medium text-text-primary">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
