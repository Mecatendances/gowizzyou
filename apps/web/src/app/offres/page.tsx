'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { PACKS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

const PACK_KEYS = ['automatisation', 'appMetier', 'transformation'] as const;

const FAQ = [
  {
    question: 'Quels sont les delais de livraison ?',
    answer: 'Ca depend du pack. Un sprint automatisation se livre en 1 semaine. Un MVP en 4-6 semaines. Une plateforme complete en 12-20 semaines. On s\'engage sur les delais au lancement.',
  },
  {
    question: 'Je ne sais pas quel pack choisir, comment faire ?',
    answer: 'Prenez un rendez-vous gratuit de 30 minutes. On ecoute votre besoin et on vous oriente vers la bonne formule. Pas de pression, pas de commercial — juste un echange technique.',
  },
  {
    question: 'Les prix incluent-ils la maintenance ?',
    answer: 'Oui, chaque pack inclut une periode de support post-livraison (de 2 semaines a 6 mois selon la formule). Au-dela, on propose un forfait de maintenance adapte.',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Next.js et NestJS pour le web, n8n et Make pour l\'automatisation, PostgreSQL pour les donnees, AWS pour l\'hebergement. Tout en Clean Architecture DDD, teste et documente.',
  },
  {
    question: 'Peut-on commencer petit et evoluer ensuite ?',
    answer: 'C\'est exactement l\'idee. Le tunnel est concu pour ca : Sprint auto → App metier → Transformation. Chaque pack ouvre la porte au suivant.',
  },
  {
    question: 'Travaillez-vous en remote ?',
    answer: 'Oui, 100% remote. On travaille depuis Toulouse avec des clients partout en France (Paris, Rennes, Nantes, Marseille). Les points se font en visio.',
  },
];

export default function OffresPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-cream text-center">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <SectionLabel>Nos offres</SectionLabel>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Des offres claires,
              <br />
              des resultats concrets
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
              Trois expertises, des prix affiches, des livrables garantis.
              Choisissez ce qui correspond a votre besoin et votre budget.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Packs */}
      {PACK_KEYS.map((key, packIndex) => {
        const pack = PACKS[key];
        return (
          <section
            key={key}
            id={key === 'appMetier' ? 'app-metier' : key}
            className={`py-20 ${packIndex % 2 === 0 ? 'bg-cream' : 'bg-cream-dark/20'}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <AnimateOnScroll>
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">{pack.title}</h2>
                  <p className="mt-3 text-lg text-text-secondary">{pack.subtitle}</p>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pack.tiers.map((tier, i) => (
                  <AnimateOnScroll key={tier.name} delay={i * 0.1}>
                    <Card
                      className={`h-full flex flex-col ${
                        tier.highlighted
                          ? 'bg-accent-light/40 border-accent/20 shadow-lg relative'
                          : ''
                      }`}
                    >
                      {'badge' in tier && tier.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge variant="success">{tier.badge}</Badge>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-text-primary mb-1">{tier.name}</h3>
                      <div className="mb-3">
                        <span className="text-4xl font-bold text-text-primary">{tier.price}</span>
                        <span className="text-sm text-text-muted ml-1">EUR HT{tier.period}</span>
                      </div>
                      <p className="text-sm text-text-secondary mb-6">{tier.description}</p>
                      <ul className="space-y-2.5 mb-8 flex-1">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                            <svg className="h-4 w-4 text-success mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        href="/contact"
                        variant={tier.highlighted ? 'primary' : 'secondary'}
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </Card>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
                Questions frequentes
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-border-light overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-medium text-text-primary pr-4">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-text-muted shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
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
              Pret a avancer ?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              30 minutes de discussion pour comprendre votre besoin. Sans engagement.
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
