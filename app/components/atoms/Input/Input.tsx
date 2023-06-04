import React from 'react';
import styles from './Input.module.css';

export const Input = ({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <input {...rest} className={`${styles.input} ${rest.className}`} />;
};

export default Input;
