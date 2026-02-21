'use client';

import { useState, type FormEvent } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { Play, Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function WebinairePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/webinar/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: mark as submitted anyway for UX
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-light via-sky/40 to-cream" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <AnimateOnScroll>
                <div className="inline-flex items-center gap-2 bg-card/80 rounded-full px-4 py-2 mb-6 border border-border-light">
                  <Play size={14} className="text-accent" />
                  <span className="text-sm font-medium text-text-secondary">Webinaire gratuit</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
                  Comment Claude Code peut devenir votre meilleur allie
                </h1>

                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Decouvrez en live comment on utilise l&apos;IA au quotidien pour gerer nos projets,
                  automatiser nos workflows et livrer 3x plus vite. Demo pratique avec Notion + MCP + Claude Code.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Calendar, text: 'Prochain live : bientot' },
                    { icon: Clock, text: 'Duree : 45 minutes' },
                    { icon: Users, text: 'Places limitees' },
                    { icon: Play, text: 'Replay disponible' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-text-secondary">
                      <Icon size={16} className="text-accent shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Form */}
            <AnimateOnScroll direction="right">
              <Card className="bg-card shadow-xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Inscription confirmee !</h3>
                    <p className="text-text-secondary">
                      Vous recevrez un email avec le lien d&apos;acces avant le live.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Reservez votre place
                    </h3>
                    <p className="text-sm text-text-secondary mb-6">
                      Gratuit, sans engagement. On vous envoie le lien par email.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        id="name"
                        label="Prenom"
                        placeholder="Votre prenom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="given-name"
                      />
                      <Input
                        id="email"
                        type="email"
                        label="Email professionnel"
                        placeholder="vous@entreprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                      />
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Inscription...' : 'S\'inscrire gratuitement'}
                      </Button>
                      <p className="text-xs text-text-muted text-center">
                        Vos donnees ne seront jamais partagees. Desinscription en un clic.
                      </p>
                    </form>
                  </>
                )}
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <SectionLabel>Au programme</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
                Ce que vous allez decouvrir
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {[
              {
                title: 'Setup Notion + MCP Servers',
                description: 'Comment on organise tout notre business dans Notion avec des serveurs MCP connectes a Claude.',
              },
              {
                title: 'Claude Code en action',
                description: 'Demo live : comment on genere du code, des specs, des analyses et des automations en quelques minutes.',
              },
              {
                title: 'Workflows d\'automatisation',
                description: 'Comment on orchestre n8n, Make et les APIs pour automatiser les taches repetitives du quotidien.',
              },
              {
                title: 'Livraison 3x plus rapide',
                description: 'Les techniques concretes qui nous permettent de livrer des projets en semaines au lieu de mois.',
              },
              {
                title: 'Q&A en direct',
                description: 'Posez vos questions, on y repond en live. Pas de slides marketing, que du concret.',
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.05}>
                <Card padding="md" className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-accent font-semibold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.description}</p>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
