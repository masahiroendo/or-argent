import { EmailIcon, Icon, PhoneIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import { FaCommentAlt, FaFacebook, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

import { ROUTES } from '../../../router/constant';

import styles from './styleContactForm.module.scss';

const ContactLinks: FC = () => {
  return (
    <div className={`${styles['contact-links-container']} ${styles['col-3']}`}>
      <div className={styles['contact-links']}>
        <div className={styles['col-12']}>
          <div className={styles['col-2']}>
            <PhoneIcon />
          </div>
          <div className={styles['col-10']}>
            <div>
              <ReactCountryFlag countryCode="FR" svg /> <a href="tel:++33142410445">+33-1-4241-0445</a>
            </div>
            <div>
              <ReactCountryFlag countryCode="GB" svg /> <a href="tel:++442078941234">+44-20-7894-1234</a>
            </div>
            <div>
              <Link to={`/${ROUTES.CALLBACK}`}>Être rappelé</Link>
            </div>
          </div>
        </div>
        <div className={styles['col-12']}>
          <div className={styles['col-2']}>
            <EmailIcon />
          </div>
          <div className={styles['col-10']}>
            <a href="mailto:support@goldsilver.fr">support@goldsilver.fr</a>
          </div>
        </div>
        <div className={styles['col-12']}>
          <div className={styles['col-2']}>
            <Icon as={IoLocationSharp} />
          </div>
          <div className={styles['col-10']}>61 rue des Petits, 75001 Paris, France</div>
        </div>
        <div className={styles['col-12']}>
          <div className={styles['col-2']}>
            <FaCommentAlt />
          </div>
          <div className={styles['col-10']}>
            <Link to={ROUTES.LOGIN}>Messagerie sécurisée</Link>
          </div>
        </div>
        <div>
          <div className={styles['col-12']}>
            <a href="#facebook-link">
              <Icon as={FaFacebook} />
            </a>
            <a href="#linkedin-link">
              <Icon as={FaLinkedinIn} />
            </a>
            <a href="#telegram-link">
              <Icon as={FaTelegram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
