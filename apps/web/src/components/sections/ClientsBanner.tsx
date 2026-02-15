'use client';

const CLIENTS = [
  'NOLT Sport',
  'Signe+ Group',
  'WizzyMatch',
  'Runner Portage',
  'Agora RH',
  'NOLT Academy',
  'Portage Formation',
  'Dynamics CRM',
];

export function ClientsBanner() {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 bg-cream">
      <p className="text-center text-sm font-semibold text-text-muted mb-8 tracking-wide">
        Ils nous font confiance
      </p>

      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div className="flex items-center gap-16 animate-scroll-left w-max">
          {items.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="text-xl sm:text-2xl font-bold text-text-primary/20 whitespace-nowrap shrink-0 select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
