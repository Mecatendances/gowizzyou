'use client';

import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { Users, Globe, Shield } from 'lucide-react';

const AI_TOOLS = [
  { name: 'Claude', abbr: 'Cl', accent: true },
  { name: 'GPT-4', abbr: 'G4', accent: false },
  { name: 'n8n', abbr: 'n8', accent: false },
  { name: 'RAG', abbr: 'RA', accent: false },
  { name: 'Cursor', abbr: 'Cu', accent: false },
];

// Simple Icons CDN for real brand SVGs
const icon = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`;

const INTEGRATIONS = [
  { name: 'Stripe', src: icon('stripe', '#635BFF') },
  { name: 'Notion', src: icon('notion', 'FFFFFF') },
  { name: 'Slack', src: icon('slack', '#4A154B') },
  { name: 'n8n', src: icon('n8n', '#EA4B71') },
  { name: 'Dynamics 365', src: icon('dynamics365', '4A90D9') },
  { name: 'AWS', src: icon('amazonwebservices', '#FF9900') },
  { name: 'Brevo', src: icon('brevo', '#0B996E') },
  { name: 'Make', src: icon('make', '#6D00CC') },
  { name: 'Zapier', src: icon('zapier', '#FF4A00') },
  { name: 'Docker', src: icon('docker', '#2496ED') },
  { name: 'Vercel', src: icon('vercel', 'FFFFFF') },
  { name: 'PostgreSQL', src: icon('postgresql', '#4169E1') },
];

export function Features() {
  return (
    <section className="relative py-24 sky-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <SectionLabel>EXPERTISE</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mt-4">
            La tech au service de votre business
          </h2>
        </div>

        {/* Two large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Card 1: IA-first */}
          <AnimateOnScroll delay={0}>
            <Card className="h-full bg-card/70 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-text-primary mb-3 leading-tight">
                IA-first : on code avec
                <br />
                l&apos;intelligence artificielle
              </h3>

              {/* AI tool badges */}
              <div className="flex flex-wrap items-center gap-3 my-6">
                {AI_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border-2 transition-colors ${
                      tool.accent
                        ? 'bg-accent text-white border-accent'
                        : 'bg-card text-text-secondary border-border hover:border-accent/30'
                    }`}
                  >
                    <span className="text-xs opacity-60">{tool.abbr}</span>
                    {tool.name}
                  </div>
                ))}
              </div>

              <p className="text-text-secondary leading-relaxed">
                Claude Code, GPT-4, RAG, embeddings, agents IA — on utilise les meilleurs outils
                pour livrer plus vite et plus intelligemment. Votre avantage concurrentiel, c&apos;est aussi le notre.
              </p>
            </Card>
          </AnimateOnScroll>

          {/* Card 2: Integrations */}
          <AnimateOnScroll delay={0.15}>
            <Card className="h-full bg-card/70 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-text-primary mb-3 leading-tight">
                S&apos;integre avec les outils
                <br />
                que vous utilisez deja
              </h3>

              {/* Integration icons — horizontal infinite scroll with real SVGs */}
              <div className="my-8 overflow-hidden" style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              }}>
                <div className="flex gap-8 animate-scroll-left w-max">
                  {[...INTEGRATIONS, ...INTEGRATIONS].map((tool, i) => (
                    <div key={`${tool.name}-${i}`} className="flex flex-col items-center gap-2 shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-card border border-border-light/50 p-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={tool.src} alt={tool.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[10px] text-text-muted">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed">
                Stripe, Dynamics 365, Brevo, Notion, Slack, AWS et plus encore.
                On connecte vos outils existants pour un ecosysteme fluide, sans friction.
              </p>
            </Card>
          </AnimateOnScroll>
        </div>

        {/* Three small cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: 'Un vrai partenaire',
              description: 'On comprend votre metier avant de coder. Chaque projet commence par l\'ecoute, pas par le clavier.',
            },
            {
              icon: Globe,
              title: 'Deploiement rapide',
              description: 'Livraison en semaines, pas en mois. L\'IA accelere notre dev sans compromettre la qualite.',
            },
            {
              icon: Shield,
              title: 'Securite grade A+',
              description: 'OWASP Top 10, RGPD, Clean Code. Chaque ligne est pensee pour durer et resister aux attaques.',
            },
          ].map(({ icon: Icon, title, description }, i) => (
            <AnimateOnScroll key={title} delay={i * 0.1}>
              <Card className="h-full bg-card/60 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
