import React, { ReactNode } from 'react';

import styles from './Card.module.css';

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.Card}>{children}</div>;
};

export default Card;
