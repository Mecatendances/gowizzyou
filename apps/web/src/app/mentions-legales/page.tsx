import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions legales',
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24">
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-text-primary mb-12">Mentions legales</h1>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Editeur du site</h2>
              <p>
                GoWizzYou — Agence tech
                <br />
                SIRET : en cours d&apos;immatriculation
                <br />
                Siege social : Toulouse, France
                <br />
                Email : <a href="mailto:contact@gowizzyou.com" className="text-accent hover:underline">contact@gowizzyou.com</a>
                <br />
                Responsable de la publication : Olivier Vetil
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Hebergement</h2>
              <p>
                Amazon Web Services (AWS) — Lightsail
                <br />
                Amazon Web Services, Inc.
                <br />
                P.O. Box 81226, Seattle, WA 98108-1226, USA
                <br />
                <a href="https://aws.amazon.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">aws.amazon.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Propriete intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos, code source) est la propriete exclusive
                de GoWizzYou, sauf mention contraire. Toute reproduction, meme partielle, est interdite sans
                autorisation prealable ecrite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Donnees personnelles</h2>
              <p>
                Les informations collectees via les formulaires de ce site sont traitees conformement a notre{' '}
                <a href="/confidentialite" className="text-accent hover:underline">politique de confidentialite</a>.
                Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification et de suppression
                de vos donnees en nous contactant a{' '}
                <a href="mailto:contact@gowizzyou.com" className="text-accent hover:underline">contact@gowizzyou.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Cookies</h2>
              <p>
                Ce site utilise des cookies a des fins d&apos;analyse de trafic (Google Analytics) et de mesure
                de performance publicitaire (Meta Pixel, LinkedIn Insight Tag). Vous pouvez configurer votre
                navigateur pour refuser les cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Limitation de responsabilite</h2>
              <p>
                GoWizzYou s&apos;efforce de maintenir les informations de ce site a jour. Toutefois, nous ne
                pouvons garantir l&apos;exactitude, la completude ou l&apos;actualite des informations diffusees.
                L&apos;utilisation des informations et contenus disponibles sur l&apos;ensemble du site se fait
                sous la seule responsabilite de l&apos;utilisateur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Credits</h2>
              <p>
                Site concu et developpe par GoWizzYou.
                <br />
                Typographie : Quicksand (Google Fonts).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
