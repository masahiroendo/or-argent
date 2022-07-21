import { Button, Center } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import PageNotFoundImg from './PageNotFoundImg';
import { ROUTES } from '../../router/constant';

import style from './style.module.scss';

const NotFound: FC = () => {
  return (
    <div className={style.container}>
      <h1>Not Found</h1>
      <Link to={ROUTES.HOME}>
        <Button>Back to HomePage</Button>
      </Link>
      <Center>
        <PageNotFoundImg />
      </Center>
    </div>
  );
};

export default NotFound;
