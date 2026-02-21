'use client';

import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center sky-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <AnimateOnScroll delay={0.1}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
            Propulsez votre
            <br />
            business avec la tech
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed mb-10">
            Un partenaire pour vos projets tech, vos automatisations et votre transformation digitale.
            De la premiere idee a la mise en production, on avance avec vous.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/offres" size="lg">
              Voir les offres
              <ArrowRight size={18} />
            </Button>
            <Button href="/webinaire" variant="secondary" size="lg">
              <Play size={18} />
              Webinaire gratuit
            </Button>
          </div>
        </AnimateOnScroll>

        {/* Terminal / Code mockup */}
        <AnimateOnScroll delay={0.5}>
          <div className="mt-16 mx-auto max-w-5xl">
            <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border-light shadow-2xl shadow-accent/5 overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-cream-dark/60 border-b border-border-light">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-card rounded-md px-3 py-1 text-xs text-text-muted text-center border border-border-light/50">
                    terminal — gowizzyou-deploy
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 divide-x divide-border-light/50">
                {/* Left: Terminal */}
                <div className="p-6 bg-[#1a1b26] text-left font-mono text-sm">
                  <div className="space-y-2">
                    <p className="text-green-400">$ gowizzyou deploy --prod</p>
                    <p className="text-gray-400">→ Building application...</p>
                    <p className="text-gray-400">→ Running tests... <span className="text-green-400">47/47 passed</span></p>
                    <p className="text-gray-400">→ Optimizing assets...</p>
                    <p className="text-gray-400">→ Deploying to production...</p>
                    <p className="text-green-400 font-medium mt-3">✓ Deploy successful!</p>
                    <div className="mt-3 pt-3 border-t border-gray-700 space-y-1">
                      <p className="text-gray-500">  URL      <span className="text-accent">https://client.com</span></p>
                      <p className="text-gray-500">  Build    <span className="text-gray-300">2.3s</span></p>
                      <p className="text-gray-500">  Score    <span className="text-green-400">98/100</span></p>
                    </div>
                  </div>
                </div>

                {/* Right: Stack & Results */}
                <div className="p-6 space-y-5">
                  <div>
                    <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">Stack deploye</p>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'n8n', 'Stripe'].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-cream-dark rounded-md text-xs font-medium text-text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-cream-dark/50 rounded-xl p-3 border border-border-light/50">
                      <p className="text-xs text-text-muted">Performance</p>
                      <p className="text-xl font-bold text-success">98<span className="text-sm font-normal text-text-muted">/100</span></p>
                    </div>
                    <div className="bg-cream-dark/50 rounded-xl p-3 border border-border-light/50">
                      <p className="text-xs text-text-muted">Securite</p>
                      <p className="text-xl font-bold text-success">A+</p>
                    </div>
                    <div className="bg-cream-dark/50 rounded-xl p-3 border border-border-light/50">
                      <p className="text-xs text-text-muted">Uptime</p>
                      <p className="text-xl font-bold text-text-primary">99.9<span className="text-sm font-normal text-text-muted">%</span></p>
                    </div>
                    <div className="bg-cream-dark/50 rounded-xl p-3 border border-border-light/50">
                      <p className="text-xs text-text-muted">Temps de charge</p>
                      <p className="text-xl font-bold text-text-primary">0.8<span className="text-sm font-normal text-text-muted">s</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
