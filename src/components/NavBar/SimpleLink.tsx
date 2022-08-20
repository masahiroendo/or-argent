import { FC, PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import styles from './styles.module.scss';

type SimpleLinkProps = {
  to: string;
  content?: string;
  upperCased?: boolean;
} & NavLinkProps;

const SimpleLink: FC<PropsWithChildren<SimpleLinkProps>> = ({ to, content, upperCased = false, children, ...rest }) => {
  return (
    <NavLink to={to} {...rest}>
      {content ? <span className={upperCased ? styles.upperCase : ''}>{content}</span> : children}
    </NavLink>
  );
};

export default SimpleLink;
