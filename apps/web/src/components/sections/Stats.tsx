'use client';

import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { STATS } from '@/lib/constants';

export function Stats() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
