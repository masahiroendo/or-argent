import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

type ProductFamily = 'coin' | 'bar';
type MetalType = 'gold' | 'silver' | 'palladium' | 'platinum';

export const OUNCE_WEIGHT = 31.1035;
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
  type: ProductFamily;
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
    type: 'coin',
    metal: 'gold',
    name: 'American Eagle',
    slug: 'american-eagle',
    description: faker.lorem.lines(5),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    spec: {
      weight: OUNCE_WEIGHT,
    },
    images: [
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/american-gold-eagle-1-ounce-front.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/american-gold-eagle-1-ounce-front.png`,
      },
      {
        thumbnail: `${PRODUCTS_IMAGES_PATH}/american-gold-eagle-1-ounce-bac.png`,
        fullSize: `${PRODUCTS_IMAGES_PATH}/american-gold-eagle-1-ounce-bac.png`,
      },
    ],
  },
];
