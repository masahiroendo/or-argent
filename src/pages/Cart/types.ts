import { Article } from '../../contexts/CartContext';

export type Order = {
  id: string;
  orderDate: string | Date;
  status: string;
  total: number;
  taxes: number;
  articles: Article[];
  paymentType: 'Paypal' | 'Stripe';
  fundingMethod?: PAYPAL_FUNDING_SOURCE;
};

export type PAYPAL_FUNDING_SOURCE =
  | 'paypal'
  | 'venmo'
  | 'applepay'
  | 'itau'
  | 'credit'
  | 'paylater'
  | 'card'
  | 'ideal'
  | 'sepa'
  | 'bancontact'
  | 'giropay'
  | 'sofort'
  | 'eps'
  | 'mybank'
  | 'p24'
  | 'verkkopankki'
  | 'payu'
  | 'blik'
  | 'trustly'
  | 'zimpler'
  | 'maxima'
  | 'oxxo'
  | 'boletobancario'
  | 'wechatpay'
  | 'mercadopago'
  | 'multibanco';
