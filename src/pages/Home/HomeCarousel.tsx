import { FC } from 'react';
import AliceCarousel from 'react-alice-carousel';

import CarouselItem from './CarouselItem';
import { CarouselItemType, Product, storeProducts } from '../../constants/products';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

const breakPoints = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
  1200: {
    items: 3,
  },
  1536: {
    items: 4,
  },
};

const HomeCarousel: FC = () => {
  const items = storeProducts.map((p: Product) => {
    const { id, price, images, metal, name, slug, category } = p;
    const item: CarouselItemType = {
      id,
      category,
      image: !!images && images.length ? images[0].thumbnail : '',
      metal,
      name,
      price,
      slug,
    };

    return <CarouselItem key={id} item={item} />;
  });
  return (
    <AliceCarousel
      items={items}
      mouseTracking
      responsive={breakPoints}
      infinite
      disableDotsControls
      autoPlayInterval={3000}
      animationDuration={500}
      keyboardNavigation
    />
  );
};

export default HomeCarousel;
