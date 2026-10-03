import { Navbar } from "../ui/dock";
import { Table, type Column } from "../common/table";
interface TaskItem {
  id: string;
  title: string;
  category: string;
  status: "Completed" | "In Progress" | "Pending";
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}

const SAMPLE_TASKS: TaskItem[] = [
  {
    id: "1",
    title: "Design System Implementation",
    category: "Design",
    status: "Completed",
    priority: "High",
    dueDate: "2026-10-05",
  },
  {
    id: "2",
    title: "Integrate Authentication API",
    category: "Development",
    status: "In Progress",
    priority: "High",
    dueDate: "2026-10-08",
  },
  {
    id: "3",
    title: "Dashboard Table Optimization",
    category: "Development",
    status: "Pending",
    priority: "Medium",
    dueDate: "2026-10-12",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
    case "In Progress":
      return "border-blue-500/30 bg-blue-500/10 text-blue-400";
    case "Pending":
      return "border-amber-500/30 bg-amber-500/10 text-amber-400";
    default:
      return "border-zinc-500/30 bg-zinc-500/10 text-zinc-400";
  }
};

const Dashboard = () => {
  const SAMPLE_HEADER: Column<TaskItem>[] = [
    { id: "1", title: "Name", value: "title", className: "font-medium text-white" },
    { id: "2", title: "Category", value: "category", className: "text-zinc-400" },
    {
      id: "3",
      title: "Status",
      value: "status",
      render: (row) => (
        <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${getStatusBadge(row.status)}`}>
          {row.status}
        </span>
      ),
    },
    { id: "4", title: "Priority", value: "priority" },
    { id: "5", title: "Due Date", value: "dueDate", className: "text-zinc-400" },
  ];

  return (
    <main className="relative flex min-h-dvh flex-col justify-end items-center gap-5 overflow-hidden bg-primary p-4 text-white sm:p-8">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-white/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 size-96 rounded-full bg-black/10 blur-3xl" />
      <Navbar />
      <Table data={SAMPLE_TASKS} column={SAMPLE_HEADER} />
    </main>
  );
};

export default Dashboard;
