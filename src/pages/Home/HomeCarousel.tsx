import { FC } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

import CarouselItem, { Product } from './CarouselItem';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';

const breakPoints = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  900: {
    items: 3,
  },
  1224: {
    items: 4,
  },
};

// products are fetched from database
const products: Product[] = [
  {
    productId: faker.unique(v4),
    imageSrc: faker.image.business(120, 120),
    title: faker.random.words(4),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    description: faker.lorem.paragraph(2),
  },
  {
    productId: faker.unique(v4),
    imageSrc: faker.image.abstract(120, 120),
    title: faker.random.words(4),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    description: faker.lorem.paragraph(2),
  },
  {
    productId: faker.unique(v4),
    imageSrc: faker.image.city(120, 120),
    title: faker.random.words(4),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    description: faker.lorem.paragraph(2),
  },
  {
    productId: faker.unique(v4),
    imageSrc: faker.image.image(120, 120),
    title: faker.random.words(4),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    description: faker.lorem.paragraph(2),
  },
  {
    productId: faker.unique(v4),
    imageSrc: faker.image.image(120, 120),
    title: faker.random.words(4),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    description: faker.lorem.paragraph(2),
  },
  {
    productId: faker.unique(v4),
    imageSrc: faker.image.image(120, 120),
    title: faker.random.words(4),
    price: parseInt(faker.finance.amount(1200, 2100), 10),
    description: faker.lorem.paragraph(2),
  },
];

const HomeCarousel: FC = () => {
  const items = products.map((p) => <CarouselItem key={p.productId} item={p} />);
  return (
    <AliceCarousel
      items={items}
      mouseTracking
      responsive={breakPoints}
      infinite
      autoPlay
      autoPlayInterval={3000}
      animationDuration={1500}
      keyboardNavigation
    />
  );
};

export default HomeCarousel;
