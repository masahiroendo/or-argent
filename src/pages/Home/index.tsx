import { FC, Fragment } from 'react';
import Hero from './Hero';
import HomeCarousel from './HomeCarousel';
import AboutUs from './AboutUs';

// const banners: Banner[] = [
//   {
//     Id: faker.unique(v4),
//     imageSrc: faker.image.animals(1224, 600),
//     title: faker.random.words(4),
//     description: faker.lorem.paragraph(2),
//   },
//   {
//     Id: faker.unique(v4),
//     imageSrc: faker.image.animals(1224, 600),
//     title: faker.random.words(4),
//     description: faker.lorem.paragraph(2),
//   },
//   {
//     Id: faker.unique(v4),
//     imageSrc: faker.image.animals(1224, 600),
//     title: faker.random.words(4),
//     description: faker.lorem.paragraph(2),
//   },
// ];

const Home: FC = () => {
  return (
    <Fragment>
      <Hero />
      <HomeCarousel />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
