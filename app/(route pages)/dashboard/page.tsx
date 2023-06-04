'use client';

import { IColumnType, IData } from '@app/utils/types/types';
import Button from '@app/components/atoms/Button/Button';
import Card from '@app/components/atoms/Card/Card';
import { Table } from '@app/components/molecules/Table/Table';
import { useAppDispatch, useAppSelector } from '@app/redux/hooks';
import { taskSlice } from '@app/redux/slices/task';
import useModal from '@app/utils/hooks/useModal';

export default function Page() {
  const data = useAppSelector((state: any) => state.task.taskList);
  const dispatch = useAppDispatch();

  const columns: IColumnType<IData>[] = [
    {
      key: 'title',
      title: 'Task title',
      width: 200,
    },
    {
      key: 'time',
      title: 'Time Required (In Hrs)',
      width: 200,
    },
    {
      key: 'action',
      title: 'Action',
      width: 200,
      render: (_, item) => {
        const handleDeleteTask = () => {
          if (confirm('Do you want to delete task?') == true) {
            dispatch(taskSlice.actions.deleteTaskList(item.id));
          }
        };

        return (
          <Button className="link" onClick={handleDeleteTask}>
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <Card>
      <h3>Todo list</h3>
      <Table data={data} columns={columns} />
    </Card>
  );
}
