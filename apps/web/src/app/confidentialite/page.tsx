import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialite',
};

export default function ConfidentialitePage() {
  return (
    <div className="pt-24">
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Politique de confidentialite</h1>
          <p className="text-text-muted mb-12">Derniere mise a jour : fevrier 2026</p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">1. Responsable du traitement</h2>
              <p>
                GoWizzYou, representee par Olivier Vetil, est responsable du traitement des donnees personnelles
                collectees sur le site gowizzyou.com.
                <br />
                Contact : <a href="mailto:contact@gowizzyou.com" className="text-accent hover:underline">contact@gowizzyou.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">2. Donnees collectees</h2>
              <p>Nous collectons les donnees suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-text-primary">Formulaire de contact</strong> : nom, email, entreprise, pack selectionne, message</li>
                <li><strong className="text-text-primary">Inscription webinaire</strong> : prenom, email</li>
                <li><strong className="text-text-primary">Donnees de navigation</strong> : adresse IP, navigateur, pages visitees (via cookies analytics)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">3. Finalites du traitement</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Repondre a vos demandes de contact</li>
                <li>Gerer les inscriptions aux webinaires</li>
                <li>Envoyer des emails de confirmation et de rappel</li>
                <li>Analyser le trafic du site pour ameliorer l&apos;experience utilisateur</li>
                <li>Mesurer la performance de nos campagnes publicitaires</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">4. Base legale</h2>
              <p>
                Le traitement de vos donnees repose sur votre consentement (formulaires) et notre interet
                legitime (analyse de trafic, amelioration du service).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">5. Destinataires des donnees</h2>
              <p>Vos donnees peuvent etre transmises aux sous-traitants suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-text-primary">Kit (ex ConvertKit)</strong> : gestion des emails et sequences automatisees</li>
                <li><strong className="text-text-primary">AWS</strong> : hebergement des serveurs</li>
                <li><strong className="text-text-primary">Google Analytics</strong> : analyse de trafic</li>
                <li><strong className="text-text-primary">Meta (Facebook)</strong> : suivi des conversions publicitaires</li>
                <li><strong className="text-text-primary">LinkedIn</strong> : suivi des conversions publicitaires</li>
              </ul>
              <p className="mt-2">
                Vos donnees ne sont jamais vendues ni partagees a des fins commerciales avec des tiers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">6. Duree de conservation</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Donnees de contact : 3 ans apres le dernier echange</li>
                <li>Donnees d&apos;inscription webinaire : 2 ans</li>
                <li>Cookies analytics : 13 mois maximum</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">7. Vos droits (RGPD)</h2>
              <p>Conformement au Reglement General sur la Protection des Donnees (RGPD), vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Droit d&apos;acces a vos donnees</li>
                <li>Droit de rectification</li>
                <li>Droit a l&apos;effacement (&laquo; droit a l&apos;oubli &raquo;)</li>
                <li>Droit a la limitation du traitement</li>
                <li>Droit a la portabilite</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous a{' '}
                <a href="mailto:contact@gowizzyou.com" className="text-accent hover:underline">contact@gowizzyou.com</a>.
                Nous repondons sous 30 jours.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">8. Cookies</h2>
              <p>Ce site utilise les cookies suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-text-primary">Cookies essentiels</strong> : fonctionnement du site</li>
                <li><strong className="text-text-primary">Google Analytics</strong> : mesure d&apos;audience anonymisee</li>
                <li><strong className="text-text-primary">Meta Pixel</strong> : suivi des conversions publicitaires</li>
                <li><strong className="text-text-primary">LinkedIn Insight Tag</strong> : suivi des conversions publicitaires</li>
              </ul>
              <p className="mt-2">
                Vous pouvez desactiver les cookies dans les parametres de votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">9. Reclamation</h2>
              <p>
                En cas de litige, vous pouvez adresser une reclamation a la CNIL :{' '}
                <a href="https://www.cnil.fr" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
