// Central UI string dictionary. Article/legal-page content lives in its own
// Markdown/Astro files per locale — this file is only for shared interface
// strings (nav, footer, buttons, labels) used across components.

export const defaultLang = 'en';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.regions': 'Regions',
    'nav.about': 'About',
    'nav.searchPlaceholder': 'Search airport or city…',
    'nav.searchLabel': 'Search airports',
    'nav.toggleMenu': 'Toggle navigation menu',
    'nav.trivia': 'Trivia',
    'nav.surpriseMe': 'Surprise me',

    'footer.regions': 'Regions',
    'footer.site': 'Site',
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.search': 'Search',
    'footer.rss': 'RSS feed',
    'footer.legalNotice': 'Legal Notice',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.rights': 'All rights reserved.',

    'home.tagline': 'Your gate to smarter travel',
    'home.description':
      'In-depth, practical guides to airports around the world — terminals, airlines, transport, parking, wifi, lounges, duty-free, and what to do during a long layover.',
    'home.latestGuides': 'Latest guides',
    'home.allRegions': 'All regions',
    'home.noArticles': 'No articles published yet — check back soon.',
    'home.noRegionResults': 'No airports match this region yet.',
    'home.airport': 'airport',
    'home.airports': 'airports',
    'home.mapTitle': 'Explore the map',
    'home.mapSubtitle': 'Click any airport to jump straight to its guide.',

    'regions.title': 'Browse by region',
    'regions.crumb': 'Regions',
    'regions.suffix': 'airports',
    'regions.noResults': 'No guides published for this region yet.',

    'search.title': 'Search airports',
    'search.subtitle': 'Search by airport name, city, country, or IATA code.',
    'search.placeholder': 'e.g. Madrid, BCN, Schiphol…',
    'search.noResults': 'No airports match your search.',

    'article.published': 'Published',
    'article.updated': 'Updated',
    'article.gettingThere': 'Getting there, at a glance',
    'article.amenitiesGlance': 'Amenities, at a glance',
    'article.relatedAirports': 'Related airports',

    'toc.title': 'On this page',

    'quickFacts.iataCode': 'IATA code',
    'quickFacts.passengers': 'Passengers',
    'quickFacts.terminals': 'Terminals',
    'quickFacts.toCityCenter': 'To city center',

    'arrival.question': '✈️ What kind of flight are you taking?',
    'arrival.arriveAt': 'Arrive at the airport',
    'arrival.typicalWait': 'Typical security wait',
    'arrival.peakWait': 'Peak-hour wait',

    'spotlight.eyebrow': 'Only here',
    'hubAirlines.title': 'Hub airlines',

    'trivia.title': 'Airport Trivia',
    'trivia.subtitle': "How well do you know the world's busiest airports? Guess the airport from one true fact — no searching, just gut instinct.",
    'trivia.start': 'Start quiz',
    'trivia.questionWord': 'Question',
    'trivia.ofWord': 'of',
    'trivia.correct': 'Correct!',
    'trivia.incorrect': 'Not quite —',
    'trivia.next': 'Next question',
    'trivia.seeResults': 'See results',
    'trivia.resultsTitle': 'Your score',
    'trivia.resultsExpert': 'Aviation expert! ✈️',
    'trivia.resultsFrequent': 'Frequent flyer 🧳',
    'trivia.resultsBeginner': 'Just getting started 🌱',
    'trivia.bestScore': 'Best score',
    'trivia.playAgain': 'Play again',
    'trivia.readGuide': 'Read the guide →',

    'cookie.message': 'We use cookies for essential site functionality and, if you allow it, to understand how the site is used. Read our',
    'cookie.policyLink': 'Cookie Policy',
    'cookie.decline': 'Decline',
    'cookie.accept': 'Accept',

    'notFound.eyebrow': '404',
    'notFound.heading': "Looks like this flight doesn't exist",
    'notFound.description': "The page you're looking for has been rerouted or never took off.",
    'notFound.backHome': 'Back to home',

    'lang.switchTo': 'Español',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.regions': 'Regiones',
    'nav.about': 'Quiénes somos',
    'nav.searchPlaceholder': 'Busca aeropuerto o ciudad…',
    'nav.searchLabel': 'Buscar aeropuertos',
    'nav.toggleMenu': 'Abrir menú de navegación',
    'nav.trivia': 'Trivia',
    'nav.surpriseMe': 'Sorpréndeme',

    'footer.regions': 'Regiones',
    'footer.site': 'Sitio',
    'footer.legal': 'Legal',
    'footer.about': 'Quiénes somos',
    'footer.search': 'Buscar',
    'footer.rss': 'Feed RSS',
    'footer.legalNotice': 'Aviso Legal',
    'footer.privacyPolicy': 'Política de Privacidad',
    'footer.cookiePolicy': 'Política de Cookies',
    'footer.rights': 'Todos los derechos reservados.',

    'home.tagline': 'Tu puerta a un viaje más inteligente',
    'home.description':
      'Guías detalladas y prácticas de aeropuertos de todo el mundo — terminales, aerolíneas, transporte, parking, wifi, salas VIP, duty-free y qué hacer si tienes una escala larga.',
    'home.latestGuides': 'Últimas guías',
    'home.allRegions': 'Todas las regiones',
    'home.noArticles': 'Todavía no hay artículos publicados — vuelve pronto.',
    'home.noRegionResults': 'Todavía no hay aeropuertos en esta región.',
    'home.airport': 'aeropuerto',
    'home.airports': 'aeropuertos',
    'home.mapTitle': 'Explora el mapa',
    'home.mapSubtitle': 'Haz clic en cualquier aeropuerto para ir directo a su guía.',

    'regions.title': 'Explora por región',
    'regions.crumb': 'Regiones',
    'regions.suffix': 'aeropuertos',
    'regions.noResults': 'Todavía no hay guías publicadas para esta región.',

    'search.title': 'Buscar aeropuertos',
    'search.subtitle': 'Busca por nombre de aeropuerto, ciudad, país o código IATA.',
    'search.placeholder': 'ej. Madrid, BCN, Schiphol…',
    'search.noResults': 'Ningún aeropuerto coincide con tu búsqueda.',

    'article.published': 'Publicado',
    'article.updated': 'Actualizado',
    'article.gettingThere': 'Cómo llegar, de un vistazo',
    'article.amenitiesGlance': 'Servicios, de un vistazo',
    'article.relatedAirports': 'Aeropuertos relacionados',

    'toc.title': 'En esta página',

    'quickFacts.iataCode': 'Código IATA',
    'quickFacts.passengers': 'Pasajeros',
    'quickFacts.terminals': 'Terminales',
    'quickFacts.toCityCenter': 'Al centro de la ciudad',

    'arrival.question': '✈️ ¿Qué tipo de vuelo tienes?',
    'arrival.arriveAt': 'Llega al aeropuerto',
    'arrival.typicalWait': 'Espera típica en seguridad',
    'arrival.peakWait': 'Espera en hora punta',

    'spotlight.eyebrow': 'Solo aquí',
    'hubAirlines.title': 'Aerolíneas base',

    'trivia.title': 'Trivia de Aeropuertos',
    'trivia.subtitle': '¿Cuánto sabes sobre los aeropuertos con más tráfico del mundo? Adivina el aeropuerto a partir de un dato real — sin buscar, solo intuición.',
    'trivia.start': 'Empezar',
    'trivia.questionWord': 'Pregunta',
    'trivia.ofWord': 'de',
    'trivia.correct': '¡Correcto!',
    'trivia.incorrect': 'Casi —',
    'trivia.next': 'Siguiente pregunta',
    'trivia.seeResults': 'Ver resultados',
    'trivia.resultsTitle': 'Tu puntuación',
    'trivia.resultsExpert': '¡Experto en aviación! ✈️',
    'trivia.resultsFrequent': 'Viajero frecuente 🧳',
    'trivia.resultsBeginner': 'Recién empezando 🌱',
    'trivia.bestScore': 'Mejor puntuación',
    'trivia.playAgain': 'Jugar de nuevo',
    'trivia.readGuide': 'Leer la guía →',

    'cookie.message': 'Usamos cookies para el funcionamiento esencial de la web y, si lo permites, para entender cómo se usa el sitio. Lee nuestra',
    'cookie.policyLink': 'Política de Cookies',
    'cookie.decline': 'Rechazar',
    'cookie.accept': 'Aceptar',

    'notFound.eyebrow': '404',
    'notFound.heading': 'Parece que este vuelo no existe',
    'notFound.description': 'La página que buscas ha sido redirigida o nunca llegó a despegar.',
    'notFound.backHome': 'Volver al inicio',

    'lang.switchTo': 'English',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale === 'es') return 'es';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// "Europe airports" reads fine in English, but the same word order in
// Spanish ("Europa aeropuertos") is backwards — needs "Aeropuertos en
// Europa" instead. Kept as its own helper rather than a simple suffix.
export function regionPageTitle(regionLabel: string, lang: Lang): string {
  return lang === 'es' ? `Aeropuertos en ${regionLabel}` : `${regionLabel} airports`;
}

// Given a pathname (with or without the /es prefix) and a target locale,
// returns the equivalent path in that locale. Assumes the same slug is used
// in both locales (no per-locale URL slug translation).
export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  const stripped = pathname.replace(/^\/es(\/|$)/, '/');
  if (targetLang === 'en') return stripped;
  return stripped === '/' ? '/es/' : `/es${stripped}`;
}
