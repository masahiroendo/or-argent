import { FC, useState } from 'react';
import { Box, Button, ButtonGroup, Image } from '@chakra-ui/react';
import AliceCarousel from 'react-alice-carousel';
import { FaDesktop } from 'react-icons/fa';

export type Banner = {
  Id: string;
  imageSrc: string;
  title: string;
  description: string;
};

type HeroProps = {
  banners: Banner[];
};

// const Hero: FC<HeroProps> = ({ banners }) => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex: number) => {
//     setIndex(selectedIndex);
//   };

//   const items = banners.map((banner) => (
//     <Carousel.Item key={banner.Id}>
//       <Image src={banner.imageSrc} alt={banner.title} objectFit="cover" />
//     </Carousel.Item>
//   ));
//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       {items}
//     </Carousel>
//   );
// };

const Hero: FC<HeroProps> = ({ banners }) => {
  const [index, setIndex] = useState(0);

  const items = banners.map((banner) => (
    <>
      <Box>
        <h3>{banner.title}</h3>
        <Box>{banner.description}</Box>
        <Box>
          <ButtonGroup alignItems={'center'}>
            <Button size={'lg'} bg="blue.200">
              Learn More
            </Button>
            <Button leftIcon={<FaDesktop />} bg="blue.100">
              Watch a Demo
            </Button>
          </ButtonGroup>
        </Box>
        <Image key={banner.Id} src={banner.imageSrc} alt={banner.title} objectFit="cover" />
      </Box>
    </>
  ));

  return <AliceCarousel items={items} autoWidth responsive={{ 0: { items: 1 } }} />;
};

export default Hero;
