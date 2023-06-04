import React from 'react';
import Card from '@app/components/atoms/Card/Card';
import styles from './TaskCard.module.css';

export const TasksCard = ({
  num = 0,
  title = '',
}: {
  title?: string;
  num?: number;
}) => {
  return (
    <Card>
      <p className={styles.CardTitle}>{title}</p>
      <span className={styles.CardNumber}>{num}</span>
    </Card>
  );
};

export default TasksCard;
