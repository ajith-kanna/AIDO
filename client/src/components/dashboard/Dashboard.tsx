import { Navbar } from "../ui/dock";


const Dashboard = () => {

  return (
    <main className="relative flex min-h-dvh flex-col justify-end items-center gap-5 overflow-hidden bg-primary p-4 text-white sm:p-8">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-white/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 size-96 rounded-full bg-black/10 blur-3xl" />
      <Navbar/>
    </main>
  );
};

export default Dashboard;
