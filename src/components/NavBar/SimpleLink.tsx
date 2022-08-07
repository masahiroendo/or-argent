import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

type SimpleLinkProps = {
  to: string;
  content?: string;
  upperCased?: boolean;
};

const SimpleLink: FC<PropsWithChildren<SimpleLinkProps>> = ({ to, content, upperCased = false, children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? styles.active : undefined)}>
      {content ? <span className={upperCased ? styles.upperCase : ''}>{content}</span> : children}
    </NavLink>
  );
};

export default SimpleLink;
