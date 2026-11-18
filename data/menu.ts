export type Category = 'shawarma' | 'wraps' | 'platters'
export type Badge = 'popular' | 'spicy'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number // PKR
  image: string
  category: Category
  includes?: string[]
  badge?: Badge
}

export const formatPrice = (price: number) => `Rs ${price.toLocaleString('en-PK')}`

export const menuItems: MenuItem[] = [
  // ── SHAWARMA ────────────────────────────────────────────────────────────────
  {
    id: 'signature-shawarma',
    name: 'Signature Shawarma',
    description: 'Our house shawarma — tender chicken carved fresh off the grill, wrapped with sauces',
    price: 360,
    image: '/media/durum-kebab.jpeg',
    category: 'shawarma',
    badge: 'popular',
  },

  // ── WRAPS ───────────────────────────────────────────────────────────────────
  {
    id: 'hitler-spicy',
    name: 'Hitler Spicy',
    description: 'For heat lovers — loaded with our fiery Hitler spicy sauce',
    price: 400,
    image: '/media/durums-wraps.jpeg',
    category: 'wraps',
    badge: 'spicy',
  },
  {
    id: 'asian-dynamite',
    name: 'Asian Dynamite',
    description: 'Crispy chicken tossed in a creamy, spicy dynamite sauce',
    price: 400,
    image: '/media/pita-kebab.jpeg',
    category: 'wraps',
  },
  {
    id: 'bbq-grill',
    name: 'B.B.Q Grill',
    description: 'Smoky grilled chicken with tangy BBQ sauce',
    price: 430,
    image: '/media/durum-kebab.jpeg',
    category: 'wraps',
  },
  {
    id: 'king-of-beiruti',
    name: 'King of Beiruti',
    description: 'Our loaded Beirut-style wrap — the king of the menu',
    price: 450,
    image: '/media/durums-wraps.jpeg',
    category: 'wraps',
    badge: 'popular',
  },

  // ── SPECIAL PLATTERS ────────────────────────────────────────────────────────
  {
    id: 'al-arab-platter',
    name: 'Al Arab Platter',
    description: 'A single-serving platter with wrap, bites and sauces',
    price: 450,
    image: '/media/plato-kebab.jpeg',
    category: 'platters',
    includes: ['1 shawarma wrap, 6 bites', 'Pickles salad', 'Hitler spicy sauce', 'Garlic sauce'],
  },
  {
    id: 'al-sham-platter',
    name: 'Al Sham Platter',
    description: 'Made for two — wraps, bites, sauces and grilled chicken',
    price: 1150,
    image: '/media/plates.jpeg',
    category: 'platters',
    badge: 'popular',
    includes: ['2 shawarma wraps, 12 bites', 'Pickles salad', '1 mustard sauce', '1 Hitler spicy sauce', '100 gm grilled chicken'],
  },
  {
    id: 'al-beirut-platter',
    name: 'Al Beirut Platter',
    description: 'The family feast — wraps, bites, five sauces, grilled chicken & fries',
    price: 1800,
    image: '/media/sish-tavuk.jpeg',
    category: 'platters',
    includes: [
      '3 shawarma wraps, 18 bites',
      'Pickles salad',
      'Garlic sauce',
      'BBQ sauce',
      'Mustard sauce',
      'Hitler spicy sauce',
      '150 gm grilled chicken',
      'French fries',
    ],
  },
]
