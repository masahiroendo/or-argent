import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

type ProductFamily = 'coin' | 'bar';
type MetalType = 'gold' | 'silver' | 'palladium' | 'platinum';

export const OUNCE_WEIGHT = 31.1035;
export const BAR_WEIGHT = 1000.0;
export const FOUR_NINE = '999.9/1000';
export const LINGOT_DIMENSIONS = 'L:111mm W:51mm H:21mm';
export const COIN_DIMENSIONS = 'Diameter: 32.70mm';
export const PRODUCTS_IMAGES_PATH = '/assets/images/products/';

export type ProductSpecsspecs = {
  grossWeight?: number;
  fineWeight?: number;
  fineness?: string;
  dimensions?: string;
  country?: string;
};

export type ProductImage = {
  thumbnail: string;
  fullSize: string;
};

export type Product = {
  id: string;
  category: ProductFamily;
  metal: MetalType;
  name: string;
  slug: string;
  description: string;
  price: number;
  specs: ProductSpecsspecs;
  images: ProductImage[];
  // remaningQuantity: number
};

export const storeProducts: Product[] = [
  {
    id: faker.unique(v4),
    category: 'bar',
    metal: 'gold',
    name: '1 kilogram Gold Bar Valcambi',
    slug: '1kg-gold-bar-valcambi',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    specs: {
      grossWeight: BAR_WEIGHT,
      fineWeight: BAR_WEIGHT,
      fineness: FOUR_NINE,
      dimensions: LINGOT_DIMENSIONS,
      country: 'Switzerland',
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/gold-bar-valcambi-1kg-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/gold-bar-valcambi-1kg-front.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/gold-bar-valcambi-1kg-back.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/gold-bar-valcambi-1kg-back.png`,
      },
    ],
  },
  {
    id: faker.unique(v4),
    category: 'coin',
    metal: 'gold',
    name: '1 ounce Gold American Buffalo',
    slug: '1oz-gold-buffalo',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    specs: {
      grossWeight: OUNCE_WEIGHT,
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/gold-coin-buffalo-1oz-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/gold-coin-buffalo-1oz-front.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/gold-coin-buffalo-1oz-back.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/gold-coin-buffalo-1oz-back.png`,
      },
    ],
  },
  {
    id: faker.unique(v4),
    category: 'coin',
    metal: 'platinum',
    name: '1 ounce René Descartes (France)',
    slug: '1oz-platinum-rene-descartes',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    specs: {
      grossWeight: OUNCE_WEIGHT,
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/platinum-coin-rene-descartes-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/platinum-coin-rene-descartes-front.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/platinum-coin-rene-descartes-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/platinum-coin-rene-descartes-front.png`,
      },
    ],
  },
  {
    id: faker.unique(v4),
    category: 'coin',
    metal: 'gold',
    name: '1 ounce Gold American Eagle',
    slug: '1oz-gold-american-eagle',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    specs: {
      grossWeight: OUNCE_WEIGHT,
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/gold-coin-american-eagle-1oz-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/gold-coin-american-eagle-1oz-front.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/gold-coin-american-eagle-1oz-back.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/gold-coin-american-eagle-1oz-back.png`,
      },
    ],
  },
  {
    id: faker.unique(v4),
    category: 'bar',
    metal: 'silver',
    name: '1kg Silver Bar - JBR',
    slug: '1kg-silver-bar-JBR',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    specs: {
      grossWeight: OUNCE_WEIGHT,
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/silver-bar-JBR-1kg.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/silver-bar-JBR-1kg.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/silver-bar-JBR-1kg.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/silver-bar-JBR-1kg.png`,
      },
    ],
  },
  {
    id: faker.unique(v4),
    category: 'coin',
    metal: 'silver',
    name: '1 ounce Silver Philharmonic',
    slug: '1oz-silver-philharmonic',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    specs: {
      grossWeight: OUNCE_WEIGHT,
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/silver-coin-philharmonic-1oz-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/silver-coin-philharmonic-1oz-front.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/silver-coin-philharmonic-1oz-back.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/silver-coin-philharmonic-1oz-back.png`,
      },
    ],
  },
  {
    id: faker.unique(v4),
    category: 'coin',
    metal: 'silver',
    name: '1 ounce Silver Britannia',
    slug: '1oz-silver-britannia',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    specs: {
      grossWeight: OUNCE_WEIGHT,
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/silver-coin-britannia-1oz-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/silver-coin-britannia-1oz-front.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/silver-coin-britannia-1oz-back.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/silver-coin-britannia-1oz-back.png`,
      },
    ],
  },
];
