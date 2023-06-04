import { ReactNode } from 'react';

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}

export interface TableProps<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export interface TableHeaderProps<T> {
  columns: IColumnType<T>[];
}

export interface TableRowCellProps<T> {
  item: T;
  column: IColumnType<T>;
}

export interface TableRowProps<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export interface IData {
  title: string;
  time: number;
  action?: ReactNode;
}

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}
