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
    'nav.compare': 'Compare',
    'nav.rankings': 'Rankings',
    'nav.directory': 'Directory',
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
    'trivia.shareScore': 'Share your score',

    'share.label': 'Share:',
    'share.copyLink': 'Copy link',
    'share.copied': 'Copied!',

    'compare.title': 'Compare Airports',
    'compare.subtitle': 'Pick two airports to compare transport, security wait times, and amenities side by side.',
    'compare.selectA': 'First airport',
    'compare.selectB': 'Second airport',
    'compare.choosePlaceholder': 'Choose an airport…',
    'compare.swap': 'Swap',
    'compare.noSelection': 'Choose two airports above to see the comparison.',
    'compare.rowRegion': 'Region',
    'compare.rowPassengers': 'Passengers',
    'compare.rowTerminals': 'Terminals',
    'compare.rowDistance': 'Distance to city',
    'compare.rowTransport': 'Cheapest transport',
    'compare.rowSecurityTypical': 'Security — typical wait',
    'compare.rowSecurityPeak': 'Security — peak wait',
    'compare.rowAmenities': 'Amenities',
    'compare.rowHubAirlines': 'Hub airlines',
    'compare.readGuide': 'Read full guide →',

    'rankings.title': 'Airport Rankings',
    'rankings.subtitle': 'Real data pulled straight from every guide on the site — no separate lists to maintain, no guesswork.',
    'rankings.crumb': 'Rankings',
    'rankings.viewRanking': 'View ranking →',
    'rankings.countSuffix': 'airports ranked',

    'directory.title': 'Airport Directory',
    'directory.subtitle': 'Filter every airport on the site by region, distance to downtown, security speed, and train access.',
    'directory.filterRegion': 'Region',
    'directory.filterDistance': 'Distance to downtown',
    'directory.filterSecurity': 'Security speed',
    'directory.filterRail': 'Direct train to the city only',
    'directory.anyOption': 'Any',
    'directory.distanceClose': 'Under 15 km',
    'directory.distanceMid': '15–30 km',
    'directory.distanceFar': 'Over 30 km',
    'directory.securityFast': 'Fast (under 20 min)',
    'directory.securityModerate': 'Moderate (20–35 min)',
    'directory.securitySlower': 'Slower (over 35 min)',
    'directory.reset': 'Reset filters',
    'directory.resultsCount': 'airports match',
    'directory.noResults': 'No airports match these filters — try loosening one.',

    'affiliate.title': 'Book & Save',
    'affiliate.disclosure': 'These are affiliate links — we may earn a commission if you book through them, at no extra cost to you.',
    'affiliate.parking': 'Book airport parking',
    'affiliate.lounge': 'Priority Pass lounge access',
    'affiliate.esim': 'Local eSIM data plan',
    'affiliate.carRental': 'Compare car rental deals',
    'affiliate.flights': 'Search flights',
    'affiliate.hotels': 'Search hotels',
    'affiliate.activities': 'Tours and activities',

    'iata.title': 'Airport IATA Codes',
    'iata.subtitle': 'Look up the 3-letter IATA code for any airport covered on Terminal41 — search by city, country, or code.',
    'iata.placeholder': 'e.g. Barcelona, BCN, Japan…',
    'iata.colCode': 'IATA code',
    'iata.colAirport': 'Airport',
    'iata.colLocation': 'City, country',
    'iata.readGuide': 'Guide →',
    'iata.noResults': 'No airports match your search.',
    'iata.footerNote': 'Airport IATA Codes',

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
    'nav.compare': 'Comparar',
    'nav.rankings': 'Rankings',
    'nav.directory': 'Directorio',
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
    'trivia.shareScore': 'Comparte tu puntuación',

    'share.label': 'Compartir:',
    'share.copyLink': 'Copiar enlace',
    'share.copied': '¡Copiado!',

    'compare.title': 'Comparar Aeropuertos',
    'compare.subtitle': 'Elige dos aeropuertos para comparar transporte, tiempos de seguridad y servicios lado a lado.',
    'compare.selectA': 'Primer aeropuerto',
    'compare.selectB': 'Segundo aeropuerto',
    'compare.choosePlaceholder': 'Elige un aeropuerto…',
    'compare.swap': 'Intercambiar',
    'compare.noSelection': 'Elige dos aeropuertos arriba para ver la comparación.',
    'compare.rowRegion': 'Región',
    'compare.rowPassengers': 'Pasajeros',
    'compare.rowTerminals': 'Terminales',
    'compare.rowDistance': 'Distancia al centro',
    'compare.rowTransport': 'Transporte más barato',
    'compare.rowSecurityTypical': 'Seguridad — espera típica',
    'compare.rowSecurityPeak': 'Seguridad — espera en hora punta',
    'compare.rowAmenities': 'Servicios',
    'compare.rowHubAirlines': 'Aerolíneas base',
    'compare.readGuide': 'Leer la guía completa →',

    'rankings.title': 'Rankings de aeropuertos',
    'rankings.subtitle': 'Datos reales extraídos directamente de cada guía del sitio — sin listas separadas que mantener, sin conjeturas.',
    'rankings.crumb': 'Rankings',
    'rankings.viewRanking': 'Ver ranking →',
    'rankings.countSuffix': 'aeropuertos clasificados',

    'directory.title': 'Directorio de aeropuertos',
    'directory.subtitle': 'Filtra todos los aeropuertos del sitio por región, distancia al centro, velocidad de seguridad y acceso en tren.',
    'directory.filterRegion': 'Región',
    'directory.filterDistance': 'Distancia al centro',
    'directory.filterSecurity': 'Velocidad de seguridad',
    'directory.filterRail': 'Solo con tren directo a la ciudad',
    'directory.anyOption': 'Cualquiera',
    'directory.distanceClose': 'Menos de 15 km',
    'directory.distanceMid': '15–30 km',
    'directory.distanceFar': 'Más de 30 km',
    'directory.securityFast': 'Rápida (menos de 20 min)',
    'directory.securityModerate': 'Moderada (20–35 min)',
    'directory.securitySlower': 'Más lenta (más de 35 min)',
    'directory.reset': 'Restablecer filtros',
    'directory.resultsCount': 'aeropuertos coinciden',
    'directory.noResults': 'Ningún aeropuerto coincide con estos filtros — prueba a relajar alguno.',

    'affiliate.title': 'Reserva y ahorra',
    'affiliate.disclosure': 'Estos son enlaces de afiliado — podemos recibir una comisión si reservas a través de ellos, sin coste adicional para ti.',
    'affiliate.parking': 'Reserva parking del aeropuerto',
    'affiliate.lounge': 'Acceso a salas VIP con Priority Pass',
    'affiliate.esim': 'eSIM de datos local',
    'affiliate.carRental': 'Compara ofertas de alquiler de coche',
    'affiliate.flights': 'Buscar vuelos',
    'affiliate.hotels': 'Buscar hoteles',
    'affiliate.activities': 'Tours y actividades',

    'iata.title': 'Códigos IATA de aeropuertos',
    'iata.subtitle': 'Busca el código IATA de tres letras de cualquier aeropuerto cubierto en Terminal41 — por ciudad, país o código.',
    'iata.placeholder': 'ej. Barcelona, BCN, Japón…',
    'iata.colCode': 'Código IATA',
    'iata.colAirport': 'Aeropuerto',
    'iata.colLocation': 'Ciudad, país',
    'iata.readGuide': 'Guía →',
    'iata.noResults': 'Ningún aeropuerto coincide con tu búsqueda.',
    'iata.footerNote': 'Códigos IATA',

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
