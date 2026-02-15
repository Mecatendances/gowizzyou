'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SERVICES } from '@/lib/constants';

export function PricingPreview() {
  return (
    <section className="py-24 bg-cream-dark/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <SectionLabel>Tarifs</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-text-primary">
              Des offres claires
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              Pas de devis mysterieux. Des prix affiches, des livrables concrets, des resultats mesurables.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const isMiddle = i === 1;
            return (
              <AnimateOnScroll key={service.id} delay={i * 0.15}>
                <Card
                  className={`h-full flex flex-col ${
                    isMiddle
                      ? 'bg-accent-light/50 border-accent/20 shadow-lg relative'
                      : ''
                  }`}
                >
                  {isMiddle && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="success">Populaire</Badge>
                    </div>
                  )}
                  <p className="text-sm font-medium text-text-muted mb-1">{service.title}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-text-primary">{service.price}</span>
                    <span className="text-sm text-text-muted ml-1">{service.priceSuffix}</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-6 flex-1">{service.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                        <svg className="h-4 w-4 text-success mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/offres"
                    variant={isMiddle ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    En savoir plus
                  </Button>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
