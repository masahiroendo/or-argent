import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ProducsImageCarouselProps = {
  images: string[];
};

const settings = {
  dots: true,
  arrows: false,
  //   fade: true,
  infinite: true,
  autoplay: true,
  speed: 400,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductsImageCarousel: FC<ProducsImageCarouselProps> = ({ images }) => {
  return (
    <Slider {...settings} /*ref={(slider) => setSlider(slider)}*/>
      {images.map((url, index) => (
        <Box
          key={`${url}-${index}`}
          cursor="pointer"
          height={{ base: '2xs', md: 'md', lg: 'xl' }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundImage={`url(${url})`}
        />
      ))}
    </Slider>
  );
};

export default ProductsImageCarousel;
