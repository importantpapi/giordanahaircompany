import type { Collection, Product, Review } from '../types/shop';

const COLOR_MAP: Record<string, { name: string; label: string; hex: string; swatchImage?: string }> = {
  '1': { name: '1', label: '1 - Jet Black', hex: '#090909' },
  '1b': { name: '1b', label: '1b - Natural Black', hex: '#1b1817' },
  '2': { name: '2', label: '2 - Darkest Brown', hex: '#2c1f19' },
  '4': { name: '4', label: '4 - Medium Brown', hex: '#4b3326' },
  '6': { name: '6', label: '6 - Chestnut Brown', hex: '#6f4e37' },
  '10': { name: '10', label: '10 - Light Brown', hex: '#8b6948' },
  '18A': { name: '18A', label: '#18A - Ash Blonde', hex: '#c7b08a', swatchImage: '/shades/18A.webp' },
  '30': { name: '30', label: '#30 - Medium Auburn', hex: '#7a4128', swatchImage: '/shades/30-1.webp' },
  '60': { name: '60', label: '#60 - Platinum Blonde', hex: '#efe8d6', swatchImage: '/shades/60.webp' },
  '350': { name: '350', label: '#350 - Copper Auburn', hex: '#9e4725', swatchImage: '/shades/350.webp' },
  '613': { name: '613', label: '613 - Platinum Blonde', hex: '#e6d39c' },
  '1001': { name: '1001', label: '#1001 - Light Ash Blonde', hex: '#e8dec8', swatchImage: '/shades/1001-1.webp' },
};

export interface ShadeSwatch {
  code: string;
  name: string;
  label: string;
  hex: string;
  textureImage: string;
  filter?: string;
  methods: Array<'tape-in' | 'genius-weft' | 'machine-weft' | 'clip-in' | 'keratin'>;
}

export const EXTENSION_METHODS = [
  { id: 'tape-in' as const, label: 'Tape-in Extensions', collection: 'tape-in-extensions', defaultProduct: 'indian-tape-hair-extensions-natural-wavy' },
  { id: 'genius-weft' as const, label: 'Genius Weft', collection: 'hair-extension-bundles', defaultProduct: 'natural-wavy-hair-extensions' },
  { id: 'machine-weft' as const, label: 'Machine Weft', collection: 'hair-extension-bundles', defaultProduct: 'hair-extensions-straight' },
  { id: 'clip-in' as const, label: 'Clip-in Extensions', collection: 'clip-in-extensions', defaultProduct: 'clip-in-hair-extensions-natural-wavy' },
  { id: 'keratin' as const, label: 'Keratin Extensions', collection: 'u-tip-extensions', defaultProduct: 'indian-u-tip-keratin-extensions-natural-wavy' },
];

export const SHADE_SWATCHES: ShadeSwatch[] = [
  {
    code: '1',
    name: 'Jet Black',
    label: '#1 Jet Black',
    hex: '#090909',
    textureImage: '/shades/30-2.webp',
    filter: 'grayscale(100%) brightness(0.28) contrast(1.25)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '1b',
    name: 'Natural Black',
    label: '#1B Natural Black',
    hex: '#1b1817',
    textureImage: '/shades/30-2.webp',
    filter: 'saturate(0.35) brightness(0.36) contrast(1.15)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '2',
    name: 'Darkest Brown',
    label: '#2 Darkest Brown',
    hex: '#2c1f19',
    textureImage: '/shades/30-2.webp',
    filter: 'saturate(0.55) brightness(0.48) contrast(1.1)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '4',
    name: 'Medium Brown',
    label: '#4 Medium Brown',
    hex: '#4b3326',
    textureImage: '/shades/30-2.webp',
    filter: 'saturate(0.75) brightness(0.68)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '6',
    name: 'Chestnut Brown',
    label: '#6 Chestnut Brown',
    hex: '#6f4e37',
    textureImage: '/shades/30-2.webp',
    filter: 'saturate(0.85) hue-rotate(8deg) brightness(0.85)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '10',
    name: 'Light Brown',
    label: '#10 Light Brown',
    hex: '#8b6948',
    textureImage: '/shades/1001-4.webp',
    filter: 'sepia(0.35) brightness(0.66) saturate(1.15)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '18A',
    name: 'Ash Blonde',
    label: '#18A Ash Blonde',
    hex: '#c7b08a',
    textureImage: '/shades/1001-4.webp',
    filter: 'sepia(0.18) brightness(0.84) saturate(0.85)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '30',
    name: 'Medium Auburn',
    label: '#30 Medium Auburn',
    hex: '#7a4128',
    textureImage: '/shades/30-2.webp',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '350',
    name: 'Copper Auburn',
    label: '#350 Copper Auburn',
    hex: '#9e4725',
    textureImage: '/shades/350-3.jpg',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '60',
    name: 'Platinum Blonde',
    label: '#60 Platinum Blonde',
    hex: '#efe8d6',
    textureImage: '/shades/1001-4.webp',
    filter: 'brightness(1.08) saturate(0.75)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '613',
    name: 'Platinum Blonde 613',
    label: '#613 Platinum Blonde',
    hex: '#e6d39c',
    textureImage: '/shades/1001-4.webp',
    filter: 'brightness(1.04) saturate(1.18) sepia(0.12)',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
  {
    code: '1001',
    name: 'Light Ash Blonde',
    label: '#1001 Light Ash Blonde',
    hex: '#e8dec8',
    textureImage: '/shades/1001-4.webp',
    methods: ['tape-in', 'genius-weft', 'machine-weft', 'clip-in', 'keratin'],
  },
];

const ALL_METHOD_COLORS = ['1', '1b', '2', '4', '6', '10', '18A', '30', '350', '60', '613', '1001'];

export const CUSTOM_SHADE_GALLERY = [
  { code: '#18A', label: 'Ash Blonde (#18A)', images: ['/shades/18A.webp'] },
  { code: '#30', label: 'Medium Auburn (#30)', images: ['/shades/30-1.webp', '/shades/30-2.webp', '/shades/30-3.jpg', '/shades/30-4.webp'] },
  { code: '#60', label: 'Platinum Blonde (#60)', images: ['/shades/60.webp'] },
  { code: '#350', label: 'Copper Auburn (#350)', images: ['/shades/350.webp', '/shades/350-1.webp', '/shades/350-2.webp', '/shades/350-3.jpg', '/shades/350-4.webp'] },
  { code: '#1001', label: 'Light Ash Blonde (#1001)', images: ['/shades/1001-1.webp', '/shades/1001-2.webp', '/shades/1001-3.webp', '/shades/1001-4.webp'] },
];

function makeColors(keys: string[]) {
  return keys.map((k) => COLOR_MAP[k] || COLOR_MAP['1b']);
}

function buildVariants(
  handle: string,
  priceByLength: Record<string, number>,
  colorKeys: string[],
  colorPremium: Record<string, number> = {}
) {
  const variants = [];
  for (const [length, basePrice] of Object.entries(priceByLength)) {
    for (const cKey of colorKeys) {
      const color = COLOR_MAP[cKey] || COLOR_MAP['1b'];
      const extra = colorPremium[cKey] || 0;
      variants.push({
        id: `${handle}-${length.replace('"', '')}-${color.name}`,
        title: `${length} / ${color.name}`,
        length,
        color: color.name,
        colorHex: color.hex,
        price: basePrice + extra,
        available: true,
      });
    }
  }
  return variants;
}

export const COLLECTIONS: Collection[] = [
  {
    handle: 'all',
    title: 'Shop Hair Extensions',
    description:
      'Shop for real hair extensions. Browse our human extensions, tape-in hair extensions, clip-in hair extensions and ponytails in curly, wavy, straight & kinky straight.',
  },
  {
    handle: 'hair-extension-bundles',
    title: 'Hair Extension Bundles',
    description:
      'Machine-wefted 100% virgin Indian human hair bundles. Unprocessed, chemical-free, and reusable.',
  },
  {
    handle: 'tape-in-extensions',
    title: 'Tape-In Extensions',
    description:
      'Lightweight, medical-grade adhesive tape-in extensions designed for flat, undetectable, and reusable installs.',
  },
  {
    handle: 'u-tip-extensions',
    title: 'U-Tip Extensions',
    description:
      'Individual keratin-bonded U-tip (K-Tip) strands for seamless 360-degree movement and long-lasting wear.',
  },
  {
    handle: 'i-tip-extensions',
    title: 'I-Tip Extensions',
    description:
      'Cold-fusion I-tip individual strands installed with microbeads—no heat or glue required.',
  },
  {
    handle: 'clip-in-extensions',
    title: 'Clip-In Extensions',
    description:
      'Instant length and volume in minutes. Each set includes silicone-lined clips for secure, damage-free daily wear.',
  },
  {
    handle: 'lace-closure',
    title: 'Lace Closure',
    description:
      'Hand-tied 4x4 HD lace closures that mimic a natural scalp for a flawless protective finish.',
  },
  {
    handle: 'ponytails',
    title: 'Ponytails',
    description:
      'Wrap-around drawstring and velcro ponytails crafted from 100% virgin human hair for effortless glam.',
  },
];

const BUNDLE_PRICES = { '12"': 140, '14"': 140, '16"': 170, '18"': 190, '20"': 230, '22"': 235, '24"': 250, '26"': 270, '28"': 290 };
const TAPE_PRICES = { '18"': 165, '20"': 175, '22"': 185, '24"': 195, '26"': 205, '28"': 215 };
const CLIP_PRICES = { '16"': 175, '18"': 185, '20"': 195, '22"': 205, '24"': 230, '26"': 240 };
const CLOSURE_PRICES = { '12"': 120, '14"': 130, '16"': 140, '18"': 150, '20"': 160, '22"': 170, '24"': 180 };
const PONYTAIL_PRICES = { '18"': 165, '20"': 175, '22"': 185, '24"': 195, '26"': 205 };
const TIP_PRICES = { '18"': 180, '20"': 200, '22"': 210, '24"': 220, '26"': 230 };

export const PRODUCTS: Product[] = [
  // 1-5: Hair Extension Bundles (5 products)
  {
    id: '8101291032884',
    handle: 'natural-wavy-hair-extensions',
    title: 'Hair Extensions - Natural Wavy',
    collection: 'hair-extension-bundles',
    collectionTitle: 'Hair Extension Bundles',
    priceFrom: 140,
    description:
      'Our signature 100% virgin Indian Natural Wavy hair extension bundles offer effortless body, soft movement, and a natural luster. Unprocessed and chemical-free, each bundle can be flat-ironed bone straight, curled, or worn in its natural wave pattern.',
    details: [
      '100% Virgin Indian Human Hair (3.5 oz / 100g per bundle)',
      'Unprocessed, cuticle-aligned, and free from harsh chemicals',
      'Can be colored, toned, or heat-styled',
      'Lasts 12+ months with proper maintenance and care',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/BundleNaturalWave_800x.jpg?v=1685970999',
      'https://laextensionsshop.com/cdn/shop/files/IMG_2172_800x.jpg?v=1686721061',
      'https://laextensionsshop.com/cdn/shop/products/1b_3a96ba47-34ed-4f85-b52d-fa07fe286830_800x.png?v=1686721061',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(BUNDLE_PRICES),
    variants: buildVariants('natural-wavy-hair-extensions', BUNDLE_PRICES, ALL_METHOD_COLORS, { '4': 5, '18A': 15, '30': 15, '60': 20, '350': 15, '613': 20, '1001': 20 }),
    rating: 5,
    reviewCount: 48,
  },
  {
    id: '8101313741108',
    handle: 'natural-curly-hair-extensions',
    title: 'Hair Extensions - Natural Curly',
    collection: 'hair-extension-bundles',
    collectionTitle: 'Hair Extension Bundles',
    priceFrom: 150,
    description:
      'Lush, defined curls with natural bounce and volume. Sourced from single donors in India, our Natural Curly bundles hold moisture beautifully and blend seamlessly with 3A–3C textures.',
    details: [
      '100% Virgin Indian Human Hair (3.5 oz / 100g per bundle)',
      'Naturally curly pattern that springs back after washing',
      'Minimal shedding with reinforced double-weft construction',
      'Lasts 12+ months with proper care',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/naturalcurly_800x.jpg?v=1675194845',
      'https://laextensionsshop.com/cdn/shop/files/img_1679_800x.jpg?v=1687404402',
      'https://laextensionsshop.com/cdn/shop/products/1b_3702144c-4eff-41a7-bfbb-e65798342035_800x.png?v=1687404402',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(BUNDLE_PRICES),
    variants: buildVariants('natural-curly-hair-extensions', { ...BUNDLE_PRICES, '12"': 150, '14"': 160 }, ['1b', '2', '4']),
    rating: 5,
    reviewCount: 36,
  },
  {
    id: '8101318852916',
    handle: 'premium-curly-hair-extensions',
    title: 'Hair Extensions - Premium Curly',
    collection: 'hair-extension-bundles',
    collectionTitle: 'Hair Extension Bundles',
    priceFrom: 160,
    description:
      'Our tightest, most defined virgin Indian curl pattern for maximum volume and rich, effortless spirals.',
    details: [
      '100% Virgin Indian Human Hair (3.5 oz / 100g per bundle)',
      'High-definition spiral curl pattern',
      'Unprocessed and chemical-free',
      'Lasts 12+ months with proper care',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/1b_4992c488-52d8-49ed-81a1-debc6ef1f131_800x.png?v=1687404829',
      'https://laextensionsshop.com/cdn/shop/files/img_1679_800x.jpg?v=1687404402',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(BUNDLE_PRICES),
    variants: buildVariants('premium-curly-hair-extensions', { ...BUNDLE_PRICES, '12"': 160, '14"': 170 }, ['1b', '2']),
    rating: 5,
    reviewCount: 22,
  },
  {
    id: '8101281169716',
    handle: 'kinky-straight-hair-extensions',
    title: 'Hair Extensions - Kinky Straight',
    collection: 'hair-extension-bundles',
    collectionTitle: 'Hair Extension Bundles',
    priceFrom: 145,
    description:
      'Designed to mimic freshly blown-out natural hair, our Kinky Straight bundles deliver rich texture, natural density, and an undetectable blend.',
    details: [
      '100% Virgin Indian Human Hair (3.5 oz / 100g per bundle)',
      'Blow-out textured finish for effortless blending',
      'Heat-friendly and easy to silk-press or wand curl',
      'Reusable for 12+ months',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/BundleKinkyStraight_800x.jpg?v=1685992830',
      'https://laextensionsshop.com/cdn/shop/files/img_2541_800x.jpg?v=1687407293',
      'https://laextensionsshop.com/cdn/shop/products/1_937843ee-c982-469a-9948-6c236029aa89_800x.png?v=1687407293',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(BUNDLE_PRICES),
    variants: buildVariants('kinky-straight-hair-extensions', { ...BUNDLE_PRICES, '12"': 145, '14"': 155 }, ['1b', '2', '4', '613']),
    rating: 5,
    reviewCount: 29,
  },
  {
    id: '8111245033780',
    handle: 'hair-extensions-straight',
    title: 'Indian Hair Extensions - Straight',
    collection: 'hair-extension-bundles',
    collectionTitle: 'Hair Extension Bundles',
    priceFrom: 140,
    description:
      'Silky, sleek, and full of natural movement. Our Virgin Indian Straight bundles lay flat against the scalp and deliver mirror-like shine from root to ends.',
    details: [
      '100% Virgin Indian Human Hair (3.5 oz / 100g per bundle)',
      'Silky straight texture with natural density',
      'Tangle-free, cuticle-intact strands',
      'Safe to dye, tone, and heat style',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/Indianstraight_800x.jpg?v=1685381797',
      'https://laextensionsshop.com/cdn/shop/files/img_9629_800x.jpg?v=1687404740',
      'https://laextensionsshop.com/cdn/shop/products/1b_5f26fc74-6b9a-4373-96f1-5857eb8a467e_800x.png?v=1687404740',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(BUNDLE_PRICES),
    variants: buildVariants('hair-extensions-straight', BUNDLE_PRICES, ALL_METHOD_COLORS, { '4': 5, '18A': 15, '30': 15, '60': 20, '350': 15, '613': 20, '1001': 20 }),
    rating: 5,
    reviewCount: 41,
  },

  // 6-8: Tape-In Extensions (3 products)
  {
    id: '8111259058484',
    handle: 'indian-tape-hair-extensions-natural-curly',
    title: 'Indian Tape Hair Extensions - Natural Curly',
    collection: 'tape-in-extensions',
    collectionTitle: 'Tape-In Extensions',
    priceFrom: 165,
    description:
      'Flat, flexible, and virtually invisible. Our Natural Curly Tape-In extensions come 20 pieces (50g) per pack with salon-grade hypoallergenic tape tabs.',
    details: [
      '20 pieces / 50g per pack (2–3 packs recommended for a full head)',
      '100% Virgin Indian Curly Human Hair',
      'Reusable tape wefts—re-tape every 6–8 weeks',
      'No heat or braiding required',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/indiannaturalcurlytape_ede4c742-e8c3-4e29-ac1f-b1739bd54f4c_800x.jpg?v=1687897205',
      'https://laextensionsshop.com/cdn/shop/products/1b_d60c3959-8599-4d24-8d04-d8dca62acae9_800x.png?v=1687897205',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TAPE_PRICES),
    variants: buildVariants('indian-tape-hair-extensions-natural-curly', TAPE_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 22,
  },
  {
    id: '8111253750068',
    handle: 'indian-tape-hair-extensions-natural-wavy',
    title: 'Indian Tape Hair Extensions - Natural Wavy',
    collection: 'tape-in-extensions',
    collectionTitle: 'Tape-In Extensions',
    priceFrom: 165,
    description:
      'Seamless volume and length in under an hour. Our Natural Wavy Tape-Ins lay ultra-flat and move naturally with your own hair.',
    details: [
      '20 pieces / 50g per pack',
      '100% Virgin Indian Wavy Human Hair',
      'Medical-grade, residue-free adhesive tabs',
      'Reusable up to 3–4 install cycles',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/img_1132_800x.jpg?v=1687897286',
      'https://laextensionsshop.com/cdn/shop/products/1b_fd1bb240-0193-4d01-b272-e7f05808a378_800x.png?v=1687897286',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TAPE_PRICES),
    variants: buildVariants('indian-tape-hair-extensions-natural-wavy', TAPE_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 31,
  },
  {
    id: '8111253291316',
    handle: 'indian-tape-hair-extensions-kinky-straight',
    title: 'Indian Tape Hair Extensions - Kinky Straight',
    collection: 'tape-in-extensions',
    collectionTitle: 'Tape-In Extensions',
    priceFrom: 165,
    description:
      'Blow-out textured Tape-In extensions crafted for an effortless match with natural, pressed, or relaxed textures.',
    details: [
      '20 pieces / 50g per pack',
      '100% Virgin Indian Kinky Straight Human Hair',
      'Ultra-thin polyurethane tape strip',
      'Heat-friendly and reusable',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/img_1134_800x.jpg?v=1687897354',
      'https://laextensionsshop.com/cdn/shop/products/1b_3b07fb30-dbbf-458e-99c4-018ef588f777_800x.png?v=1687897354',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TAPE_PRICES),
    variants: buildVariants('indian-tape-hair-extensions-kinky-straight', TAPE_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 19,
  },

  // 9-11: Clip-In Extensions (3 products)
  {
    id: '8111211381044',
    handle: 'clip-in-hair-extensions-natural-wavy',
    title: 'Clip-In Hair Extensions - Natural Wavy',
    collection: 'clip-in-extensions',
    collectionTitle: 'Clip-In Extensions',
    priceFrom: 175,
    description:
      'Instant salon-grade length and fullness whenever you want it. Each 7-piece Clip-In set features silicone-coated pressure clips that stay secure without pulling.',
    details: [
      '7-piece full head set (150g–180g depending on length)',
      '100% Virgin Indian Natural Wavy Human Hair',
      'Silicone-lined stainless steel clips for comfort',
      'Installs in under 10 minutes at home',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/naturalwaveclipins_800x.jpg?v=1689012399',
      'https://laextensionsshop.com/cdn/shop/products/1_4a074094-668a-4d08-868d-e83c5d8b412c_800x.png?v=1689012399',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(CLIP_PRICES),
    variants: buildVariants('clip-in-hair-extensions-natural-wavy', CLIP_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 27,
  },
  {
    id: '8115638108468',
    handle: 'clip-in-hair-extensions-kinky-straight',
    title: 'Clip-In Hair Extensions - Kinky Straight',
    collection: 'clip-in-extensions',
    collectionTitle: 'Clip-In Extensions',
    priceFrom: 175,
    description:
      'Our bestselling Kinky Straight Clip-Ins blend invisibly into blown-out or silk-pressed natural hair with zero leave-out stress.',
    details: [
      '7-piece full head set',
      '100% Virgin Indian Kinky Straight Human Hair',
      'Natural blow-out density & texture',
      'Can be curled, straightened, or worn voluminous',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/kinkystraightclipins_800x.jpg?v=1675458557',
      'https://laextensionsshop.com/cdn/shop/products/1_800x.png?v=1675704771',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(CLIP_PRICES),
    variants: buildVariants('clip-in-hair-extensions-kinky-straight', CLIP_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 33,
  },
  {
    id: '8111209283892',
    handle: 'clip-in-hair-extensions-natural-curly',
    title: 'Clip-In Hair Extensions - Natural Curly',
    collection: 'clip-in-extensions',
    collectionTitle: 'Clip-In Extensions',
    priceFrom: 180,
    description:
      'Add instant curly volume and bounce without committing to a permanent install. Soft, defined curls that stay frizz-free.',
    details: [
      '7-piece full head set',
      '100% Virgin Indian Natural Curly Human Hair',
      'Silicone-cushioned clips protect natural curls',
      'Washable and heat-stylable',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/img_7159_800x.jpg?v=1687897044',
      'https://laextensionsshop.com/cdn/shop/products/1_94f621c6-e908-47f9-9da4-2f3148fa9a4b_800x.png?v=1687897044',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(CLIP_PRICES),
    variants: buildVariants('clip-in-hair-extensions-natural-curly', { ...CLIP_PRICES, '16"': 180 }, ['1', '2']),
    rating: 5,
    reviewCount: 24,
  },

  // 12-15: Lace Closures (4 products)
  {
    id: '8111241265460',
    handle: 'hair-extension-closure-natural-curly',
    title: 'Hair Extension Closure - Natural Curly',
    collection: 'lace-closure',
    collectionTitle: 'Lace Closure',
    priceFrom: 120,
    description:
      'Complete your curly sew-in or wig unit with our hand-tied 4x4 HD Lace Closure. Pre-plucked hairline with natural baby hairs for a seamless melt.',
    details: [
      '4x4 HD Transparent Swiss Lace',
      '100% Virgin Indian Natural Curly Hair',
      'Free-parting versatility',
      'Lightweight, breathable lace base',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/Curlyclosure_800x.jpg?v=1685381549',
      'https://laextensionsshop.com/cdn/shop/products/1_0a5b6e1e-c51a-4a8e-9b1c-71a8699940d3_800x.png?v=1685381549',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(CLOSURE_PRICES),
    variants: buildVariants('hair-extension-closure-natural-curly', CLOSURE_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 18,
  },
  {
    id: '8111238152500',
    handle: 'hair-extension-closure-natural-wavy',
    title: 'Hair Extension Closure - Natural Wavy',
    collection: 'lace-closure',
    collectionTitle: 'Lace Closure',
    priceFrom: 120,
    description:
      'Undetectable 4x4 HD Lace Closure crafted to match our Natural Wavy bundles perfectly.',
    details: [
      '4x4 HD Transparent Swiss Lace',
      '100% Virgin Indian Natural Wavy Hair',
      'Bleachable knots for a scalp-like finish',
      'Free-part design',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/naturalwaveclosure_800x.jpg?v=1686254142',
      'https://laextensionsshop.com/cdn/shop/products/1_94c2771a-e05e-4ccd-ab7e-a561b11368f5_800x.png?v=1675714341',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(CLOSURE_PRICES),
    variants: buildVariants('hair-extension-closure-natural-wavy', CLOSURE_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 21,
  },
  {
    id: '8111237234996',
    handle: 'hair-extension-closure-straight',
    title: 'Hair Extension Closure - Straight',
    collection: 'lace-closure',
    collectionTitle: 'Lace Closure',
    priceFrom: 120,
    description:
      'Sleek, silky 4x4 HD Lace Closure that pairs flawlessly with our Virgin Indian Straight bundles.',
    details: [
      '4x4 HD Transparent Swiss Lace',
      '100% Virgin Indian Straight Hair',
      'Pre-plucked hairline',
      '130% natural density',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/Straightclosure_800x.jpg?v=1685381879',
      'https://laextensionsshop.com/cdn/shop/products/1_6e95ae28-0e95-423f-b921-8da4777991c2_800x.png?v=1685381879',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(CLOSURE_PRICES),
    variants: buildVariants('hair-extension-closure-straight', CLOSURE_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 16,
  },
  {
    id: '8111234974004',
    handle: 'kinky-straight-hair-extension-closure',
    title: 'Hair Extension Closure - Kinky Straight',
    collection: 'lace-closure',
    collectionTitle: 'Lace Closure',
    priceFrom: 120,
    description:
      'Protective 4x4 HD Lace Closure with rich Kinky Straight texture for a zero-leave-out natural blow-out look.',
    details: [
      '4x4 HD Transparent Swiss Lace',
      '100% Virgin Indian Kinky Straight Hair',
      'Natural blow-out texture',
      'Heat-safe & colorable',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/kinkystraightclosure_800x.jpg?v=1686254016',
      'https://laextensionsshop.com/cdn/shop/products/1_4873a36d-3cde-483d-a033-7ca15b797ea9_800x.png?v=1675714231',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(CLOSURE_PRICES),
    variants: buildVariants('kinky-straight-hair-extension-closure', CLOSURE_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 14,
  },

  // 16-19: Ponytails (4 products)
  {
    id: '8115617464628',
    handle: 'ponytail-hair-extension-straight',
    title: 'Ponytail Hair Extension - Straight',
    collection: 'ponytails',
    collectionTitle: 'Ponytails',
    priceFrom: 165,
    description:
      'Sleek, red-carpet-ready wrap-around ponytail made from 100% virgin Indian straight hair. Secures in seconds with a hidden comb and wrap-around hair strand.',
    details: [
      '100% Virgin Indian Straight Human Hair (120g)',
      'Wrap-around velcro + inner comb attachment',
      'Can be styled high, mid, or low',
      'Reusable & heat-stylable',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/Straightponytail_800x.jpg?v=1685381907',
      'https://laextensionsshop.com/cdn/shop/products/1_8d860dc0-e9f1-4cb5-899f-ce1e58c3d8a7_800x.png?v=1685381907',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(PONYTAIL_PRICES),
    variants: buildVariants('ponytail-hair-extension-straight', PONYTAIL_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 25,
  },
  {
    id: '8111200403764',
    handle: 'ponytail-extension-natural-wavy',
    title: 'Ponytail Extension - Natural Wavy',
    collection: 'ponytails',
    collectionTitle: 'Ponytails',
    priceFrom: 165,
    description:
      'Effortless beachy volume in seconds. Our Natural Wavy wrap ponytail adds soft, romantic length and fullness.',
    details: [
      '100% Virgin Indian Natural Wavy Human Hair',
      'Secure wrap-around band',
      'Blends seamlessly with natural waves',
      'Heat & color friendly',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/naturalwaveponytail_800x.jpg?v=1675196875',
      'https://laextensionsshop.com/cdn/shop/products/1_1be410d6-bda1-417b-8a86-d718f1bdc7f8_800x.png?v=1675710208',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(PONYTAIL_PRICES),
    variants: buildVariants('ponytail-extension-natural-wavy', PONYTAIL_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 20,
  },
  {
    id: '8111199813940',
    handle: 'ponytail-hair-extension-curly',
    title: 'Ponytail Hair Extension - Curly',
    collection: 'ponytails',
    collectionTitle: 'Ponytails',
    priceFrom: 165,
    description:
      'Big, bouncy curls in seconds. Our Curly drawstring/wrap ponytail gives instant statement volume.',
    details: [
      '100% Virgin Indian Natural Curly Human Hair',
      'Lightweight and comfortable all-day hold',
      'Defined, frizz-free curl pattern',
      'Easy to wash and refresh',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/curlyponytail_800x.jpg?v=1675196825',
      'https://laextensionsshop.com/cdn/shop/products/1_ee9fbc75-9c1b-42d9-af5d-d9ea49f159e9_800x.png?v=1675710130',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(PONYTAIL_PRICES),
    variants: buildVariants('ponytail-hair-extension-curly', PONYTAIL_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 17,
  },
  {
    id: '8111196602676',
    handle: 'ponytail-hair-extension-kinky-straight',
    title: 'Ponytail Hair Extension - Kinky Straight',
    collection: 'ponytails',
    collectionTitle: 'Ponytails',
    priceFrom: 165,
    description:
      'Textured Kinky Straight ponytail that matches pressed or blown-out hair for a full, natural-looking updo.',
    details: [
      '100% Virgin Indian Kinky Straight Human Hair',
      'Natural blow-out texture',
      'Hidden comb & wrap-around strand',
      '120g full density',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/kinkystraightponytail_800x.jpg?v=1675196420',
      'https://laextensionsshop.com/cdn/shop/products/1_04fcb77d-ecad-4df9-a438-baa8581c6a48_800x.png?v=1675710048',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(PONYTAIL_PRICES),
    variants: buildVariants('ponytail-hair-extension-kinky-straight', PONYTAIL_PRICES, ALL_METHOD_COLORS),
    rating: 5,
    reviewCount: 15,
  },

  // 20-24: I-Tip Extensions (5 products)
  {
    id: '8118150496564',
    handle: 'indian-i-tip-hair-extensions-premium-curly',
    title: 'Indian I-Tip Hair Extensions - Premium Curly',
    collection: 'i-tip-extensions',
    collectionTitle: 'I-Tip Extensions',
    priceFrom: 200,
    description:
      'Individual cold-fusion I-tip strands in our Premium Curly texture. 100g (100 strands) per pack for natural, 360-degree movement without heat or glue.',
    details: [
      '100 strands / 100g per bundle',
      '100% Virgin Indian Premium Curly Hair',
      'Lasts 3–6 months with routine microbead tighten-ups',
      '100–200 strands recommended for a full look',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/I-TipsNaturalCurly_d3423a1d-49ba-47a9-b5c0-f4e9ed4ed408_800x.jpg?v=1685971210',
      'https://laextensionsshop.com/cdn/shop/products/1b_507618ec-098a-477a-8d9e-19dcfa2faed7_800x.png?v=1685971210',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-i-tip-hair-extensions-premium-curly', { '18"': 200, '20"': 220, '22"': 230, '24"': 240, '26"': 250 }, ['1b', '2', '10', '613']),
    rating: 5,
    reviewCount: 11,
  },
  {
    id: '8118150201652',
    handle: 'indian-i-tip-hair-extensions-natural-curly',
    title: 'Indian I-Tip Hair Extensions - Natural Curly',
    collection: 'i-tip-extensions',
    collectionTitle: 'I-Tip Extensions',
    priceFrom: 190,
    description:
      'Soft, bouncy Natural Curly I-Tip individual strands designed for bead-installed natural volume and length.',
    details: [
      '100 strands / 100g per bundle',
      '100% Virgin Indian Natural Curly Hair',
      'No glue, no heat installation',
      'Reusable for multiple installs',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/I-TipsNaturalCurly_800x.jpg?v=1685971139',
      'https://laextensionsshop.com/cdn/shop/products/1b_8a41b986-e901-4529-ae0f-a766a233f600_800x.png?v=1685971139',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-i-tip-hair-extensions-natural-curly', { '18"': 190, '20"': 210, '22"': 220, '24"': 230, '26"': 240 }, ['1b', '2', '6'], { '6': 10 }),
    rating: 5,
    reviewCount: 14,
  },
  {
    id: '8118149775668',
    handle: 'indian-i-tip-hair-extensions-natural-wavy',
    title: 'Indian I-Tip Hair Extensions - Natural Wavy',
    collection: 'i-tip-extensions',
    collectionTitle: 'I-Tip Extensions',
    priceFrom: 180,
    description:
      'Seamless, lightweight Natural Wavy I-tip extensions for high-ponytail versatility and natural movement.',
    details: [
      '100 strands / 100g per bundle',
      '100% Virgin Indian Natural Wavy Hair',
      'Durable Italian keratin tips',
      'Lasts 3–6 months with maintenance',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/files/WavyI-tips_800x.jpg?v=1685382088',
      'https://laextensionsshop.com/cdn/shop/products/1b_838aa69d-e8c4-49e6-99f4-243359f5215d_800x.png?v=1685382088',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-i-tip-hair-extensions-natural-wavy', TIP_PRICES, ALL_METHOD_COLORS, { '6': 10, '613': 20 }),
    rating: 5,
    reviewCount: 18,
  },
  {
    id: '8118149218612',
    handle: 'indian-i-tip-hair-extensions-kinky-straight',
    title: 'Indian I-Tip Hair Extensions - Kinky Straight',
    collection: 'i-tip-extensions',
    collectionTitle: 'I-Tip Extensions',
    priceFrom: 180,
    description:
      'Blow-out textured I-Tip individual strands that blend seamlessly with natural, blown-out, or silk-pressed hair.',
    details: [
      '100 strands / 100g per bundle',
      '100% Virgin Indian Kinky Straight Hair',
      'Bead-installed, heat-free application',
      'Lasts 3–6 months with routine tighten-ups',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/1b_93d96248-162a-46b6-864e-f60e5ad564d2_800x.png?v=1687896724',
      'https://laextensionsshop.com/cdn/shop/files/BundleKinkyStraight_800x.jpg?v=1685992830',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-i-tip-hair-extensions-kinky-straight', TIP_PRICES, ALL_METHOD_COLORS, { '6': 10, '613': 20 }),
    rating: 5,
    reviewCount: 12,
  },
  {
    id: '8111268954420',
    handle: 'indian-i-tip-hair-extensions-straight',
    title: 'Indian I-Tip Hair Extensions - Straight',
    collection: 'i-tip-extensions',
    collectionTitle: 'I-Tip Extensions',
    priceFrom: 180,
    description:
      'Silky straight I-tip individual strands for sleek, undetectable length and effortless styling.',
    details: [
      '100 strands / 100g per bundle',
      '100% Virgin Indian Straight Hair',
      'No glue, no heat installation',
      'Reusable up to 6 months',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/1b_ce1db7c0-316b-4e02-8cf6-e8a039fa46f5_800x.png?v=1685381688',
      'https://laextensionsshop.com/cdn/shop/files/Indianstraight_800x.jpg?v=1685381797',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-i-tip-hair-extensions-straight', TIP_PRICES, ALL_METHOD_COLORS, { '6': 10, '613': 20 }),
    rating: 5,
    reviewCount: 16,
  },

  // 25-28: U-Tip / K-Tip Extensions (4 products)
  {
    id: '8118144434484',
    handle: 'indian-u-tip-keratin-extensions-natural-curly',
    title: 'Indian Keratin Tip (K-Tip) Extensions - Premium Curly',
    collection: 'u-tip-extensions',
    collectionTitle: 'U-Tip Extensions',
    priceFrom: 210,
    description:
      'Pre-bonded keratin U-tip (K-Tip) extensions in our Premium Curly texture for 360-degree movement and up to 6 months of seamless wear.',
    details: [
      '100 strands / 100g per bundle',
      'Italian keratin U-shaped bond',
      '100% Virgin Indian Premium Curly Hair',
      '100–200 strands recommended for a full look',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/1b_8eb78e9d-4f18-4863-b524-d3d104867baa_800x.png?v=1685381587',
      'https://laextensionsshop.com/cdn/shop/files/I-TipsNaturalCurly_800x.jpg?v=1685971139',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-u-tip-keratin-extensions-natural-curly', { '18"': 210, '20"': 220, '22"': 230, '24"': 240, '26"': 250 }, ['1b', '2', '6'], { '6': 10 }),
    rating: 5,
    reviewCount: 10,
  },
  {
    id: '8118142927156',
    handle: 'indian-u-tip-keratin-extensions-natural-wavy',
    title: 'Indian Keratin Tip (K-Tip) Extensions - Natural Wavy',
    collection: 'u-tip-extensions',
    collectionTitle: 'U-Tip Extensions',
    priceFrom: 180,
    description:
      'Pre-bonded keratin U-tip extensions that fuse cleanly and discreetly with your natural hair for 4–6 months of effortless wear.',
    details: [
      '100 strands / 100g per bundle',
      'Italian keratin U-shaped bond',
      '100% Virgin Indian Natural Wavy Hair',
      'Invisible 360-degree movement',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/1b_7ffb58b3-cca5-4149-a1c2-c97949b41d83_800x.png?v=1685382126',
      'https://laextensionsshop.com/cdn/shop/files/WavyI-tips_800x.jpg?v=1685382088',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-u-tip-keratin-extensions-natural-wavy', TIP_PRICES, ALL_METHOD_COLORS, { '6': 10, '613': 20 }),
    rating: 5,
    reviewCount: 13,
  },
  {
    id: '8118139617588',
    handle: 'indian-u-tip-keratin-extensions-kinky-straight',
    title: 'Indian Keratin Tip (K-Tip) Extensions - Kinky Straight',
    collection: 'u-tip-extensions',
    collectionTitle: 'U-Tip Extensions',
    priceFrom: 180,
    description:
      'Pre-bonded keratin K-Tip extensions in our signature Kinky Straight blow-out texture.',
    details: [
      '100 strands / 100g per bundle',
      'Italian keratin U-shaped bond',
      '100% Virgin Indian Kinky Straight Hair',
      'Blends seamlessly with natural textures',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/1b_9a0d860d-0ad5-4933-90bf-bf83be66a243_800x.png?v=1687896862',
      'https://laextensionsshop.com/cdn/shop/files/BundleKinkyStraight_800x.jpg?v=1685992830',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-u-tip-keratin-extensions-kinky-straight', TIP_PRICES, ALL_METHOD_COLORS, { '6': 10, '613': 20 }),
    rating: 5,
    reviewCount: 11,
  },
  {
    id: '8111271477556',
    handle: 'indian-u-tip-keratin-extensions-straight',
    title: 'Indian Keratin Tip (K-Tip) Extensions - Straight',
    collection: 'u-tip-extensions',
    collectionTitle: 'U-Tip Extensions',
    priceFrom: 180,
    description:
      'Silky straight pre-bonded keratin U-tip strands for sleek, undetectable length and fullness.',
    details: [
      '100 strands / 100g per bundle',
      'Italian keratin U-shaped bond',
      '100% Virgin Indian Straight Hair',
      'Lasts up to 6 months',
    ],
    images: [
      'https://laextensionsshop.com/cdn/shop/products/1b_800x.png?v=1685381769',
      'https://laextensionsshop.com/cdn/shop/files/Indianstraight_800x.jpg?v=1685381797',
    ],
    colors: makeColors(ALL_METHOD_COLORS),
    lengths: Object.keys(TIP_PRICES),
    variants: buildVariants('indian-u-tip-keratin-extensions-straight', TIP_PRICES, ALL_METHOD_COLORS, { '6': 10, '613': 20 }),
    rating: 5,
    reviewCount: 15,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Brianna M.',
    rating: 5,
    date: 'October 2026',
    productTitle: 'Hair Extensions - Natural Wavy',
    title: 'Best virgin hair I have ever installed!',
    body: 'I bought 3 bundles of the 20" Natural Wavy for a braided sew-in and it blended so seamlessly with my own hair. Zero tangling, minimal shedding, and holds curls all day.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Simone T.',
    rating: 5,
    date: 'September 2026',
    productTitle: 'Indian Tape Hair Extensions - Natural Wavy',
    title: 'Ultra flat and super lightweight',
    body: 'My stylist was amazed at the quality of the tape-ins. You cannot feel or see the tabs at all, even when I wear my hair in a high bun. Already on my second reinstall!',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Danielle R.',
    rating: 5,
    date: 'September 2026',
    productTitle: 'Clip-In Hair Extensions - Kinky Straight',
    title: 'Matches my silk press and blowouts perfectly',
    body: 'The Kinky Straight clip-ins are a total game changer. They have the exact texture of freshly blown-out natural hair and take literally 5 minutes to clip in.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Chanel K.',
    rating: 5,
    date: 'August 2026',
    productTitle: 'Hair Extensions - Natural Curly',
    title: 'Softest curls ever',
    body: 'The curl pattern springs right back after co-washing and doesn’t get frizzy. Giordanahaircompany never misses!',
    verified: true,
  },
];

export const SERVICES = [
  {
    id: 'braided-sew-in',
    title: 'Braided Sew-In',
    description:
      'Braided sew-in is a process where your natural hair is braided down into flat cornrows and weft hair is sewn onto the braids. The braided sew-in can last 8–10 weeks. For a full look it requires 2–4 bundles of hair.',
    duration: '2.5 – 3 Hours',
    recommended: '2–4 Bundles',
  },
  {
    id: 'beaded-sew-in',
    title: 'Beaded Sew-In',
    description:
      'Beaded sew-in rows are applied by taking small batches of your own strands and securing them with a bead at the roots, then weft hair is sewn around the beads. Beaded sew-in extensions last four months with routine tighten-ups. For a full look it requires 2–3 bundles of hair.',
    duration: '2 – 2.5 Hours',
    recommended: '2–3 Bundles',
  },
  {
    id: 'i-tips',
    title: 'I-Tips',
    description:
      'I-tip hair extensions are small individual strands with a pointy tip and applied to your natural hair using a bead that binds it. I-tip extensions last for three to six months with routine tighten-ups. For a full but natural look it is suggested you have 100–200 I-tip strands installed. If your hair is thicker or shorter, you will need more packages of hair.',
    duration: '3 – 4 Hours',
    recommended: '100–200 Strands',
  },
  {
    id: 'u-tips',
    title: 'U-Tips',
    description:
      'U-tip extensions are individual pre-bonded extensions using keratin glue. The hair extension is applied to the hair by heating up the keratin tip and attaching it between your natural hair and the hair extension. For a full but natural look it is suggested you have 100–200 strands installed. If your hair is thicker or shorter, you will need more packages of hair.',
    duration: '3 – 4 Hours',
    recommended: '100–200 Strands',
  },
];

export const FAQS = [
  {
    q: 'Where does the extensions come from?',
    a: 'Our hair extensions are ethically sourced from India & Eastern Europe.',
  },
  {
    q: 'Do you sell virgin hair extensions?',
    a: 'We sell 100% virgin Indian hair that is unprocessed and always free from harsh chemicals. The darker tones come in its natural color and pattern and can be colored and styled to your individual desires and tastes.',
  },
  {
    q: 'Is the hair extensions dyed & processed?',
    a: 'Yes, our lighter tones are colored and delicately dyed using a proven multi-stage dyeing process.',
  },
  {
    q: 'Can I bleach or tone the hair extensions?',
    a: 'With the darker tones you have complete freedom to dye, tone, or bleach as you desire. For the lighter tones please note that because your new extensions are already pre-colored to our existing range of shades, custom color jobs can alter the structure of the hair and can potentially cause breakage and damage to the extensions. If you decide to do so, we recommend using the services of a professional hair colorist.',
  },
  {
    q: 'How many bundles do I need?',
    a: 'Braided Sew-In: 12–16 inches: 2 bundles. 18–26 inches: 3 or more bundles. Beaded Sew-In: 12–16 inches: 1.5–2 bundles. 18–26 inches: 2–3 bundles.',
  },
  {
    q: 'How do I wash my hair extensions?',
    a: '1. Gently detangle your extensions before washing, starting from the bottom up to the root. 2. Use lukewarm water and a sulfate-free moisturizing shampoo & conditioner. 3. Gently lather from root to tip, avoiding any rough scrubbing motion. 4. Blot excess water with a towel before air drying and adding a leave-in conditioner on the mid-ends.',
  },
  {
    q: 'What products do I use on the extensions?',
    a: 'Purchase products specifically formulated for moisturizing the hair, as they will help keep the strands healthy and nourished. Use salon-grade products that are sulfate and paraben-free.',
  },
];
