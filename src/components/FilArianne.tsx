import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AiOutlineHome } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { storeProducts } from '../constants/products';
import { ROUTES } from '../router/constant';

const FilArianne = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const nameToDisplay = (key: string): string => {
    const product = storeProducts.find((p) => {
      return p.slug === key;
    });
    if (!product) {
      return t(key);
    }
    return product.name;
  };

  const paths = pathname.split('/');

  return (
    <Container display="flex" justifyContent={{ md: 'start' }} maxW="container.lg" py={2}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to={ROUTES.HOME}>
            <AiOutlineHome />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {paths
          .filter((path) => {
            return path !== '';
          })
          .map((path, index, originalArray) => {
            const to = '/' + originalArray.slice(0, index + 1).join('/');
            const name = nameToDisplay(path);
            return (
              <BreadcrumbItem>
                {index !== originalArray.length - 1 ? (
                  <BreadcrumbLink as={NavLink} to={to}>
                    {name}
                  </BreadcrumbLink>
                ) : (
                  <>{name}</>
                )}
              </BreadcrumbItem>
            );
          })}
      </Breadcrumb>
    </Container>
  );
};

export default FilArianne;