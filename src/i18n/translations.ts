export type Lang = 'en' | 'fr' | 'nl';

export interface Translations {
  nav: {
    shop: string;
    services: string;
    instagram: string;
    reviews: string;
    allExtensions: string;
    bundles: string;
    tapeIn: string;
    uTip: string;
    iTip: string;
    clipIn: string;
    closure: string;
    ponytails: string;
    ourStory: string;
    faq: string;
    contact: string;
    login: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    shopNow: string;
    richTitle: string;
    richBody: string;
    viewAll: string;
    expTitle: string;
    exp1Title: string;
    exp1Text: string;
    exp2Title: string;
    exp2Text: string;
    exp3Title: string;
    exp3Text: string;
    exp4Title: string;
    exp4Text: string;
    exp5Title: string;
    exp5Text: string;
    servicesTitle: string;
    servicesSubtitle: string;
    scheduleNow: string;
    storyEyebrow: string;
    storyTitle: string;
    storyBody: string;
    learnMore: string;
    igTitle: string;
    igFollow: string;
    seeMore: string;
  };
  product: {
    from: string;
    texture: string;
    hairLength: string;
    color: string;
    salesPoint: string;
    addToCart: string;
    zeroInterest: string;
    installmentsPrefix: string;
    installmentsSuffix: string;
    description: string;
    careAccordion: string;
    careBody: string;
    readCareGuide: string;
    shippingAccordion: string;
    shippingBody: string;
    askAccordion: string;
    sendQuestion: string;
    askSuccess: string;
    share: string;
    tweet: string;
    pinIt: string;
    customerReviews: string;
    beFirstReview: string;
    basedOnReviews: string;
    writeReview: string;
    cancelReview: string;
    submitReview: string;
    reviewThanks: string;
    youMayAlsoLike: string;
  };
  collection: {
    productsCount: string;
    sortBy: string;
    featured: string;
    priceAsc: string;
    priceDesc: string;
    titleAsc: string;
    noProducts: string;
  };
  cart: {
    title: string;
    continueShopping: string;
    empty: string;
    shopExtensions: string;
    discountCode: string;
    apply: string;
    orderNote: string;
    orderNotePlaceholder: string;
    subtotal: string;
    discount: string;
    total: string;
    taxesNote: string;
    checkout: string;
    connecting: string;
    freeShippingUnlocked: string;
    freeShippingRemaining: string;
  };
  footer: {
    tagline: string;
    about: string;
    customerService: string;
    ourStory: string;
    services: string;
    reviews: string;
    instagram: string;
    contactUs: string;
    faq: string;
    careGuide: string;
    shippingInfo: string;
    returnPolicy: string;
    salonPolicies: string;
    joinList: string;
    joinDesc: string;
    emailPlaceholder: string;
    subscribeSuccess: string;
    rights: string;
    privacy: string;
    legal: string;
    servicePolicies: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    bookNow: string;
    offeredTitle: string;
    estTime: string;
    recommended: string;
    requestAppt: string;
    requestConfirm: string;
    submitRequest: string;
    cancel: string;
    shopExtensions: string;
  };
  pages: {
    ourStoryTitle: string;
    ourStorySubtitle: string;
    ourStoryP1: string;
    ourStoryP2: string;
    ourStoryP3: string;
    meetFounder: string;
    founderBio: string;
    faqTitle: string;
    faqSubtitle: string;
    reviewsTitle: string;
    reviewsSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
    messageSent: string;
    messageSentBody: string;
    send: string;
    careTitle: string;
    careSubtitle: string;
    searchTitle: string;
    searchPlaceholder: string;
    popularExtensions: string;
    popupTitle: string;
    popupBody: string;
    subscribe: string;
    chatGreeting: string;
    chatPlaceholder: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    nav: {
      shop: 'Shop',
      services: 'Services',
      instagram: 'Instagram',
      reviews: 'Reviews',
      allExtensions: 'All Extensions',
      bundles: 'Hair Extension Bundles',
      tapeIn: 'Tape-in Extensions',
      uTip: 'U-Tip Extensions',
      iTip: 'I-Tip Extensions',
      clipIn: 'Clip-in Extensions',
      closure: 'Lace Closure',
      ponytails: 'Ponytails',
      ourStory: 'Our Story',
      faq: 'FAQ',
      contact: 'Contact',
      login: 'Log in',
    },
    home: {
      heroTitle: 'Beauty Begins With A Feeling',
      heroSubtitle: 'Shop our extensions to find the perfect look',
      shopNow: 'Shop Now',
      richTitle: 'Luscious Natural Extensions 100% Raw Human Hair',
      richBody:
        'We use 100% virgin Indian hair that is unprocessed and always free from harsh chemicals. Everything comes in its natural color and pattern and can be colored and styled to your individual desires and tastes.',
      viewAll: 'View all',
      expTitle: 'Experience the Difference',
      exp1Title: '100% virgin hair',
      exp1Text: 'We use 100% virgin hair that can be colored and styled to perfection',
      exp2Title: 'Ethically sourced',
      exp2Text: 'All our hair extensions are ethically sourced from India & Eastern Europe.',
      exp3Title: 'Long lasting',
      exp3Text: 'With proper maintenance and care, your hair is guaranteed to be long lasting and reusable.',
      exp4Title: 'Free of chemicals',
      exp4Text: 'Unprocessed and always free from harsh chemicals',
      exp5Title: 'Black-owned business',
      exp5Text: 'Supporting our community and built on racial equality',
      servicesTitle: 'Install Services',
      servicesSubtitle: 'Schedule your appointment to have your extensions installed',
      scheduleNow: 'Schedule Now',
      storyEyebrow: 'We love extensions',
      storyTitle: 'Our Story',
      storyBody:
        'Our ever-expanding selection of luxury hair extensions can be easily customized for your own unique style and preferences, allowing you to achieve the volume and length you want.',
      learnMore: 'Learn More',
      igTitle: 'Instagram',
      igFollow: 'Follow us now on Instagram',
      seeMore: 'See More',
    },
    product: {
      from: 'from',
      texture: 'Texture',
      hairLength: 'Hair Length',
      color: 'Color',
      salesPoint: '100% Virgin Indian Human Hair — Unprocessed & Reusable',
      addToCart: 'Add to cart',
      zeroInterest: 'Zero interest',
      installmentsPrefix: '4 payments, or from',
      installmentsSuffix: 'with',
      description: 'Description',
      careAccordion: 'Get the most from your hair',
      careBody:
        'Detangle gently from bottom to root before washing. Use lukewarm water and a sulfate-free moisturizing shampoo & conditioner. Air dry and apply heat protectant before styling.',
      readCareGuide: 'Read full care guide',
      shippingAccordion: 'Shipping information',
      shippingBody:
        'Orders process within 1–2 business days. Standard delivery takes 3–5 business days, and orders over $200 ship free. Express options are available at checkout.',
      askAccordion: 'Ask a question',
      sendQuestion: 'Send Question',
      askSuccess: 'Thank you! Our stylists at Giordanahaircompany will reply via email shortly.',
      share: 'Share',
      tweet: 'Tweet',
      pinIt: 'Pin it',
      customerReviews: 'Customer Reviews',
      beFirstReview: 'Be the first to write a review',
      basedOnReviews: 'Based on {n} review(s)',
      writeReview: 'Write a review',
      cancelReview: 'Cancel review',
      submitReview: 'Submit Review',
      reviewThanks: 'Thank you! Your review has been submitted for Giordanahaircompany.',
      youMayAlsoLike: 'You may also like',
    },
    collection: {
      productsCount: 'products',
      sortBy: 'Sort by',
      featured: 'Featured',
      priceAsc: 'Price, low to high',
      priceDesc: 'Price, high to low',
      titleAsc: 'Alphabetically, A-Z',
      noProducts: 'No products found in this collection.',
    },
    cart: {
      title: 'Cart',
      continueShopping: 'Continue shopping',
      empty: 'Your cart is currently empty.',
      shopExtensions: 'Shop Hair Extensions',
      discountCode: 'Discount Code',
      apply: 'Apply',
      orderNote: 'Order Note',
      orderNotePlaceholder: 'Special instructions for your order...',
      subtotal: 'Subtotal',
      discount: 'Discount',
      total: 'Total',
      taxesNote: 'Shipping, taxes, and discount codes calculated at checkout.',
      checkout: 'Check Out',
      connecting: 'Connecting to Checkout...',
      freeShippingUnlocked: 'You have unlocked complimentary standard shipping!',
      freeShippingRemaining: 'Add ${amount} more for complimentary shipping.',
    },
    footer: {
      tagline:
        '100% Virgin Indian Human Hair Extensions. Ethically sourced, unprocessed, and crafted for seamless luxury.',
      about: 'About',
      customerService: 'Customer Service',
      ourStory: 'Our Story',
      services: 'Services',
      reviews: 'Reviews',
      instagram: 'Instagram',
      contactUs: 'Contact us',
      faq: 'FAQ',
      careGuide: 'Get the Most From Your Hair',
      shippingInfo: 'Shipping Info',
      returnPolicy: 'Return Policy',
      salonPolicies: 'Salon Policies',
      joinList: 'Join the Giordana list',
      joinDesc:
        'Subscribe to receive a code for 10% off your first order, plus receive occasional emails with special offers.',
      emailPlaceholder: 'Enter your email',
      subscribeSuccess:
        'Welcome to Giordanahaircompany! Use code GIORDANA10 at checkout for 10% off.',
      rights: '© 2026 Giordanahaircompany - All rights reserved',
      privacy: 'Privacy',
      legal: 'Legal',
      servicePolicies: 'Service Policies',
    },
    servicesPage: {
      title: 'Services',
      subtitle: 'Professional hair extension installs tailored to your natural hair',
      bookNow: 'Book Now',
      offeredTitle: 'Services We Offer',
      estTime: 'ESTIMATED TIME',
      recommended: 'RECOMMENDED',
      requestAppt: 'Request Appointment',
      requestConfirm:
        'Thank you! Your appointment request has been received. Our team at Giordanahaircompany will confirm via email shortly.',
      submitRequest: 'Submit Request',
      cancel: 'Cancel',
      shopExtensions: 'Shop extensions',
    },
    pages: {
      ourStoryTitle: 'Our Story',
      ourStorySubtitle: 'Learn more about our love of hair extensions',
      ourStoryP1:
        'We believe that everyone should have easy access to the very highest quality hair extensions and skilled hair stylists.',
      ourStoryP2:
        'Our meticulous hair extension fitting techniques encourage and protect the health of your natural hair, allowing you to love the way you look like never before.',
      ourStoryP3:
        'Our ever-expanding selection of luxury hair extensions can be easily customized for your own unique style and preferences, allowing you to achieve the volume and length you want.',
      meetFounder: 'Meet the Founder',
      founderBio:
        'Giordana is a passionate and highly skilled hair stylist with over a decade of experience in the industry. Known for sleek styling, seamless natural installs, and personal service, Giordanahaircompany was born out of her desire to give every client a unique way to create looks they love with minimum effort.',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Everything you need to know about Giordanahaircompany',
      reviewsTitle: 'Customer Reviews',
      reviewsSubtitle: '5.0 average rating across verified Giordanahaircompany clients',
      contactTitle: 'Contact Us',
      contactSubtitle: 'Questions about textures, lengths, or custom orders? Reach us at hello@giordanahaircompany.com',
      messageSent: 'Message Sent',
      messageSentBody: 'Thank you for contacting Giordanahaircompany. We will reply within 24 hours.',
      send: 'Send',
      careTitle: 'Get the Most From Your Hair',
      careSubtitle: 'Essential care & maintenance guide for 100% Virgin Indian Hair',
      searchTitle: 'Search',
      searchPlaceholder: 'Search Giordanahaircompany extensions...',
      popularExtensions: 'Popular Extensions',
      popupTitle: 'Wanna save 10% off',
      popupBody: 'Join our mailing list and save 10% off your first order with Giordanahaircompany.',
      subscribe: 'Subscribe',
      chatGreeting: "👋 Hi, message us with any questions. We're happy to help!",
      chatPlaceholder: 'Write a message...',
    },
  },

  fr: {
    nav: {
      shop: 'Boutique',
      services: 'Services',
      instagram: 'Instagram',
      reviews: 'Avis',
      allExtensions: 'Toutes les Extensions',
      bundles: 'Tissages & Bundles',
      tapeIn: 'Extensions Tape-In',
      uTip: 'Extensions U-Tip (Kératine)',
      iTip: 'Extensions I-Tip',
      clipIn: 'Extensions à Clips',
      closure: 'Lace Closure',
      ponytails: 'Queues de Cheval',
      ourStory: 'Notre Histoire',
      faq: 'FAQ',
      contact: 'Contact',
      login: 'Connexion',
    },
    home: {
      heroTitle: 'La Beauté Commence Par Une Émotion',
      heroSubtitle: 'Découvrez nos extensions pour trouver le look parfait',
      shopNow: 'Acheter',
      richTitle: 'Extensions Naturelles Somptueuses 100% Cheveux Humains Vierges',
      richBody:
        'Nous utilisons des cheveux indiens 100% vierges, non traités et sans produits chimiques agressifs. Chaque mèche conserve sa couleur et sa texture naturelles et peut être colorée et coiffée selon vos envies.',
      viewAll: 'Tout voir',
      expTitle: 'Vivez la Différence',
      exp1Title: 'Cheveux 100% vierges',
      exp1Text: 'Des cheveux 100% vierges pouvant être colorés et coiffés à la perfection',
      exp2Title: 'Source éthique',
      exp2Text: 'Toutes nos extensions sont issues de sources éthiques en Inde et en Europe de l’Est.',
      exp3Title: 'Longue durée',
      exp3Text: 'Avec un entretien adapté, vos extensions restent durables et réutilisables.',
      exp4Title: 'Sans produits chimiques',
      exp4Text: 'Non traités et toujours sans substances chimiques agressives',
      exp5Title: 'Entreprise engagée',
      exp5Text: 'Soutenant notre communauté avec passion et excellence',
      servicesTitle: 'Services de Pose',
      servicesSubtitle: 'Prenez rendez-vous pour la pose professionnelle de vos extensions',
      scheduleNow: 'Réserver',
      storyEyebrow: 'Nous aimons les extensions',
      storyTitle: 'Notre Histoire',
      storyBody:
        'Notre sélection d’extensions de luxe peut être personnalisée selon votre style et vos préférences afin d’obtenir le volume et la longueur que vous désirez.',
      learnMore: 'En savoir plus',
      igTitle: 'Instagram',
      igFollow: 'Suivez-nous sur Instagram',
      seeMore: 'Voir plus',
    },
    product: {
      from: 'à partir de',
      texture: 'Texture',
      hairLength: 'Longueur',
      color: 'Couleur',
      salesPoint: '100% Cheveux Humains Indiens Vierges — Non Traités & Réutilisables',
      addToCart: 'Ajouter au panier',
      zeroInterest: 'Sans frais',
      installmentsPrefix: '4 paiements, ou dès',
      installmentsSuffix: 'avec',
      description: 'Description',
      careAccordion: 'Prendre soin de vos cheveux',
      careBody:
        'Démêlez délicatement des pointes vers la racine avant le lavage. Utilisez de l’eau tiède et un shampooing hydratant sans sulfate. Laissez sécher à l’air libre et appliquez un protecteur thermique.',
      readCareGuide: 'Lire le guide d’entretien',
      shippingAccordion: 'Informations de livraison',
      shippingBody:
        'Les commandes sont préparées sous 1 à 2 jours ouvrés. Livraison standard en 3 à 5 jours ouvrés, offerte dès $200 d’achat.',
      askAccordion: 'Poser une question',
      sendQuestion: 'Envoyer la question',
      askSuccess: 'Merci ! Nos stylistes Giordanahaircompany vous répondront rapidement par e-mail.',
      share: 'Partager',
      tweet: 'Tweeter',
      pinIt: 'Épingler',
      customerReviews: 'Avis Clients',
      beFirstReview: 'Soyez la première à laisser un avis',
      basedOnReviews: 'Basé sur {n} avis',
      writeReview: 'Écrire un avis',
      cancelReview: 'Annuler',
      submitReview: 'Publier l’avis',
      reviewThanks: 'Merci ! Votre avis a bien été enregistré pour Giordanahaircompany.',
      youMayAlsoLike: 'Vous aimerez aussi',
    },
    collection: {
      productsCount: 'produits',
      sortBy: 'Trier par',
      featured: 'En vedette',
      priceAsc: 'Prix, croissant',
      priceDesc: 'Prix, décroissant',
      titleAsc: 'Ordre alphabétique, A-Z',
      noProducts: 'Aucun produit trouvé dans cette collection.',
    },
    cart: {
      title: 'Panier',
      continueShopping: 'Continuer vos achats',
      empty: 'Votre panier est actuellement vide.',
      shopExtensions: 'Découvrir les extensions',
      discountCode: 'Code promo',
      apply: 'Appliquer',
      orderNote: 'Note de commande',
      orderNotePlaceholder: 'Instructions spéciales pour votre commande...',
      subtotal: 'Sous-total',
      discount: 'Réduction',
      total: 'Total',
      taxesNote: 'Livraison, taxes et codes promo calculés lors du paiement.',
      checkout: 'Commander',
      connecting: 'Connexion au paiement...',
      freeShippingUnlocked: 'Vous bénéficiez de la livraison standard offerte !',
      freeShippingRemaining: 'Ajoutez ${amount} pour profiter de la livraison offerte.',
    },
    footer: {
      tagline:
        'Extensions 100% Cheveux Humains Indiens Vierges. Sourcing éthique, sans traitement chimique, pour un rendu naturel d’exception.',
      about: 'À propos',
      customerService: 'Service Client',
      ourStory: 'Notre Histoire',
      services: 'Services',
      reviews: 'Avis',
      instagram: 'Instagram',
      contactUs: 'Contactez-nous',
      faq: 'FAQ',
      careGuide: 'Entretien des cheveux',
      shippingInfo: 'Livraison',
      returnPolicy: 'Retours',
      salonPolicies: 'Politiques du Salon',
      joinList: 'Rejoignez la liste Giordana',
      joinDesc:
        'Inscrivez-vous pour recevoir un code de -10% sur votre première commande et nos offres exclusives.',
      emailPlaceholder: 'Votre adresse e-mail',
      subscribeSuccess:
        'Bienvenue chez Giordanahaircompany ! Utilisez le code GIORDANA10 pour -10%.',
      rights: '© 2026 Giordanahaircompany - Tous droits réservés',
      privacy: 'Confidentialité',
      legal: 'Mentions légales',
      servicePolicies: 'Conditions de service',
    },
    servicesPage: {
      title: 'Services',
      subtitle: 'Pose professionnelle d’extensions adaptée à vos cheveux naturels',
      bookNow: 'Réserver',
      offeredTitle: 'Nos Prestations',
      estTime: 'DURÉE ESTIMÉE',
      recommended: 'RECOMMANDÉ',
      requestAppt: 'Demander un rendez-vous',
      requestConfirm:
        'Merci ! Votre demande de rendez-vous a bien été reçue. L’équipe Giordanahaircompany vous confirmera par e-mail.',
      submitRequest: 'Envoyer la demande',
      cancel: 'Annuler',
      shopExtensions: 'Acheter nos extensions',
    },
    pages: {
      ourStoryTitle: 'Notre Histoire',
      ourStorySubtitle: 'Découvrez notre passion pour les extensions capillaires',
      ourStoryP1:
        'Nous pensons que chacune mérite un accès simple aux extensions de la plus haute qualité et à des stylistes expertes.',
      ourStoryP2:
        'Nos techniques de pose respectent et protègent la santé de vos cheveux naturels tout en sublimant votre silhouette.',
      ourStoryP3:
        'Notre collection d’extensions de luxe est entièrement personnalisable pour obtenir le volume et la longueur de vos rêves.',
      meetFounder: 'Rencontrez la Fondatrice',
      founderBio:
        'Giordana est une coiffeuse passionnée avec plus de dix ans d’expérience. Reconnue pour ses poses invisibles et son service sur mesure, elle a fondé Giordanahaircompany pour offrir à chaque cliente une chevelure de rêve sans effort.',
      faqTitle: 'Questions Fréquentes',
      faqSubtitle: 'Tout savoir sur Giordanahaircompany',
      reviewsTitle: 'Avis Clients',
      reviewsSubtitle: 'Note moyenne de 5.0 auprès de nos clientes vérifiées',
      contactTitle: 'Contactez-nous',
      contactSubtitle: 'Une question sur les textures ou longueurs ? Écrivez-nous à hello@giordanahaircompany.com',
      messageSent: 'Message envoyé',
      messageSentBody: 'Merci d’avoir contacté Giordanahaircompany. Nous vous répondrons sous 24 heures.',
      send: 'Envoyer',
      careTitle: 'Prendre Soin de Vos Extensions',
      careSubtitle: 'Guide essentiel d’entretien pour cheveux 100% vierges',
      searchTitle: 'Rechercher',
      searchPlaceholder: 'Rechercher chez Giordanahaircompany...',
      popularExtensions: 'Extensions Populaires',
      popupTitle: 'Profitez de -10%',
      popupBody: 'Inscrivez-vous à notre newsletter et bénéficiez de -10% sur votre première commande.',
      subscribe: 'S’inscrire',
      chatGreeting: '👋 Bonjour ! Posez-nous vos questions, nous sommes là pour vous aider.',
      chatPlaceholder: 'Écrivez un message...',
    },
  },

  nl: {
    nav: {
      shop: 'Winkel',
      services: 'Diensten',
      instagram: 'Instagram',
      reviews: 'Beoordelingen',
      allExtensions: 'Alle Extensions',
      bundles: 'Haar Bundels',
      tapeIn: 'Tape-in Extensions',
      uTip: 'U-Tip Extensions',
      iTip: 'I-Tip Extensions',
      clipIn: 'Clip-in Extensions',
      closure: 'Lace Closure',
      ponytails: 'Paardenstaarten',
      ourStory: 'Ons Verhaal',
      faq: 'Veelgestelde vragen',
      contact: 'Contact',
      login: 'Inloggen',
    },
    home: {
      heroTitle: 'Schoonheid Begint Met Een Gevoel',
      heroSubtitle: 'Ontdek onze extensions voor jouw perfecte look',
      shopNow: 'Nu Winkelen',
      richTitle: 'Weelderige Natuurlijke Extensions 100% Puur Menselijk Haar',
      richBody:
        'Wij gebruiken 100% virgin Indiaas haar dat onbewerkt en vrij van agressieve chemicaliën is. Alles behoudt zijn natuurlijke kleur en textuur en kan naar wens gekleurd en gestyled worden.',
      viewAll: 'Alles bekijken',
      expTitle: 'Ervaar het Verschil',
      exp1Title: '100% virgin haar',
      exp1Text: 'Wij gebruiken 100% virgin haar dat perfect gekleurd en gestyled kan worden',
      exp2Title: 'Ethisch verkregen',
      exp2Text: 'Al onze hairextensions zijn ethisch verkregen uit India & Oost-Europa.',
      exp3Title: 'Langdurig mooi',
      exp3Text: 'Met de juiste verzorging blijft je haar gegarandeerd lang mooi en herbruikbaar.',
      exp4Title: 'Vrij van chemicaliën',
      exp4Text: 'Onbewerkt en altijd vrij van schadelijke chemicaliën',
      exp5Title: 'Met zorg opgebouwd',
      exp5Text: 'Toegewijd aan kwaliteit, gelijkheid en onze community',
      servicesTitle: 'Plaatsingsdiensten',
      servicesSubtitle: 'Plan je afspraak om je extensions professioneel te laten plaatsen',
      scheduleNow: 'Nu Plannen',
      storyEyebrow: 'Wij houden van extensions',
      storyTitle: 'Ons Verhaal',
      storyBody:
        'Onze uitgebreide collectie luxe hairextensions kan eenvoudig worden aangepast aan jouw unieke stijl en wensen, voor het volume en de lengte die jij wilt.',
      learnMore: 'Meer informatie',
      igTitle: 'Instagram',
      igFollow: 'Volg ons op Instagram',
      seeMore: 'Meer bekijken',
    },
    product: {
      from: 'vanaf',
      texture: 'Textuur',
      hairLength: 'Haarlengte',
      color: 'Kleur',
      salesPoint: '100% Virgin Indiaas Menselijk Haar — Onbewerkt & Herbruikbaar',
      addToCart: 'In winkelwagen',
      zeroInterest: 'Geen rente',
      installmentsPrefix: '4 betalingen, of vanaf',
      installmentsSuffix: 'met',
      description: 'Beschrijving',
      careAccordion: 'Haal het beste uit je haar',
      careBody:
        'Ontwar voorzichtig van de punten naar de aanzet voor het wassen. Gebruik lauwwarm water en een sulfaatvrije, hydraterende shampoo & conditioner. Laat aan de lucht drogen en gebruik hittebescherming.',
      readCareGuide: 'Lees de volledige verzorgingsgids',
      shippingAccordion: 'Verzendinformatie',
      shippingBody:
        'Bestellingen worden binnen 1–2 werkdagen verwerkt. Standaardlevering duurt 3–5 werkdagen en is gratis boven $200.',
      askAccordion: 'Stel een vraag',
      sendQuestion: 'Vraag versturen',
      askSuccess: 'Bedankt! Onze stylisten van Giordanahaircompany antwoorden spoedig per e-mail.',
      share: 'Delen',
      tweet: 'Tweeten',
      pinIt: 'Pinnen',
      customerReviews: 'Klantbeoordelingen',
      beFirstReview: 'Schrijf als eerste een beoordeling',
      basedOnReviews: 'Gebaseerd op {n} beoordeling(en)',
      writeReview: 'Schrijf een beoordeling',
      cancelReview: 'Annuleren',
      submitReview: 'Beoordeling plaatsen',
      reviewThanks: 'Bedankt! Je beoordeling voor Giordanahaircompany is verzonden.',
      youMayAlsoLike: 'Misschien vind je dit ook leuk',
    },
    collection: {
      productsCount: 'producten',
      sortBy: 'Sorteren op',
      featured: 'Uitgelicht',
      priceAsc: 'Prijs, laag naar hoog',
      priceDesc: 'Prijs, hoog naar laag',
      titleAsc: 'Alfabetisch, A-Z',
      noProducts: 'Geen producten gevonden in deze collectie.',
    },
    cart: {
      title: 'Winkelwagen',
      continueShopping: 'Verder winkelen',
      empty: 'Je winkelwagen is momenteel leeg.',
      shopExtensions: 'Bekijk Hairextensions',
      discountCode: 'Kortingscode',
      apply: 'Toepassen',
      orderNote: 'Bestelnotitie',
      orderNotePlaceholder: 'Speciale instructies voor je bestelling...',
      subtotal: 'Subtotaal',
      discount: 'Korting',
      total: 'Totaal',
      taxesNote: 'Verzendkosten, belastingen en kortingscodes worden bij het afrekenen berekend.',
      checkout: 'Afrekenen',
      connecting: 'Verbinden met kassa...',
      freeShippingUnlocked: 'Je komt in aanmerking voor gratis standaardverzending!',
      freeShippingRemaining: 'Voeg nog ${amount} toe voor gratis verzending.',
    },
    footer: {
      tagline:
        '100% Virgin Indiaas Menselijk Haar. Ethisch verkregen, onbewerkt en vervaardigd voor een naadloze luxe uitstraling.',
      about: 'Over ons',
      customerService: 'Klantenservice',
      ourStory: 'Ons Verhaal',
      services: 'Diensten',
      reviews: 'Beoordelingen',
      instagram: 'Instagram',
      contactUs: 'Neem contact op',
      faq: 'Veelgestelde vragen',
      careGuide: 'Haal het beste uit je haar',
      shippingInfo: 'Verzendinfo',
      returnPolicy: 'Retourbeleid',
      salonPolicies: 'Salonbeleid',
      joinList: 'Word lid van de Giordana lijst',
      joinDesc:
        'Schrijf je in en ontvang 10% korting op je eerste bestelling plus exclusieve aanbiedingen.',
      emailPlaceholder: 'Vul je e-mailadres in',
      subscribeSuccess:
        'Welkom bij Giordanahaircompany! Gebruik code GIORDANA10 bij het afrekenen voor 10% korting.',
      rights: '© 2026 Giordanahaircompany - Alle rechten voorbehouden',
      privacy: 'Privacy',
      legal: 'Juridisch',
      servicePolicies: 'Servicevoorwaarden',
    },
    servicesPage: {
      title: 'Diensten',
      subtitle: 'Professionele plaatsing van hairextensions afgestemd op jouw natuurlijke haar',
      bookNow: 'Nu Boeken',
      offeredTitle: 'Onze Diensten',
      estTime: 'GESCHATTE DUUR',
      recommended: 'AANBEVOLEN',
      requestAppt: 'Afspraak aanvragen',
      requestConfirm:
        'Bedankt! Je afspraakverzoek is ontvangen. Ons team van Giordanahaircompany bevestigt spoedig per e-mail.',
      submitRequest: 'Aanvraag versturen',
      cancel: 'Annuleren',
      shopExtensions: 'Shop extensions',
    },
    pages: {
      ourStoryTitle: 'Ons Verhaal',
      ourStorySubtitle: 'Lees meer over onze liefde voor hairextensions',
      ourStoryP1:
        'Wij geloven dat iedereen eenvoudig toegang moet hebben tot de allerhoogste kwaliteit hairextensions en ervaren stylisten.',
      ourStoryP2:
        'Onze zorgvuldige plaatsingstechnieken beschermen en bevorderen de gezondheid van jouw natuurlijke haar.',
      ourStoryP3:
        'Onze steeds groeiende collectie luxe extensions kan volledig worden aangepast aan jouw stijl, volume en lengte.',
      meetFounder: 'Ontmoet de Oprichtster',
      founderBio:
        'Giordana is een gepassioneerde en zeer ervaren haarstylist met meer dan tien jaar ervaring. Giordanahaircompany is ontstaan uit haar wens om elke klant moeiteloos een prachtige, natuurlijke look te geven.',
      faqTitle: 'Veelgestelde Vragen',
      faqSubtitle: 'Alles wat je moet weten over Giordanahaircompany',
      reviewsTitle: 'Klantbeoordelingen',
      reviewsSubtitle: 'Gemiddeld 5.0 beoordeeld door geverifieerde Giordanahaircompany klanten',
      contactTitle: 'Neem Contact Op',
      contactSubtitle: 'Vragen over texturen, lengtes of maatwerk? Mail ons op hello@giordanahaircompany.com',
      messageSent: 'Bericht verzonden',
      messageSentBody: 'Bedankt voor je bericht aan Giordanahaircompany. We reageren binnen 24 uur.',
      send: 'Versturen',
      careTitle: 'Haal het Beste uit je Haar',
      careSubtitle: 'Essentiële verzorgingsgids voor 100% Virgin Indiaas Haar',
      searchTitle: 'Zoeken',
      searchPlaceholder: 'Zoek bij Giordanahaircompany...',
      popularExtensions: 'Populaire Extensions',
      popupTitle: '10% korting ontvangen?',
      popupBody: 'Schrijf je in voor onze nieuwsbrief en ontvang 10% korting op je eerste bestelling.',
      subscribe: 'Inschrijven',
      chatGreeting: '👋 Hallo! Stuur ons gerust een bericht met je vragen. We helpen je graag!',
      chatPlaceholder: 'Typ een bericht...',
    },
  },
};
