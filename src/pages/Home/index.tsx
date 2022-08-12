import { FC, Fragment } from 'react';
import { faker } from '@faker-js/faker';
import { v4 } from 'uuid';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import Hero, { Banner } from './Hero';
import HomeCarousel from './HomeCarousel';

const banners: Banner[] = [
  {
    Id: faker.unique(v4),
    imageSrc: faker.image.animals(1224, 600),
    title: faker.random.words(4),
    description: faker.lorem.paragraph(2),
  },
  {
    Id: faker.unique(v4),
    imageSrc: faker.image.animals(1224, 600),
    title: faker.random.words(4),
    description: faker.lorem.paragraph(2),
  },
  {
    Id: faker.unique(v4),
    imageSrc: faker.image.animals(1224, 600),
    title: faker.random.words(4),
    description: faker.lorem.paragraph(2),
  },
];

const Home: FC = () => {
  return (
    <Fragment>
      <Hero banners={banners} />
      <HomeCarousel />
    </Fragment>
  );
};

export default Home;
