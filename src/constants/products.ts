import { faker } from '@faker-js/faker';

export type ProductFamily = 'coin' | 'bar';
export type MetalType = 'gold' | 'silver' | 'palladium' | 'platinum';

export const OUNCE_WEIGHT = 31.1035;
export const BAR_WEIGHT = 1000.0;
export const FOUR_NINE = '999.9/1000';
export const LINGOT_DIMENSIONS = 'L:111mm W:51mm H:21mm';
export const COIN_DIMENSIONS = 'Diameter: 32.70mm';
export const PRODUCTS_IMAGES_PATH = '/assets/images/products/';

export type ProductSpecs = {
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
  specs: ProductSpecs;
  images: ProductImage[];
  // remaningQuantity: number
};

export type CarouselItemType = Pick<Product, 'id' | 'metal' | 'name' | 'price' | 'slug' | 'category'> & {
  image: string;
};

export const storeProducts: Product[] = [
  {
    id: '2b63d100-c2fd-4e83-8f75-484f0dc0b5ac',
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
    id: '73b7a830-a944-4206-b82a-0e92067de283',
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
    id: '52188961-e259-47a3-9e12-100c0c32a786',
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
    id: 'cbc007db-baaa-400d-8f1f-72f85db1aa29',
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
    id: 'bda7e253-332d-452e-be9c-c0002364ee31',
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
    id: '6fd61b05-7409-41c9-aec5-04407a66ed0b',
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
    id: '91f5ac2b-a8ca-4bf6-9793-e6eb6506af81',
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
