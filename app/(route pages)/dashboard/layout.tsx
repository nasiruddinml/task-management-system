import OverviewSection from '@app/components/organisms/Overview/Overview';
import TaskForm from '@app/components/organisms/TaskForm/TaskForm';

export const metadata = {
  title: 'TMS',
  description: 'Dashboard | TMS',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="header">
        <h2 className="title">Task Management App</h2>
        <OverviewSection />
      </header>
      <div className="content">
        <TaskForm />
        {children}
      </div>
    </main>
  );
}
