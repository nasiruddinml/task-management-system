import React from 'react';
import { get } from 'lodash';
import { TableRowCellProps } from '@utils/types/types';
import styles from './TableRowCell.module.css';

export function TableRowCell<T>({
  item,
  column,
}: TableRowCellProps<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <td className={styles.TableCell}>
      {column.render ? column.render(column, item) : value}
    </td>
  );
}
