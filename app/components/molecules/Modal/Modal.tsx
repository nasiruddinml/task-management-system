import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export const Modal = ({ children, isOpen, toggle }: ModalType) => {
  return (
    <>
      {isOpen && (
        <div className={styles['modal-overlay']} onClick={toggle}>
          <div
            className={styles['modal-box']}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles['modal-close-icon']} onClick={toggle}>
              x
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
};
