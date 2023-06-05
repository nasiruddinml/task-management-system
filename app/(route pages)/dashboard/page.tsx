'use client';

import { IColumnType, IData } from '@app/utils/types/types';
import Button from '@app/components/atoms/Button/Button';
import Card from '@app/components/atoms/Card/Card';
import { Table } from '@app/components/molecules/Table/Table';
import OverviewSection from '@app/components/organisms/Overview/Overview';
import TaskForm from '@app/components/organisms/TaskForm/TaskForm';
import { useAppDispatch, useAppSelector } from '@app/redux/hooks';
import { taskSlice } from '@app/redux/slices/task';

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
    <>
      <header className="header">
        <h2 className="title">Task Management App</h2>
        <OverviewSection />
      </header>
      <div className="content">
        <TaskForm />
        <Card>
          <h3>Todo list</h3>
          <Table data={data} columns={columns} />
        </Card>
      </div>
    </>
  );
}
