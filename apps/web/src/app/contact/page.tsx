'use client';

import { useState, type FormEvent } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { Mail, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';

const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL;

interface FormData {
  name: string;
  email: string;
  company: string;
  pack: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    pack: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-cream text-center">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateOnScroll>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Discutons de votre projet
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
              30 minutes pour comprendre votre besoin et vous proposer la bonne approche.
              Sans engagement, sans pression.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <AnimateOnScroll>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                      Deux facons de nous contacter
                    </h3>
                  </div>

                  <Card padding="md" className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light shrink-0">
                      <Calendar size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Prendre un RDV</h4>
                      <p className="text-sm text-text-secondary mb-3">
                        30 min de visio pour discuter de votre projet.
                      </p>
                      <a
                        href={CALCOM_URL || '#calendrier'}
                        target={CALCOM_URL ? '_blank' : undefined}
                        rel={CALCOM_URL ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        Choisir un creneau &rarr;
                      </a>
                    </div>
                  </Card>

                  <Card padding="md" className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light shrink-0">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Par email</h4>
                      <p className="text-sm text-text-secondary mb-3">
                        On repond sous 24h.
                      </p>
                      <a
                        href="mailto:contact@gowizzyou.com"
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        contact@gowizzyou.com
                      </a>
                    </div>
                  </Card>

                  <Card padding="md" className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-dark shrink-0">
                      <MessageSquare size={20} className="text-text-muted" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Formulaire</h4>
                      <p className="text-sm text-text-secondary">
                        Decrivez votre projet, on revient vers vous avec une proposition.
                      </p>
                    </div>
                  </Card>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimateOnScroll direction="right">
                <Card className="bg-card shadow-lg">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        Message envoye !
                      </h3>
                      <p className="text-text-secondary">
                        On revient vers vous sous 24h. En attendant, vous pouvez aussi
                        {' '}
                        <a href="/webinaire" className="text-accent hover:underline">
                          vous inscrire au webinaire gratuit
                        </a>
                        .
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input
                          id="name"
                          label="Nom complet"
                          placeholder="Jean Dupont"
                          value={form.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          required
                          autoComplete="name"
                        />
                        <Input
                          id="email"
                          type="email"
                          label="Email professionnel"
                          placeholder="jean@entreprise.com"
                          value={form.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          required
                          autoComplete="email"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Input
                          id="company"
                          label="Entreprise"
                          placeholder="Votre entreprise"
                          value={form.company}
                          onChange={(e) => updateField('company', e.target.value)}
                          autoComplete="organization"
                        />
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="pack" className="text-sm font-medium text-text-primary">
                            Pack qui vous interesse
                          </label>
                          <select
                            id="pack"
                            value={form.pack}
                            onChange={(e) => updateField('pack', e.target.value)}
                            className="rounded-xl border border-border bg-card px-4 py-3 text-base text-text-primary transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 [&>option]:bg-card"
                          >
                            <option value="">Selectionnez...</option>
                            <option value="automatisation">Pack 1 — Automatisation</option>
                            <option value="app-metier">Pack 2 — App metier</option>
                            <option value="transformation">Pack 3 — Transformation</option>
                            <option value="autre">Autre / Je ne sais pas</option>
                          </select>
                        </div>
                      </div>

                      <Textarea
                        id="message"
                        label="Decrivez votre projet"
                        placeholder="Parlez-nous de votre besoin, votre contexte, vos objectifs..."
                        value={form.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        required
                      />

                      <Button type="submit" size="lg" className="w-full" disabled={loading}>
                        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                      </Button>

                      <p className="text-xs text-text-muted text-center">
                        Vos donnees sont protegees et ne seront jamais partagees avec des tiers.
                      </p>
                    </form>
                  )}
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com embed */}
      {CALCOM_URL && (
        <section id="calendrier" className="py-16 bg-cream-dark/30">
          <div className="mx-auto max-w-4xl px-6">
            <AnimateOnScroll>
              <div className="text-center mb-8">
                <SectionLabel>Rendez-vous</SectionLabel>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
                  Choisissez un creneau
                </h2>
                <p className="mt-3 text-text-secondary">
                  30 minutes pour discuter de votre projet. Gratuit, sans engagement.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden border border-border-light">
              <iframe
                src={CALCOM_URL}
                className="w-full min-h-[600px] border-0"
                title="Prendre rendez-vous avec GoWizzYou"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
