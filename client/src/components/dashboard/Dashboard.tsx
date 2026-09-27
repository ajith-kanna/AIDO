import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const Dashboard = () => {

  return (
    <main className="relative flex min-h-dvh flex-col items-center gap-5 overflow-hidden bg-primary p-4 text-white sm:p-8">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-white/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 size-96 rounded-full bg-black/10 blur-3xl" />


      <section className="z-10 size-full max-w-7xl rounded-[2rem] border border-white/5 bg-primary/80 p-5 shadow-[10px_10px_20px_#1b1c1f,_-8px_-8px_18px_#2f3237] backdrop-blur sm:p-8">

      </section>

    </main>
  );
};

export default Dashboard;
