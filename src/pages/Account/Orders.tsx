import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Badge,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Flex,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FaCcPaypal, FaCcStripe } from 'react-icons/fa';

import NoOrdersIcon from './NoOrdersIcon';
import useOrders from '../../hooks/use-orders';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { ROUTES } from '../../router/constant';

const Orders = () => {
  const { orders } = useOrders();
  const { t } = useTranslation();
  const { currency } = useContext(CurrencyContext);

  if (!orders.length) {
    return (
      <Center h="68vh" flexDirection="column" gap={6} my="3em">
        <Text>{t('no-past-orders')}</Text>
        <NavLink to={`/${ROUTES.PRODUCTS}`}>{t('to-products-page')}</NavLink>
        <NoOrdersIcon w={384} h={384} />
      </Center>
    );
  }

  return (
    <Container maxW="container.lg">
      <Accordion allowToggle allowMultiple>
        {orders.map(({ orderDate, total, articles, id, status, paymentType }) => {
          return (
            <AccordionItem>
              <Heading as="h2">
                <AccordionButton>
                  <Flex textAlign="left" gap={6}>
                    <>
                      {t('order')}:
                      {paymentType === 'Paypal' ? (
                        <Icon as={FaCcPaypal} h={8} w={8} />
                      ) : paymentType === 'Stripe' ? (
                        <Icon as={FaCcStripe} h={8} w={8} />
                      ) : null}
                      <Badge fontSize="0.9em">ID #{id}</Badge> {new Date(Date.parse(orderDate)).toLocaleDateString()}{' '}
                      <b>
                        {total} {currency.symbol}
                      </b>
                      ({articles.length}),
                    </>
                  </Flex>
                  <Box marginLeft="auto" px={3}>
                    <Badge variant="outline" colorScheme="green" fontSize="0.9em">
                      {status}
                    </Badge>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                {articles.map(({ id, image, name, price, quantity }, i) => {
                  return (
                    <>
                      <Flex key={`order-article-${id}`} alignItems="center">
                        <Image src={image} boxSize="150px" objectFit="cover" />
                        <Flex gap={6}>
                          <Text fontSize="20px">{name}</Text>
                          <Text fontSize="20px">
                            {price} {currency.symbol}
                          </Text>
                          <Text fontSize="20px">x {quantity}</Text>
                        </Flex>
                      </Flex>
                      {i !== articles.length - 1 && <Divider />}
                    </>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Orders;
