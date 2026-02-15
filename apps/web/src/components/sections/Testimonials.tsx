'use client';

import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  const featured = TESTIMONIALS[0];
  const others = TESTIMONIALS.slice(1);

  return (
    <section className="py-24 sky-bg-light">
      <div className="mx-auto max-w-7xl px-6">
        {/* Featured testimonial */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <blockquote className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight max-w-4xl mx-auto mb-8">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-text-primary font-semibold text-lg">
                {featured.avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-text-primary">{featured.author}</p>
                <p className="text-sm text-accent">{featured.company}</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Other testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.author} delay={i * 0.1}>
              <Card className="h-full">
                <blockquote className="text-text-secondary leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{testimonial.author}</p>
                    <p className="text-xs text-text-muted">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
