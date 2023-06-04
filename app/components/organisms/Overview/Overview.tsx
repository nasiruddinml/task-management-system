'use client';

import React from 'react';
import styles from './Overview.module.css';
import { useAppSelector } from '@app/redux/hooks';
import TasksCard from '@app/components/molecules/TaskCard/TaskCard';

export const OverviewSection = () => {
  const totalTask = useAppSelector(state => state.task.taskList).length;
  const totalDays = useAppSelector(state => state.task.totalMD);
  const totalHours = useAppSelector(state => state.task.totalHours);

  return (
    <div className={styles.OverviewSection}>
      <TasksCard title="Total Tasks" num={totalTask} />
      <TasksCard title="Total Days" num={totalDays} />
      <TasksCard title="Total Hours" num={totalHours} />
    </div>
  );
};

export default OverviewSection;
