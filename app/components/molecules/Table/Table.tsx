import React from 'react';
import { TableProps } from '@utils/types/types';
import { TableHeader } from '@components/atoms/TableHeader/TableHeader';
import { TableRow } from '@components/atoms/TableRow/TableRow';
import styles from './Table.module.css';

export function Table<T>({ data, columns }: TableProps<T>): JSX.Element {
  return (
    <div className={styles.TableWrapper}>
      {data && data.length ? (
        <table className={styles.Table}>
          <thead className={styles.TableHead}>
            <TableHeader columns={columns} />
          </thead>
          <tbody>
            <TableRow data={data} columns={columns} />
          </tbody>
        </table>
      ) : (
        <p>No todo list! Hooray!!</p>
      )}
    </div>
  );
}
