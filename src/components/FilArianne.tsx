import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../router/constant';

const FilArianne = () => {
  const { pathname } = useLocation();

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
            console.log('to', to);
            return (
              <BreadcrumbItem>
                <BreadcrumbLink as={NavLink} to={to}>
                  {!path ? <AiOutlineHome /> : path}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
      </Breadcrumb>
    </Container>
  );
};

export default FilArianne;
