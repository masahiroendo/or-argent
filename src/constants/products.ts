import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

type ProductFamily = 'coin' | 'bar';
type MetalType = 'gold' | 'silver' | 'palladium' | 'platinum';

export const OUNCE_WEIGHT = 31.1035;
export const BAR_WEIGHT = 1000.0;
export const PRODUCTS_IMAGES_PATH = '/assets/images/products/';

export type ProductSpec = {
  weight: number;
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
  spec: ProductSpec;
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
    spec: {
      weight: BAR_WEIGHT,
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
    spec: {
      weight: OUNCE_WEIGHT,
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
    metal: 'gold',
    name: '1 ounce Gold 1 ounce Silver Britannia',
    slug: '1oz-gold-american-eagle',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    spec: {
      weight: OUNCE_WEIGHT,
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
    spec: {
      weight: OUNCE_WEIGHT,
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
    spec: {
      weight: OUNCE_WEIGHT,
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
    spec: {
      weight: OUNCE_WEIGHT,
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
