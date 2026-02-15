'use client';

import { Zap, Code2, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Zap,
  Code2,
  Rocket,
} as const;

export function Services() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <SectionLabel>Un partenaire, trois expertises</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-text-primary leading-tight">
              Tout ce qu&apos;il vous faut
              <br />
              pour avancer
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Automatisation, developpement sur-mesure ou transformation globale.
              Choisissez ce qui correspond a votre besoin.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimateOnScroll key={service.id} delay={i * 0.15}>
                <Card hover className="h-full flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream mb-6">
                    <Icon size={24} className="text-text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="h-4 w-4 text-success shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border-light">
                    <p className="text-xs text-text-muted">{service.priceLabel}</p>
                    <p className="text-2xl font-bold text-text-primary">
                      {service.price} <span className="text-sm font-normal text-text-muted">{service.priceSuffix}</span>
                    </p>
                  </div>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="/offres"
              className="text-sm font-medium text-text-primary underline underline-offset-4 hover:text-accent transition-colors"
            >
              Voir le detail des offres &rarr;
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
