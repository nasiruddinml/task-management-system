import React from 'react';
import { TableHeaderProps } from '@utils/types/types';
import styles from './TableHeader.module.css';

export function TableHeader<T>({ columns }: TableHeaderProps<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          key={`table-head-cell-${columnIndex}`}
          style={{ width: column.width }}
          className={styles.TableHeaderCell}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
}
