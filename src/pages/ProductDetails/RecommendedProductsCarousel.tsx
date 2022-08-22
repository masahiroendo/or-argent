import { FC } from 'react';
import Slider, { Settings } from 'react-slick';

import { MetalType, storeProducts } from '../../constants/products';
import ProductCard from '../Products/ProductCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings: Settings = {
  dots: false,
  adaptiveHeight: true,
  arrows: false,
  infinite: true,
  // autoplay: true,
  speed: 400,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1, // the number of item that are moved on swipe/drag
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

type RecommendedProductsCarouselProps = {
  metal: MetalType;
  slug: string;
};

const RecommendedProductsCarousel: FC<RecommendedProductsCarouselProps> = ({ metal, slug }) => {
  const recommendedProducts = storeProducts
    .filter((p) => p.metal === metal)
    .filter((p) => p.slug !== slug)
    .map(({ category, images, name, price, slug }) => {
      const firstImg = [...images].shift();
      const image = !!firstImg ? firstImg.thumbnail : '';
      return { category, image, name, price, slug };
    });

  return (
    <Slider {...settings}>
      {recommendedProducts.map(({ category, image, name, price, slug }, index) => (
        <ProductCard product={{ category, image, name, price, slug, metal }} key={index} />
      ))}
    </Slider>
  );
};

export default RecommendedProductsCarousel;
