/**
 * Curated Unsplash assets for REAPER_LABS / Source Bleed.
 * All photos use the free Unsplash License (not Unsplash+).
 * Credits: https://unsplash.com/license
 */
export type UnsplashFigure = {
  src: string;
  alt: string;
  photoPage: string;
  photographer: string;
};

const q = "auto=format&fit=crop&q=80" as const;

function u(photoId: string, w: number): string {
  return `https://images.unsplash.com/${photoId}?${q}&w=${w}`;
}

/** Featured hero: eSIM / SIM chip on dark background — matches eSIM_BLEED report tone */
export const featuredEsimBleed: UnsplashFigure = {
  src: u("photo-1753036051291-cfc20d052c24", 2400),
  alt: "SIM card with visible chip on a dark surface, illustrating cellular subscriber credentials",
  photoPage: "https://unsplash.com/photos/fcYNLhYAd5k",
  photographer: "User_Pascal",
};

/** Cell tower / RAN — UDP_REFLEX / 5G node amplification theme */
export const articleCellTower: UnsplashFigure = {
  src: u("photo-1679091131773-50f3cd76d7c3", 1600),
  alt: "Cellular tower with multiple antennas against the sky",
  photoPage: "https://unsplash.com/photos/a-very-tall-tower-with-lots-of-antennas-on-top-of-it-VXu7rdCa73g",
  photographer: "Rayyân",
};

/** Padlock on keyboard — crypto / encryption analysis */
export const articleCrypto: UnsplashFigure = {
  src: u("photo-1614064641938-3bbee52942c7", 1600),
  alt: "Red padlock on a computer keyboard representing encryption and key material",
  photoPage: "https://unsplash.com/photos/red-padlock-on-black-computer-keyboard-mT7lXZPjk7U",
  photographer: "FlyD",
};

/** Dense code / terminal aesthetic — fileless payload / malware analysis */
export const articleMalware: UnsplashFigure = {
  src: u("photo-1526374965328-7f61d4dc18c5", 1600),
  alt: "Abstract green characters on a screen suggesting code and exploitation research",
  photoPage: "https://unsplash.com/photos/matrix-movie-still-iar-afB0QQw",
  photographer: "Markus Spiske",
};

/** Night city grid — smart city / IoT infrastructure */
export const wideSmartCity: UnsplashFigure = {
  src: u("photo-1542382257-80dedb725088", 2000),
  alt: "Aerial view of a lit city at night, suggesting connected urban infrastructure",
  photoPage: "https://unsplash.com/photos/lighted-city-at-night-aerial-photo-OKOOGO578eo",
  photographer: "Nastya Dulhiier",
};

/** Order matches src/i18n/messages/en/blog.json articles[] */
export const listingArticleFigures: UnsplashFigure[] = [
  articleCellTower,
  articleCrypto,
  articleMalware,
];
