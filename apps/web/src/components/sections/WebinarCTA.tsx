'use client';

import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { Play, Calendar } from 'lucide-react';

export function WebinarCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sky-light to-cream" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 bg-card/80 rounded-full px-4 py-2 mb-6 border border-border-light">
            <Play size={14} className="text-accent" />
            <span className="text-sm font-medium text-text-secondary">Webinaire gratuit</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
            Comment Claude Code peut devenir
            <br />
            votre meilleur allie au quotidien
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Decouvrez comment on utilise l&apos;IA au quotidien pour gerer nos projets,
            automatiser nos workflows et livrer 3x plus vite. Demo live avec Notion + MCP + Claude Code.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/webinaire" size="lg">
              <Calendar size={18} />
              S&apos;inscrire au prochain live
            </Button>
            <Button href="/webinaire#replay" variant="secondary" size="lg">
              Voir le replay
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
