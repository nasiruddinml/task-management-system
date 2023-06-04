import React, { ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css';

export const Button = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className={`${styles.button} ${
        rest.className === 'link' ? styles.link : rest.className
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
