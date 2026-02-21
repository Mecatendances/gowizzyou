import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Generales de Vente',
};

export default function CGVPage() {
  return (
    <div className="pt-24">
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Conditions Generales de Vente</h1>
          <p className="text-text-muted mb-12">Derniere mise a jour : fevrier 2026</p>

          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 1 — Objet</h2>
              <p>
                Les presentes Conditions Generales de Vente (CGV) regissent les relations contractuelles
                entre GoWizzYou (ci-apres &laquo; le Prestataire &raquo;) et ses clients (ci-apres &laquo; le Client &raquo;)
                dans le cadre des prestations de services informatiques proposees sur gowizzyou.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 2 — Prestations</h2>
              <p>Le Prestataire propose les services suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-text-primary">Pack Automatisation</strong> : audit, conception et deploiement de workflows automatises</li>
                <li><strong className="text-text-primary">Pack App Metier</strong> : conception, developpement et deploiement d&apos;applications sur-mesure</li>
                <li><strong className="text-text-primary">Pack Transformation</strong> : accompagnement strategique et operationnel (diagnostic, CTO de transition)</li>
              </ul>
              <p className="mt-2">
                Le detail des prestations, livrables et delais est defini dans le devis signe par les deux parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 3 — Tarifs</h2>
              <p>
                Les prix sont exprimes en euros hors taxes (EUR HT). La TVA applicable sera ajoutee au taux en vigueur.
                Les tarifs sont ceux en vigueur au moment de la signature du devis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 4 — Modalites de paiement</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Acompte de 30% a la signature du devis</li>
                <li>Echeances intermediaires selon le planning defini dans le devis</li>
                <li>Solde a la livraison et recette du projet</li>
                <li>Paiement par virement bancaire sous 30 jours</li>
              </ul>
              <p className="mt-2">
                En cas de retard de paiement, des penalites de retard seront appliquees au taux de 3 fois le taux
                d&apos;interet legal, conformement a la loi. Une indemnite forfaitaire de 40 EUR pour frais de recouvrement
                sera egalement due.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 5 — Delais de livraison</h2>
              <p>
                Les delais de livraison sont indicatifs et definis dans le devis. Le Prestataire s&apos;engage a
                respecter les delais convenus, sauf cas de force majeure ou retard imputable au Client
                (validation, fourniture de contenus, acces aux systemes).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 6 — Propriete intellectuelle</h2>
              <p>
                Le code source developpe dans le cadre de la prestation est cede au Client apres paiement
                integral de la prestation. Le Client dispose des droits d&apos;utilisation, de modification et
                de distribution du code livre.
              </p>
              <p className="mt-2">
                Les outils, bibliotheques et frameworks open-source utilises restent soumis a leurs licences respectives.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 7 — Garantie et support</h2>
              <p>
                Chaque pack inclut une periode de support post-livraison dont la duree est definie dans le devis
                (de 2 semaines a 6 mois selon la formule). Le support couvre la correction des anomalies et
                bugs signales pendant cette periode.
              </p>
              <p className="mt-2">
                Au-dela de cette periode, un contrat de maintenance peut etre propose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 8 — Responsabilite</h2>
              <p>
                La responsabilite du Prestataire est limitee au montant total de la prestation.
                Le Prestataire ne saurait etre tenu responsable des dommages indirects, pertes d&apos;exploitation
                ou pertes de donnees.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 9 — Confidentialite</h2>
              <p>
                Les parties s&apos;engagent a maintenir confidentielles les informations echangees dans le cadre
                de la prestation. Cette obligation de confidentialite perdure 2 ans apres la fin de la mission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 10 — Resiliation</h2>
              <p>
                Chaque partie peut resilier le contrat en cas de manquement grave de l&apos;autre partie,
                apres mise en demeure restee sans effet pendant 15 jours. En cas de resiliation anticipee
                par le Client, les prestations realisees restent dues.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-3">Article 11 — Droit applicable</h2>
              <p>
                Les presentes CGV sont soumises au droit francais. En cas de litige, les parties s&apos;engagent
                a rechercher une solution amiable. A defaut, le Tribunal de Commerce de Toulouse sera seul competent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
