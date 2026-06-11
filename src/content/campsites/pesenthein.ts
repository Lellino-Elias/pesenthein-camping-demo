import type { CampsiteConfig } from "../types";

/**
 * FKK & Textil Camping-Strandbad Pesenthein — Pesenthein, 9872 Millstatt am See, Kärnten.
 * Alle Texte/Fakten belegt aus pesenthein.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Pesenthein-Fotos in /public/campsites/pesenthein/.
 * EHRLICH:
 *  - Der Platz liegt laut Quelle DIREKT am Millstätter See → "am See"-Rahmung zulässig.
 *  - "FKK & Textil" ist wörtlich belegt (Quelle nennt getrennte FKK- und Textilbereiche).
 *  - Preise = REALE Camping-Tagespreise (Nebensaison-„ab", Stellplatz + 2 Personen, zzgl.
 *    Ortstaxe & Strom) → pricesArePlaceholder=false. Belege in REPORT.md.
 *  - Keine eindeutige Auszeichnung → awards bleibt leer.
 *  - Kein Sonnenuntergangs-Foto vorhanden → hero.sunset wird weggelassen.
 */
const IMG = "/campsites/pesenthein";

export const pesenthein: CampsiteConfig = {
  name: "FKK & Textil Camping-Strandbad Pesenthein",
  shortName: "Pesenthein",
  slug: "pesenthein",
  ort: "Pesenthein am Millstätter See",
  region: "Kärnten",
  brandKind: "FKK- & Textil-Camping",
  see: "Millstätter See",
  regionLong: "Millstätter See · Kärnten · Österreich",

  claim: "Ihr Logenplatz direkt am Millstätter See",
  claimEmphasis: "Logenplatz",
  intro:
    "FKK- & Textil-Camping direkt am glasklaren Millstätter See: rund 170 großzügige Terrassen-Stellplätze auf 15.000 m², ein eigenes Strandbad und Seeblick von jeder Ebene — seit über 35 Jahren ein Geheimtipp für Naturliebhaber.",

  logo: { src: `${IMG}/logo-pesenthein.png`, alt: "FKK & Textil Camping-Strandbad Pesenthein Logo" },

  statement: {
    text: "Genießen Sie den Luxus der Freiheit in der Natur — textil oder FKK, am wärmenden Millstätter See.",
    emphasis: "Luxus der Freiheit",
  },

  pillars: [
    {
      title: "Direkt am Millstätter See",
      text: "Auf der Sonnenseite der Alpen, adriatisch mild — der See hat Trinkwasserqualität und im Sommer angenehme 20 bis 25 °C.",
      image: { src: `${IMG}/see-stille-ufer.webp`, alt: "Stilles Ufer des Millstätter Sees mit Blick auf die Berge" },
    },
    {
      title: "Logenplatz auf Terrassen",
      text: "Durch die leicht hängende Lage genießen Sie von jeder Ebene den weiten Blick über See und Berge — je höher, desto schöner.",
      image: { src: `${IMG}/terrassen-seeblick-pavillon.webp`, alt: "Terrassen-Stellplätze mit Seeblick und zentralem Pavillon in Pesenthein" },
    },
    {
      title: "Eigenes Strandbad",
      text: "Ein Unterführungsweg führt vom Campingplatz direkt ins platzeigene Strandbad am See — für Campinggäste inklusive.",
      image: { src: `${IMG}/strandbad-liegewiese.webp`, alt: "Liegewiese im Strandbad Pesenthein am Millstätter See" },
    },
  ],

  usps: [
    "Direkt am Millstätter See",
    "~170 Terrassen-Stellplätze auf 15.000 m²",
    "FKK & Textil – getrennte Bereiche",
    "Eigenes Strandbad inklusive",
    "See in Trinkwasserqualität",
    "Millstätter See Inclusive Card inkl.",
  ],

  trust: {
    heading: "Worauf Sie sich in Pesenthein verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Seit über 35 Jahren ein Geheimtipp für Naturliebhaber: ein eigenes Strandbad am See, faire Tagespreise inklusive Millstätter See Inclusive Card und ein See in Trinkwasserqualität — direkt vor dem Stellplatz.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme-see.webp`, alt: "Luftaufnahme: Camping Pesenthein mit Strandbad direkt am Millstätter See" },
  },

  camping: {
    heading: "Terrassencamping am Millstätter See",
    intro:
      "Auf 15.000 m² liegen rund 170 großzügige Einzel-Stellplätze auf einer Blumenwiese — terrassiert ausgerichtet, mit freiem Blick auf Berge und Wasser.",
    features: [
      {
        title: "Terrassierte Stellplätze",
        text: "Die Plätze gibt es in zwei Größen, sodass auch größere Wohnmobile und Wohnwagen genug Raum finden. Alle Terrassen sind über asphaltierte Wege gut erreichbar.",
        image: { src: `${IMG}/stellplaetze-terrassen.webp`, alt: "Terrassierte Stellplätze mit Wohnwagen und asphaltierten Wegen in Pesenthein" },
      },
      {
        title: "Logenblick aufs Wasser",
        text: "Eine Blumenwiese als Stellplatz, klares Wasser zum Baden: Camper schätzen die terrassierte Ausrichtung und den ungehinderten Blick auf Berge und See.",
        image: { src: `${IMG}/logenblick-wiese-see.webp`, alt: "Wiesen-Stellplätze mit weitem Blick über den Millstätter See" },
      },
      {
        title: "Pavillon mit Sanitär rund um die Uhr",
        text: "Im zentralen Pavillon: beheizte, helle Duschräume, Babywickelraum sowie Waschküche mit Münz-Waschmaschinen und Trocknern — rund um die Uhr verfügbar. Dazu Spielzimmer, TV- und Aufenthaltsraum.",
        image: { src: `${IMG}/pavillon-sanitaer.webp`, alt: "Zentraler Pavillon des Campingplatzes Pesenthein über dem See" },
      },
      {
        title: "FKK & Textil – getrennte Bereiche",
        text: "Sowohl der Campingplatz als auch das zugehörige Strandbad sind in eigene FKK- und Textilbereiche unterteilt. Ein separater, ruhiger FKK-Bereich mit eigenen Sanitäranlagen wahrt die nötige Privatsphäre.",
        image: { src: `${IMG}/fkk-textil-strandbad.webp`, alt: "Liegewiese am Strandbad Pesenthein mit Blick auf den Millstätter See" },
      },
      {
        title: "Strom, Wasser & WLAN",
        text: "Die Stellplätze sind mit Strom- und Wasseranschluss versorgt, eine hygienische mobile Abwasser-Entsorgung ist vorhanden. Gratis-WLAN gibt es für unsere Campinggäste am Platz.",
        image: { src: `${IMG}/luftaufnahme-camping-see.webp`, alt: "Luftaufnahme der terrassierten Stellplätze von Camping Pesenthein am See" },
      },
    ],
  },

  mobilheime: {
    heading: "Auszeit zu zweit",
    intro:
      "Lieber feste Wände als Zelt? Zwei besondere Rückzugsorte direkt über dem See — romantisch, exklusiv und ganz auf die Zweisamkeit ausgerichtet.",
    items: [
      {
        name: "Seeapartment „Fischerhütte“",
        kind: "Ferienhaus am See · 2 Personen",
        text: "Exklusives 45-m²-Apartment in direkter Seelage mit großer Terrasse, Küche, Wohn-/Essbereich, Doppelbett und Bad mit Dusche/WC. Bettwäsche, Handtücher und Föhn inklusive. Arrangement ab € 375 p. P. / 2 Nächte inkl. Halbpension & 3 Tage Kärnten Badehaus Millstätter See.",
        image: { src: `${IMG}/fischerhuette-wohnen-seeblick.webp`, alt: "Wohn- und Essbereich der Fischerhütte mit offener Terrasse und Seeblick" },
        features: ["2 Personen", "ca. 45 m²", "direkte Seelage", "eigene Terrasse"],
      },
      {
        name: "Biwak „Freiheit | Libertà“",
        kind: "Übernachtung unter den Sternen · 2 Personen",
        text: "Von der höchsten Terrasse des Platzes ein fantastischer Panoramablick auf den See — geschützt vor neugierigen Blicken. Inklusive 3-Gang-Abendmenü, Frühstückskorb, Flasche Sekt und Eintritt ins Kärnten Badehaus. Ein 2016 gestartetes Leuchtturmprojekt.",
        image: { src: `${IMG}/biwak-unter-sternen.webp`, alt: "Blick aus dem Biwak Freiheit auf die Terrasse mit Panoramablick über den Millstätter See" },
        priceFrom: 250,
        features: ["2 Personen", "Panoramablick", "inkl. Abendmenü & Sekt", "inkl. Badehaus-Eintritt"],
      },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Am Textilstrand und im eigenen Strandbad dürfen Kinder Kinder sein — mit Spielzimmer, Spielplatz und flachem Seezugang direkt am Platz.",
    features: [
      {
        title: "Spielzimmer & Spielplatz",
        text: "Ein eigenes Spielzimmer im Pavillon und ein Kinderspielplatz sorgen für Abwechslung — bei jedem Wetter.",
        image: { src: `${IMG}/spielzimmer.webp`, alt: "Spielzimmer für Kinder im Pavillon von Camping Pesenthein" },
      },
      {
        title: "Badespaß am Steg",
        text: "Flacher Seezugang und Stege am eigenen Strandbad — ideal für Familien mit Kindern.",
        image: { src: `${IMG}/kinder-badesteg.webp`, alt: "Kinder am Badesteg im Strandbad Pesenthein" },
      },
      {
        title: "Sandstrand am See",
        text: "Spielen am Wasser und Plantschen im glasklaren, warmen Millstätter See — Sommertage, wie sie sein sollen.",
        image: { src: `${IMG}/kinder-sandstrand.webp`, alt: "Kinder spielen am Sandstrand des Millstätter Sees" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Millstätter See",
    intro:
      "Der See ist Ihr Wohnzimmer: baden, ein Boot vertäuen oder einfach die Stille am Wasser genießen — und mit der Millstätter See Inclusive Card die ganze Region entdecken.",
    items: [
      {
        title: "Baden in Trinkwasserqualität",
        text: "Der Millstätter See hat Trinkwasserqualität und erreicht im Sommer angenehme 20 bis 25 °C — Badesaison von Mai bis September.",
        image: { src: `${IMG}/baden-klarer-see.webp`, alt: "Glasklares Wasser am Steg des Millstätter Sees" },
      },
      {
        title: "Bootssteg & Segeln",
        text: "Eigener Bootssteg direkt am Platz — vertäuen, ablegen und den See vom Wasser aus erleben.",
        image: { src: `${IMG}/bootssteg-segeln.webp`, alt: "Boote und Segelboot am Bootssteg des Millstätter Sees" },
      },
      {
        title: "Natur & stille Buchten",
        text: "Schwäne, Schilf und ruhige Uferplätze: viel Raum, um abzuschalten und der Natur nah zu sein.",
        image: { src: `${IMG}/schwaene-am-see.webp`, alt: "Schwäne am ruhigen Ufer des Millstätter Sees" },
      },
    ],
  },

  anreise: {
    heading: "Anreise & Mobilität vor Ort",
    modes: [
      { title: "Mit dem Auto", text: "A10 Tauernautobahn, Abfahrt Seeboden-Millstätter See, dann am Seeufer entlang Richtung Millstatt/Radenthein bis Pesenthein 19." },
      { title: "Vor Ort mobil", text: "See & Berg Taxi Millstatt — kostenloses Taxi innerhalb der Gemeinde, inkludiert über die Millstätter See Inclusive Card." },
      { title: "Mit dem Schiff", text: "Mit der Rad-Fähre „Peter Pan“ oder „Moby Dick“ und der Seenixe in Seeboden entspannt über den See." },
    ],
  },

  galerie: {
    heading: "Ein Logenplatz am See",
    headingEmphasis: "Logenplatz",
    intro:
      "Terrassen über dem Wasser, ein eigenes Strandbad und zwei besondere Rückzugsorte — ein paar Eindrücke von Pesenthein am Millstätter See.",
    tag: "April bis Oktober",
    images: [
      { src: `${IMG}/galerie-fischerhuette.webp`, alt: "Außenansicht des Seeapartments Fischerhütte in Pesenthein" },
      { src: `${IMG}/galerie-biwak-innen.webp`, alt: "Innenansicht des Biwak Freiheit: Bettplattform mit Frühstückskorb unter den Dachfenstern aus Zirbenholz" },
      { src: `${IMG}/galerie-strand-kinder.webp`, alt: "Sandstrand am Millstätter See im Strandbad Pesenthein" },
      { src: `${IMG}/galerie-see-panorama.webp`, alt: "Panorama des Millstätter Sees mit Schwänen am Ufer" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Platzgröße und Personen — wir melden uns mit Ihrer persönlichen Verfügbarkeit für Pesenthein.",
    pricesArePlaceholder: false,
    priceNote:
      "Nebensaison-Richtpreis: Stellplatz + 2 Personen, zzgl. Ortstaxe € 2,70/Erw. & Strom nach Verbrauch. Hauptsaison (01.07.–31.08.) höher. Inkl. Millstätter See Inclusive Card. Mit dem Betrieb bestätigen.",
    highlight: {
      title: "Inklusive Inclusive Card",
      text: "Der Eintritt ins Strandbad und die Millstätter See Inclusive Card sind im Preis enthalten. Ermäßigungen ab dem 10. Tag (−5 %) bzw. ab dem 21. Tag (−10 %).",
    },
    categories: [
      // Reale Tagespreise Pesenthein (Nebensaison): kleiner Platz € 10,60 / großer Platz € 14,40
      // + Personengebühr € 11,70/Erw.; perNight = Platz + 2 Personen; perExtraGuest = € 11,70. Belege in REPORT.md.
      { id: "stellplatz-klein", label: "Stellplatz klein", perNight: 34, perExtraGuest: 11.7 },
      { id: "stellplatz-gross", label: "Stellplatz groß", perNight: 37.8, perExtraGuest: 11.7 },
    ],
  },

  kontakt: {
    tel: "+43 4766 2665",
    telHref: "tel:+4347662665",
    mail: "camping@pesenthein.at",
    adresse: "Pesenthein 19 · 9872 Millstatt am See · Kärnten",
    coords: { lat: 46.794975, lng: 13.596784 },
  },

  story: {
    kicker: "Seit über 35 Jahren",
    heading: "Ein Geheimtipp am Millstätter See",
    intro:
      "Am Ortsrand von Pesenthein, abseits der Hektik des Alltags, finden Naturliebhaber ihren persönlichen Logenplatz am See.",
    chapters: [
      { no: "01", kicker: "Lage", title: "Direkt am See", text: "15.000 m² Terrassengelände, rund 170 Einzel-Stellplätze und Seeblick von jeder Ebene — eingebettet zwischen Wald, Wiese und Wasser." },
      { no: "02", kicker: "Freiheit", title: "Textil & FKK", text: "Getrennte Textil- und FKK-Bereiche an Platz und Strandbad geben jedem Gast den Raum, den Urlaub auf seine Art zu genießen." },
      { no: "03", kicker: "Zweisamkeit", title: "Fischerhütte & Biwak", text: "Zwei exklusive Rückzugsorte über dem Wasser machen die schönsten Tage des Jahres zu etwas ganz Besonderem." },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Terrassen-Stellplätze", href: "#camping" },
        { label: "Pavillon & Sanitär", href: "#camping" },
        { label: "FKK & Textil", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Seeapartment Fischerhütte", href: "#mobilheime" },
        { label: "Biwak Freiheit", href: "#mobilheime" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Spielzimmer & Spielplatz", href: "#kinder" },
        { label: "Strandbad", href: "#kinder" },
      ],
    },
    {
      label: "Am See",
      href: "#aktivitaeten",
      children: [
        { label: "Baden", href: "#aktivitaeten" },
        { label: "Bootssteg", href: "#aktivitaeten" },
        { label: "Natur", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default pesenthein;
