'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';

const BRANDS = [
  'Next.js',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'n8n',
  'Stripe',
  'Notion',
  'Slack',
  'AWS',
  'Make',
  'Dynamics 365',
  'Brevo',
  'React',
  'TypeScript',
  'Zapier',
  'Vercel',
];

export function LogoScroll() {
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="py-24 sky-bg-light">
      <div className="mx-auto max-w-7xl px-6 text-center mb-12">
        <SectionLabel>ECOSYSTEME</SectionLabel>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mt-4">
          On connecte vos outils
        </h2>
      </div>

      {/* Mask fades text from opaque (center) to transparent (edges) */}
      <div
        className="relative h-[320px] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
        }}
      >
        <div className="absolute inset-x-0 flex flex-col items-center animate-scroll-up">
          {items.map((brand, i) => (
            <div key={`${brand}-${i}`} className="py-3 text-center">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-text-primary/80 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
