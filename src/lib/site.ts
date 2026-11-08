export const site = {
  name: "Mel Beaute & Aesthetic",
  shortName: "MB Aesthetic",
  tagline: "Your skin, our priority",
  slogan: "Enhance your beauty, reveal your confidence",
  mantra: "Rejuvenate · Lift · Renew",
  phoneDisplay: "+60 16-645 0026",
  phoneTel: "+60166450026",
  whatsapp: "https://wa.me/60166450026",
  whatsappMessage: (treatment?: string) => {
    const base =
      "Hi Mel Beaute & Aesthetic, I'd like to book an appointment";
    const text = treatment ? `${base} for ${treatment}.` : `${base}.`;
    return `https://wa.me/60166450026?text=${encodeURIComponent(text)}`;
  },
  maps: "https://www.google.com/maps/place/Mel+Beaute+%26+Aesthetic/@3.0983341,101.6873941,17z/data=!4m6!3m5!1s0x31cc4bd0e5667efd:0x5bebb40fc01552ce!8m2!3d3.0983341!4d101.6873941!16s%2Fg%2F11vsw8jw1l",
  instagram: "https://www.instagram.com/melbeaute_kl/",
  instagramHandle: "@melbeaute_kl",
  tiktok: "https://www.tiktok.com/@melbeaute_kl",
  tiktokHandle: "@melbeaute_kl",
  rating: 4.9,
  reviewCount: 282,
  hours: [
    { day: "Monday – Friday", time: "11:00 AM – 7:00 PM" },
    { day: "Saturday – Sunday", time: "10:00 AM – 6:00 PM" },
  ],
  locations: [
    {
      id: "kl",
      label: "Kuala Lumpur",
      area: "Taman Danau Desa",
      address: "5-1, Jalan 1/109F, Taman Danau Desa, 58100 Kuala Lumpur",
      maps: true,
    },
    {
      id: "jb",
      label: "Johor Bahru",
      area: "Taman Daya",
      address: "Taman Daya, Johor Bahru — confirm the suite via WhatsApp",
      maps: false,
    },
  ],
} as const;

export type PriceLine =
  | { kind: "single"; label?: string; promo: number; normal?: number }
  | { kind: "pack"; sessions: string; promo: number; normal?: number }
  | { kind: "tier"; label: string; promo: number; normal?: number };

export type Treatment = {
  name: string;
  detail?: string;
  prices: PriceLine[];
};

export type ServiceCategory = {
  id: string;
  catalog: string;
  title: string;
  blurb: string;
  focus: string[];
  image: string;
  treatments: Treatment[];
};

export const services: ServiceCategory[] = [
  {
    id: "pico",
    catalog: "Pico",
    title: "Pico Laser",
    blurb:
      "Target dullness, pigmentation, melasma, and acne scars with pico packages paired for your skin goal.",
    focus: ["Pigmentation", "Melasma", "Acne scars", "Glow"],
    image: "/brand/flyers/pico.jpg",
    treatments: [
      {
        name: "Pico Lip Laser",
        prices: [{ kind: "single", promo: 99, normal: 299 }],
      },
      {
        name: "Pico Laser + BBYSkin",
        detail: "Dull skin, dryness, uneven tone, fine lines, pigmentation, melasma",
        prices: [
          { kind: "pack", sessions: "5×", promo: 900, normal: 2245 },
          { kind: "pack", sessions: "10×", promo: 1990, normal: 4490 },
        ],
      },
      {
        name: "Pico Laser + Salmon",
        detail: "Damaged barrier, acne scars, pitted scars",
        prices: [
          { kind: "pack", sessions: "5×", promo: 900, normal: 2245 },
          { kind: "pack", sessions: "10×", promo: 1990, normal: 4490 },
        ],
      },
      {
        name: "Pico + Pigment",
        detail: "Pigmentation, dark spots, sunburn",
        prices: [
          { kind: "pack", sessions: "5×", promo: 699 },
          { kind: "pack", sessions: "10×", promo: 1200 },
        ],
      },
      {
        name: "Pico + Carbon Peel",
        detail: "Oil control, acne scars, brightening",
        prices: [
          { kind: "pack", sessions: "5×", promo: 699 },
          { kind: "pack", sessions: "10×", promo: 1200 },
        ],
      },
    ],
  },
  {
    id: "laser",
    catalog: "Laser",
    title: "Laser · HIFU · Stretchmark · Miss V",
    blurb:
      "Firm, renew, and resurface with CO₂ laser, HIFU lifting, stretchmark care, and feminine rejuvenation.",
    focus: ["Lifting", "Acne scars", "Firming", "Intimate care"],
    image: "/brand/flyers/laser.jpg",
    treatments: [
      {
        name: "HIFU Trial 300 Shot",
        detail: "Face & body firming, tightening, lifting",
        prices: [{ kind: "single", promo: 299 }],
      },
      {
        name: "HIFU 300 Shot + Mesolipo 10ml",
        prices: [{ kind: "single", promo: 599 }],
      },
      {
        name: "HIFU 600 Shot + Mesolipo 10ml",
        prices: [{ kind: "single", promo: 999 }],
      },
      {
        name: "HIFU Bodypart + Mesolipo 20ml",
        prices: [{ kind: "single", promo: 900 }],
      },
      {
        name: "CO₂ Laser Trial",
        detail: "Acne, scars, pores, collagen, brightening",
        prices: [{ kind: "single", promo: 199 }],
      },
      {
        name: "CO₂ Laser + PRP",
        prices: [
          { kind: "pack", sessions: "4×", promo: 800 },
          { kind: "pack", sessions: "8×", promo: 1500 },
        ],
      },
      {
        name: "CO₂ Laser + BBYSkin",
        prices: [
          { kind: "pack", sessions: "4×", promo: 900 },
          { kind: "pack", sessions: "8×", promo: 1600 },
        ],
      },
      {
        name: "Stretchmark Treatment",
        detail: "Resurfacing, firming, tone",
        prices: [
          { kind: "pack", sessions: "4×", promo: 999 },
          { kind: "pack", sessions: "10×", promo: 2200 },
        ],
      },
      {
        name: "Miss V Trial",
        detail: "Dryness, incontinence support, brightening, tightening",
        prices: [{ kind: "single", promo: 299 }],
      },
      {
        name: "Miss V Tightening",
        prices: [{ kind: "pack", sessions: "3×", promo: 699 }],
      },
      {
        name: "Miss V Pinky",
        prices: [{ kind: "pack", sessions: "3×", promo: 699 }],
      },
      {
        name: "Miss V Tight & Pinky",
        prices: [{ kind: "pack", sessions: "4×", promo: 1200 }],
      },
    ],
  },
  {
    id: "threads",
    catalog: "Nose Thread",
    title: "Nose & Face Threads",
    blurb:
      "Non-surgical lift for bridge height, tip definition, jawline, and double chin — instant support with collagen stimulation.",
    focus: ["Nose bridge", "Tip definition", "Face lift", "Double chin"],
    image: "/brand/flyers/threads.jpg",
    treatments: [
      {
        name: "Nose Thread",
        prices: [
          { kind: "tier", label: "6 pcs", promo: 570 },
          { kind: "tier", label: "8 pcs", promo: 744 },
          { kind: "tier", label: "12 pcs", promo: 1080 },
        ],
      },
      {
        name: "Nose Tip Thread",
        prices: [
          { kind: "tier", label: "4 pcs", promo: 380 },
          { kind: "tier", label: "6 pcs", promo: 550 },
        ],
      },
      {
        name: "Face Lift Thread",
        prices: [
          { kind: "tier", label: "8 pcs", promo: 960 },
          { kind: "tier", label: "12 pcs", promo: 1440 },
          { kind: "tier", label: "20 pcs", promo: 2500 },
        ],
      },
      {
        name: "Double Chin Thread",
        prices: [{ kind: "tier", label: "10 pcs", promo: 1200 }],
      },
    ],
  },
  {
    id: "mesolipo",
    catalog: "Mesolipo",
    title: "Fat Melting Mesolipo",
    blurb:
      "Sculpt stubborn fat on face and body — double chin, cheeks, arms, thighs, belly, and waist.",
    focus: ["Double chin", "Arms", "Belly", "Thighs"],
    image: "/brand/flyers/mesolipo.jpg",
    treatments: [
      {
        name: "Double Chin",
        prices: [
          { kind: "tier", label: "Normal", promo: 250 },
          { kind: "tier", label: "Thick", promo: 400 },
        ],
      },
      {
        name: "Chubby Cheek",
        prices: [
          { kind: "tier", label: "Normal", promo: 250 },
          { kind: "tier", label: "Thick", promo: 400 },
        ],
      },
      {
        name: "Upper Arm Fat",
        prices: [
          { kind: "tier", label: "Normal", promo: 399 },
          { kind: "tier", label: "Thick", promo: 699 },
        ],
      },
      {
        name: "Thigh Fat",
        prices: [
          { kind: "tier", label: "Normal", promo: 399 },
          { kind: "tier", label: "Thick", promo: 699 },
        ],
      },
      {
        name: "Belly Fat",
        prices: [
          { kind: "tier", label: "Normal", promo: 399 },
          { kind: "tier", label: "Thick", promo: 699 },
        ],
      },
      {
        name: "Waist Fat",
        prices: [
          { kind: "tier", label: "Normal", promo: 399 },
          { kind: "tier", label: "Thick", promo: 699 },
        ],
      },
    ],
  },
  {
    id: "skinz",
    catalog: "Skinz",
    title: "Skin Rejuvenation",
    blurb:
      "Boosters, Hydra Facial, Rejuran, and embroidery specials for glow, scars, eyes, and brows.",
    focus: ["Glow", "Scars", "Hydration", "Embroidery"],
    image: "/brand/flyers/skinz.jpg",
    treatments: [
      { name: "Babyskin Booster", prices: [{ kind: "single", promo: 220 }] },
      { name: "PDRN DNA Booster", prices: [{ kind: "single", promo: 220 }] },
      { name: "Acne Healer", prices: [{ kind: "single", promo: 220 }] },
      { name: "Traminex Whitening", prices: [{ kind: "single", promo: 220 }] },
      { name: "Vampire Booster", prices: [{ kind: "single", promo: 220 }] },
      { name: "Hydra Facial", prices: [{ kind: "single", promo: 220 }] },
      { name: "NCFT135 Booster", prices: [{ kind: "single", promo: 599 }] },
      { name: "Profilo", prices: [{ kind: "single", promo: 1100 }] },
      { name: "Luhilo", prices: [{ kind: "single", promo: 1100 }] },
      { name: "Plenhyage XL", prices: [{ kind: "single", promo: 1100 }] },
      { name: "Rejuran Scar", prices: [{ kind: "single", promo: 799 }] },
      { name: "Rejuran Eye", prices: [{ kind: "single", promo: 799 }] },
      { name: "Keloid Scar", prices: [{ kind: "single", promo: 399 }] },
      { name: "Lip Blush Embroidery", prices: [{ kind: "single", promo: 499 }] },
      { name: "Eyebrow Embroidery", prices: [{ kind: "single", promo: 499 }] },
    ],
  },
  {
    id: "drips",
    catalog: "Drips Whitening",
    title: "Whitening & Slimming Drips",
    blurb:
      "Clinic drip therapies for brighter tone, glow, detox, and metabolism support — single sessions or packages.",
    focus: ["Whitening", "Glow", "Slimming", "Detox"],
    image: "/brand/flyers/drips.jpg",
    treatments: [
      {
        name: "Snow Whitening",
        detail: "Brighten & even skin tone",
        prices: [
          { kind: "pack", sessions: "1×", promo: 189 },
          { kind: "pack", sessions: "5×", promo: 750 },
          { kind: "pack", sessions: "10×", promo: 1100 },
        ],
      },
      {
        name: "Pinky Gluta Diamond Booster",
        detail: "Glowing, healthy, youthful skin",
        prices: [
          { kind: "pack", sessions: "1×", promo: 299 },
          { kind: "pack", sessions: "5×", promo: 1250 },
          { kind: "pack", sessions: "10×", promo: 2000 },
        ],
      },
      {
        name: "Luminous Pearl Premium",
        detail: "Brighten, hydrate & revive",
        prices: [
          { kind: "pack", sessions: "1×", promo: 499 },
          { kind: "pack", sessions: "5×", promo: 2250 },
          { kind: "pack", sessions: "10×", promo: 4000 },
        ],
      },
      {
        name: "Slimming Premium Booster",
        detail: "Metabolism & healthy slimming support",
        prices: [
          { kind: "pack", sessions: "1×", promo: 299 },
          { kind: "pack", sessions: "5×", promo: 1150 },
          { kind: "pack", sessions: "10×", promo: 1800 },
        ],
      },
      {
        name: "Detoxe Nano",
        detail: "Detoxify, refresh & wellness",
        prices: [
          { kind: "pack", sessions: "1×", promo: 299 },
          { kind: "pack", sessions: "5×", promo: 1150 },
          { kind: "pack", sessions: "10×", promo: 1800 },
        ],
      },
    ],
  },
  {
    id: "btox",
    catalog: "BToX",
    title: "Anti-Ageing BToX",
    blurb:
      "Soften wrinkles, slim the jawline, refine pores, and treat shoulders, arms, calves, or hyperhidrosis.",
    focus: ["Wrinkles", "V-shape", "Lifting", "Sweat control"],
    image: "/brand/flyers/btox.jpg",
    treatments: [
      {
        name: "Crowsfeet",
        detail: "Kedutan mata",
        prices: [{ kind: "single", promo: 199, normal: 299 }],
      },
      {
        name: "Nose Wing",
        detail: "Relax alar",
        prices: [{ kind: "single", promo: 199, normal: 299 }],
      },
      {
        name: "Masseter / V-shape",
        detail: "Relax jaw",
        prices: [{ kind: "single", promo: 299, normal: 499 }],
      },
      {
        name: "Wrinkle",
        detail: "Kedutan dahi",
        prices: [{ kind: "single", promo: 299, normal: 499 }],
      },
      {
        name: "Skin Toxx",
        detail: "Kecilkan pori",
        prices: [{ kind: "single", promo: 299, normal: 499 }],
      },
      {
        name: "Barbie Lifting",
        detail: "Lifting & firming",
        prices: [{ kind: "single", promo: 799, normal: 899 }],
      },
      {
        name: "Stiff Shoulder",
        detail: "Merelakkan otot bahu",
        prices: [{ kind: "single", promo: 399, normal: 699 }],
      },
      {
        name: "Barbie Arm",
        detail: "Kecilkan otot lengan",
        prices: [{ kind: "single", promo: 399, normal: 699 }],
      },
      {
        name: "Ballet Calf",
        detail: "Kecilkan otot betis",
        prices: [{ kind: "single", promo: 399, normal: 699 }],
      },
      {
        name: "Hyperhidrosis",
        detail: "Kurangkan peluh ketiak",
        prices: [{ kind: "single", promo: 399, normal: 499 }],
      },
    ],
  },
  {
    id: "fillers",
    catalog: "Dermal Fillers",
    title: "Dermal Fillers",
    blurb:
      "Natural volume for chin, lips, cheeks, jawline, forehead, hands, and Miss V — plus dissolve when needed.",
    focus: ["Lips", "Chin", "Jawline", "Natural look"],
    image: "/brand/flyers/fillers.jpg",
    treatments: [
      {
        name: "Chin Filler",
        detail: "1 ml",
        prices: [{ kind: "single", promo: 280, normal: 499 }],
      },
      {
        name: "Smile Line",
        detail: "1 ml",
        prices: [{ kind: "single", promo: 280, normal: 499 }],
      },
      {
        name: "Barbie Cheek",
        detail: "1 ml",
        prices: [{ kind: "single", promo: 280, normal: 499 }],
      },
      {
        name: "Jawline Filler",
        detail: "1 ml",
        prices: [{ kind: "single", promo: 299, normal: 499 }],
      },
      {
        name: "Lip Filler",
        detail: "1 ml",
        prices: [{ kind: "single", promo: 299, normal: 499 }],
      },
      {
        name: "Barbie Forehead",
        detail: "2 ml",
        prices: [{ kind: "single", promo: 499, normal: 699 }],
      },
      {
        name: "Hand Rejuvenation",
        detail: "10 ml",
        prices: [{ kind: "single", promo: 900, normal: 1699 }],
      },
      {
        name: "Miss V Plump",
        detail: "10 ml",
        prices: [{ kind: "single", promo: 900, normal: 1699 }],
      },
      {
        name: "Dissolve Filler",
        detail: "3 ml",
        prices: [{ kind: "single", promo: 450, normal: 900 }],
      },
    ],
  },
];

export const reviews = [
  {
    name: "Google review",
    stars: 5,
    text: "Did the Barbie whitening and nose wing Botox here. The treatment worked really well and I’m happy with the results. The staff were also very friendly — thanks to Jessie and Lily.",
  },
  {
    name: "Google review",
    stars: 5,
    text: "Great service from Lily & Jessie! They are very attentive and accommodating. I love the instant results. Most importantly affordable price.",
  },
  {
    name: "Google review",
    stars: 5,
    text: "I’ve been coming here for almost a year now, and every visit has been consistently good. The place is nice, clean, and comfortable. Special thanks to Jessie.",
  },
  {
    name: "Google review",
    stars: 5,
    text: "My third CO₂ laser session was a pleasant experience. Ma’am Atika treated my face with great care and precision, and Shasha’s support during PRP meant a lot.",
  },
  {
    name: "Google review",
    stars: 5,
    text: "Skye assists with pure warmth. Professional team, nice place, and prices are very great.",
  },
  {
    name: "Google review",
    stars: 5,
    text: "First visit for an aesthetic treatment — staff were kind and professional, the treatment was smooth, and they really care about the client. I can see the results.",
  },
] as const;

export const values = [
  {
    title: "Safe & hygienic",
    text: "Clinic standards with a calm, clean suite.",
  },
  {
    title: "Advanced technology",
    text: "Pico, CO₂, HIFU, threads, injectables & drips.",
  },
  {
    title: "Professional care",
    text: "Attentive therapists who explain every step.",
  },
  {
    title: "Visible results",
    text: "4.9★ from hundreds of Google reviews.",
  },
] as const;

export function formatRM(amount: number) {
  return `RM${amount.toLocaleString("en-MY")}`;
}
