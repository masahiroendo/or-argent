import { FC, Fragment } from 'react';

import Hero from './Hero';
import HomeCarousel from './HomeCarousel';
import AboutUs from './AboutUs';
import HowTo from './HowTo';
import MetalsRates from './MetalRates';

const Home: FC = () => {
  return (
    <Fragment>
      <Hero />
      <HomeCarousel />
      <AboutUs />
      <HowTo />
      <MetalsRates />
    </Fragment>
  );
};

export default Home;
