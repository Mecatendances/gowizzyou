import { Linkedin, Github, Twitter } from 'lucide-react';
import { SITE, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream px-6 pb-8 pt-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-sky/40 backdrop-blur-sm px-8 sm:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Brand — left side */}
          <div className="lg:max-w-sm">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-sm font-bold text-white">G</span>
              </div>
              <span className="text-lg font-semibold text-text-primary">{SITE.name}</span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Votre partenaire tech. On comprend votre metier
              avant de coder. Deploiement rapide, code propre, maintenable.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links — right side */}
          <div className="flex flex-wrap gap-12 lg:gap-20 lg:ml-auto">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-label mb-4">
                Offres
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-label mb-4">
                Informations
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-sky-dark/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} {SITE.name}. Tous droits reserves.
          </p>
          <p className="text-sm text-text-muted">
            Fait par <a href="https://vetil.fr" className="font-medium text-text-secondary hover:text-text-primary transition-colors">Olivier Vetil</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
