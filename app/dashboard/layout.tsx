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
      <div className="content">{children}</div>
    </main>
  );
}
