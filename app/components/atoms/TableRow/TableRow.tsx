import { TableRowProps } from '@utils/types/types';
import styles from './TableRow.module.css';
import { TableRowCell } from '@components/atoms/TableRowCell/TableRowCell';

export function TableRow<T>({ data, columns }: TableRowProps<T>): JSX.Element {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr key={`table-body-${itemIndex}`} className={styles.TableRowItem}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
}
