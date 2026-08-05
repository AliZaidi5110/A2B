export const siteConfig = {
  name: "A2B Chauffeur Tour Services",
  shortName: "A2B",
  tagline: "Book Your Luxury Chauffeur and Tour Across the Road",
  description:
    "A2B Chauffeur Tour Services provides luxury Mercedes chauffeur and tour travel across the United Kingdom. Trained drivers, efficient routes, and bespoke VIP service.",
  url: "https://www.a2bchauffeur-tours.com",
  phoneDisplay: "+44 7938 994070",
  phoneTel: "+447938994070",
  phoneRaw: "00447938994070",
  wechat: "kp61pke",
  lineDisplay: "+44 7938 994070",
  lineTel: "+447938994070",
  /** Opens phone dialer; add the same number as a LINE contact in Taiwan */
  lineHref: "https://line.me/R/ti/p/~447938994070",
  whatsappDisplay: "+44 7938 994070",
  whatsappHref: "https://wa.me/447938994070",
  promoVideo: {
    src: "/videos/a2b-promo.mp4",
    /** Google Drive embed — reliable playback when self-hosted file is unavailable */
    embedUrl:
      "https://drive.google.com/file/d/18WmFVo8GzVP0Kg1DuGz_m3FGqyLS1phL/preview",
    driveUrl:
      "https://drive.google.com/file/d/18WmFVo8GzVP0Kg1DuGz_m3FGqyLS1phL/view",
  },
  email: "",
  address: {
    street: "71-75 Shelton Street, Covent Garden",
    city: "London",
    postalCode: "WC2H 9JQ",
    country: "United Kingdom",
  },
  companyNumber: "16359369",
  hours: "24/7",
  social: {
    instagram: "https://www.instagram.com/silver.harbour",
    facebook: "https://www.facebook.com/share/14sxMByKW4x/",
    tiktok: "https://www.tiktok.com/@agreenharbour",
    /** Xiaohongshu (RedNote / 小红书) */
    rednote: "https://xhslink.com/m/87XPlLFpe6a",
  },
} as const;
