import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Hero Section
    'hero.badge': 'Rising Golf Champion',
    'hero.title': 'Andrea',
    'hero.subtitle': 'Young Golf Talent',
    'hero.description': 'Follow the journey of a promising young golfer making waves in the sport',
    'hero.sponsor': 'Become a Sponsor',
    'hero.achievements': 'View Achievements',

    // Achievements Section
    'achievements.title': 'Achievements',
    'achievements.subtitle': 'Tournament victories and notable performances',
    'achievements.trophee2024': 'Trophée Jeunes Golfeurs U10 2024',
    'achievements.trophee2024.desc': '2nd place in Boys category at the Regional Final (Golf de St Donat)',
    'achievements.championship': 'Regional Championship Winner',
    'achievements.championship.desc': 'First place in junior category tournament',
    'achievements.medal': 'Multiple Tournament Medals',
    'achievements.medal.desc': 'Consistent top-3 finishes across regional competitions',
    'achievements.uskids.paca': 'USKids Golf PACA Local Tour',
    'achievements.uskids.paca.desc': 'Top 5 finish in regional USKids Golf PACA tournament series',
    'achievements.uskids.bastide': 'Golf de la Grande Bastide Tournament',
    'achievements.uskids.bastide.desc': 'Strong performance in USKids Golf tournament at Golf de la Grande Bastide',
    'achievements.uskids.european': 'USKids European Championship 2024',
    'achievements.uskids.european.desc': 'Qualified and competed in the prestigious USKids European Championship',

    // About Section
    'about.title': 'About Andrea',
    'about.passion.title': 'Passion for Golf',
    'about.passion.desc': 'Andrea discovered golf at the tender age of 6, when his natural swing caught the attention of professionals at Golf de Luberon. What started as weekend family outings quickly evolved into a serious passion. His intuitive understanding of the game, combined with an unwavering dedication, has made him one of the most promising young talents in the PACA region.',
    'about.training.title': 'Dedicated Training',
    'about.training.desc': 'Andrea maintains a rigorous training schedule, dedicating 15 hours per week to perfecting his craft under the expert guidance of his personal golf pro, Isabelle Boileau. Working with this certified PGA professional at Golf de Luberon, he focuses on technical precision, mental fortitude, and strategic course management. His training regimen includes driving range sessions, short game practice, physical conditioning, and competitive match play to simulate tournament pressure.',
    'about.goals.title': 'Future Aspirations',
    'about.goals.desc': 'With his sights set on competing at the highest levels, Andrea aims to represent France in international youth competitions while maintaining his academic excellence. His dream is to earn a golf scholarship to a prestigious university and eventually compete on professional tours. He understands that success requires balancing athletic achievement with personal development and education.',
    'about.personality.title': 'Character & Values',
    'about.personality.desc': 'Beyond his athletic prowess, Andrea is known for his sportsmanship, humility, and positive attitude. He actively mentors younger players at his home club and participates in junior golf development programs. His coaches praise his work ethic, coachability, and natural leadership qualities that make him stand out both on and off the course.',
    'about.achievements.title': 'Recent Highlights',
    'about.achievements.desc': 'Andrea\'s consistent performance in regional tournaments has earned him recognition in the FFGolf merit system. His participation in Grand Prix events showcases his ability to compete against the best young players in France. Each tournament experience contributes to his growing confidence and competitive maturity.',
    
    // Stats
    'about.stats.years': 'Years Playing',
    'about.stats.tournaments': 'Tournaments Played',
    'about.stats.podiums': 'Top 3 Finishes',
    'about.stats.ranking': 'Regional Ranking',
    'about.stats.ranking.value': 'Top 5',
    'about.stats.best': 'Best Tournament Result',
    'about.stats.best.value': '1st',
    'about.stats.training': 'Training Hours/Week',
    'about.stats.ffgolf': 'FFGolf Merit System',
    'about.stats.ffgolf.value': 'Registered',
    'about.stats.grandprix': 'Grand Prix Participations',
    'about.stats.club': 'Home Club',
    'about.stats.club.value': 'Golf de Luberon',

    // Sponsorship Section
    'sponsorship.badge': 'Investment Opportunity',
    'sponsorship.title': 'Support Andrea\'s Journey',
    'sponsorship.description': 'Invest in the future of golf. Your sponsorship helps Andrea access better training, equipment, and tournament opportunities.',
    'sponsorship.bronze': 'Bronze Supporter',
    'sponsorship.bronze.social': 'Social media recognition',
    'sponsorship.bronze.updates': 'Monthly progress updates',
    'sponsorship.bronze.photos': 'Exclusive tournament photos',
    'sponsorship.silver': 'Silver Champion',
    'sponsorship.silver.website': 'Website logo placement',
    'sponsorship.silver.meet': 'Meet & greet opportunity',
    'sponsorship.silver.gear': 'Branded gear package',
    'sponsorship.gold': 'Gold Patron',
    'sponsorship.gold.apparel': 'Logo on tournament apparel',
    'sponsorship.gold.invite': 'VIP tournament invitations',
    'sponsorship.gold.reports': 'Quarterly progress reports',
    'sponsorship.platinum': 'Platinum Elite',
    'sponsorship.platinum.partnership': 'Full brand partnership',
    'sponsorship.platinum.events': 'Exclusive sponsor events',
    'sponsorship.platinum.consultation': 'Direct consultation access',
    'sponsorship.form.title': 'Sponsor Information',
    'sponsorship.form.name': 'Full Name',
    'sponsorship.form.email': 'Email Address',
    'sponsorship.form.company': 'Company/Organization (Optional)',
    'sponsorship.form.message': 'Personal Message (Optional)',
    'sponsorship.form.submit': 'Proceed to Payment',

    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? Want to learn more? Reach out to us.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',

    // Sponsor Page
    'sponsor.title': 'Sponsor Andrea',
    'sponsor.description': 'Join us in supporting a young golf talent. Your investment helps Andrea access professional training, quality equipment, and tournament opportunities.',
    'sponsor.why.title': 'Why Invest in Andrea?',
    'sponsor.champion.title': 'Proven Champion',
    'sponsor.champion.desc': 'Multiple tournament wins and consistent top finishes demonstrate Andrea\'s competitive potential.',
    'sponsor.goals.title': 'Clear Goals',
    'sponsor.goals.desc': 'Focused on reaching national competitions while maintaining academic excellence.',
    'sponsor.partnership.title': 'Brand Partnership',
    'sponsor.partnership.desc': 'Gain exposure through social media, tournaments, and exclusive sponsor events.',

    // Success Page
    'success.badge': 'Payment Successful',
    'success.title': 'Thank You for Your Sponsorship!',
    'success.description': 'Your investment in Andrea\'s golf career is greatly appreciated. You\'ll receive a confirmation email shortly.',
    'success.next.title': 'What Happens Next?',
    'success.next.1': 'You\'ll receive a confirmation email with sponsorship details',
    'success.next.2': 'Andrea will personally thank you within 24 hours',
    'success.next.3': 'Monthly updates on progress and achievements will be sent',
    'success.next.4': 'Invitation to exclusive sponsor events and tournaments',
    'success.home': 'Return Home',
    'success.contact': 'Contact Us',
    'success.session': 'Session ID',

    // Not Found Page
    'notfound.title': '404',
    'notfound.description': 'Oops! Page not found',
    'notfound.home': 'Return to Home',

    // Language Switcher
    'language.switch': 'Language',
  },
  fr: {
    // Hero Section
    'hero.badge': 'Champion de Golf Émergent',
    'hero.title': 'Andrea',
    'hero.subtitle': 'Jeune Talent du Golf',
    'hero.description': 'Suivez le parcours d\'un jeune golfeur prometteur qui fait des vagues dans ce sport',
    'hero.sponsor': 'Devenir Sponsor',
    'hero.achievements': 'Voir les Réalisations',

    // Achievements Section
    'achievements.title': 'Réalisations',
    'achievements.subtitle': 'Victoires en tournoi et performances notables',
    'achievements.trophee2024': 'Trophée Jeunes Golfeurs U10 2024',
    'achievements.trophee2024.desc': '2ème place en catégorie Garçons à la Finale Régionale (Golf de St Donat)',
    'achievements.championship': 'Gagnant du Championnat Régional',
    'achievements.championship.desc': 'Première place en tournoi catégorie junior',
    'achievements.medal': 'Multiples Médailles de Tournoi',
    'achievements.medal.desc': 'Finitions constantes dans le top 3 à travers les compétitions régionales',
    'achievements.uskids.paca': 'USKids Golf PACA Local Tour',
    'achievements.uskids.paca.desc': 'Top 5 dans la série de tournois USKids Golf PACA régionaux',
    'achievements.uskids.bastide': 'Tournoi Golf de la Grande Bastide',
    'achievements.uskids.bastide.desc': 'Performance solide au tournoi USKids Golf au Golf de la Grande Bastide',
    'achievements.uskids.european': 'Championnat Européen USKids 2024',
    'achievements.uskids.european.desc': 'Qualifié et a participé au prestigieux Championnat Européen USKids',

    // About Section
    'about.title': 'À Propos d\'Andrea',
    'about.passion.title': 'Passion pour le Golf',
    'about.passion.desc': 'Andrea a découvert le golf à l\'âge tendre de 6 ans, quand son swing naturel a attiré l\'attention des professionnels au Golf de Luberon. Ce qui a commencé comme des sorties familiales de week-end a rapidement évolué vers une passion sérieuse. Sa compréhension intuitive du jeu, combinée à un dévouement inébranlable, en a fait l\'un des jeunes talents les plus prometteurs de la région PACA.',
    'about.training.title': 'Entraînement Dévoué',
    'about.training.desc': 'Andrea maintient un programme d\'entraînement rigoureux, consacrant 15 heures par semaine à perfectionner son art sous la guidance experte de sa professionnelle de golf personnelle, Isabelle Boileau. Travaillant avec cette professionnelle PGA certifiée au Golf de Luberon, il se concentre sur la précision technique, la force mentale et la gestion stratégique du parcours. Son régime d\'entraînement comprend des séances au practice, la pratique du petit jeu, le conditionnement physique et le jeu compétitif pour simuler la pression des tournois.',
    'about.goals.title': 'Aspirations Futures',
    'about.goals.desc': 'Avec ses objectifs fixés sur la compétition aux plus hauts niveaux, Andrea vise à représenter la France dans les compétitions internationales jeunes tout en maintenant son excellence académique. Son rêve est d\'obtenir une bourse de golf dans une université prestigieuse et de concourir éventuellement sur les circuits professionnels. Il comprend que le succès nécessite d\'équilibrer la réussite sportive avec le développement personnel et l\'éducation.',
    'about.personality.title': 'Caractère et Valeurs',
    'about.personality.desc': 'Au-delà de ses prouesses athlétiques, Andrea est connu pour son esprit sportif, son humilité et son attitude positive. Il encadre activement les jeunes joueurs de son club local et participe aux programmes de développement du golf junior. Ses entraîneurs louent son éthique de travail, sa capacité d\'apprentissage et ses qualités de leadership naturelles qui le distinguent sur et en dehors du parcours.',
    'about.achievements.title': 'Faits Marquants Récents',
    'about.achievements.desc': 'La performance constante d\'Andrea dans les tournois régionaux lui a valu une reconnaissance dans le système de mérite FFGolf. Sa participation aux événements Grand Prix démontre sa capacité à concourir contre les meilleurs jeunes joueurs de France. Chaque expérience de tournoi contribue à sa confiance croissante et sa maturité compétitive.',
    
    // Stats
    'about.stats.years': 'Années de Jeu',
    'about.stats.tournaments': 'Tournois Joués',
    'about.stats.podiums': 'Finitions Top 3',
    'about.stats.ranking': 'Classement Régional',
    'about.stats.ranking.value': 'Top 5',
    'about.stats.best': 'Meilleur Résultat',
    'about.stats.best.value': '1er',
    'about.stats.training': 'Heures d\'Entraînement/Semaine',
    'about.stats.ffgolf': 'Système de Mérite FFGolf',
    'about.stats.ffgolf.value': 'Classé',
    'about.stats.grandprix': 'Participations Grand Prix',
    'about.stats.club': 'Club Local',
    'about.stats.club.value': 'Golf de Luberon',

    // Sponsorship Section
    'sponsorship.badge': 'Opportunité d\'Investissement',
    'sponsorship.title': 'Soutenez le Parcours d\'Andrea',
    'sponsorship.description': 'Investissez dans l\'avenir du golf. Votre sponsoring aide Andrea à accéder à un meilleur entraînement, équipement et opportunités de tournoi.',
    'sponsorship.bronze': 'Supporter Bronze',
    'sponsorship.bronze.social': 'Reconnaissance sur les réseaux sociaux',
    'sponsorship.bronze.updates': 'Mises à jour mensuelles des progrès',
    'sponsorship.bronze.photos': 'Photos exclusives de tournoi',
    'sponsorship.silver': 'Champion Argent',
    'sponsorship.silver.website': 'Placement du logo sur le site web',
    'sponsorship.silver.meet': 'Opportunité de rencontre',
    'sponsorship.silver.gear': 'Package d\'équipement de marque',
    'sponsorship.gold': 'Patron Or',
    'sponsorship.gold.apparel': 'Logo sur les vêtements de tournoi',
    'sponsorship.gold.invite': 'Invitations VIP aux tournois',
    'sponsorship.gold.reports': 'Rapports de progrès trimestriels',
    'sponsorship.platinum': 'Elite Platine',
    'sponsorship.platinum.partnership': 'Partenariat de marque complet',
    'sponsorship.platinum.events': 'Événements exclusifs pour sponsors',
    'sponsorship.platinum.consultation': 'Accès direct à la consultation',
    'sponsorship.form.title': 'Informations du Sponsor',
    'sponsorship.form.name': 'Nom Complet',
    'sponsorship.form.email': 'Adresse Email',
    'sponsorship.form.company': 'Entreprise/Organisation (Optionnel)',
    'sponsorship.form.message': 'Message Personnel (Optionnel)',
    'sponsorship.form.submit': 'Procéder au Paiement',

    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Vous avez des questions ? Vous voulez en savoir plus ? Contactez-nous.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',

    // Sponsor Page
    'sponsor.title': 'Sponsoriser Andrea',
    'sponsor.description': 'Rejoignez-nous pour soutenir un jeune talent du golf. Votre investissement aide Andrea à accéder à un entraînement professionnel, à un équipement de qualité et aux opportunités de tournoi.',
    'sponsor.why.title': 'Pourquoi Investir dans Andrea ?',
    'sponsor.champion.title': 'Champion Prouvé',
    'sponsor.champion.desc': 'Multiples victoires en tournoi et finitions constantes dans le top démontrent le potentiel compétitif d\'Andrea.',
    'sponsor.goals.title': 'Objectifs Clairs',
    'sponsor.goals.desc': 'Concentré sur l\'atteinte des compétitions nationales tout en maintenant l\'excellence académique.',
    'sponsor.partnership.title': 'Partenariat de Marque',
    'sponsor.partnership.desc': 'Obtenez de l\'exposition à travers les réseaux sociaux, les tournois et les événements exclusifs pour sponsors.',

    // Success Page
    'success.badge': 'Paiement Réussi',
    'success.title': 'Merci pour Votre Sponsoring !',
    'success.description': 'Votre investissement dans la carrière de golf d\'Andrea est grandement apprécié. Vous recevrez un email de confirmation sous peu.',
    'success.next.title': 'Que Se Passe-t-il Ensuite ?',
    'success.next.1': 'Vous recevrez un email de confirmation avec les détails du sponsoring',
    'success.next.2': 'Andrea vous remerciera personnellement dans les 24 heures',
    'success.next.3': 'Des mises à jour mensuelles sur les progrès et réalisations seront envoyées',
    'success.next.4': 'Invitation aux événements exclusifs pour sponsors et tournois',
    'success.home': 'Retour à l\'Accueil',
    'success.contact': 'Nous Contacter',
    'success.session': 'ID de Session',

    // Not Found Page
    'notfound.title': '404',
    'notfound.description': 'Oups ! Page non trouvée',
    'notfound.home': 'Retour à l\'Accueil',

    // Language Switcher
    'language.switch': 'Langue',
  }
};