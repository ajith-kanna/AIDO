import { Sparkles } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#A755F7]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#A755F7]/10 blur-[120px]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative mb-10 flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-[#A755F7]/15 border-t-[#A755F7]" />
          <div className="absolute inset-3 animate-[spin_3s_linear_infinite_reverse] rounded-full border-2 border-[#A755F7]/10 border-b-[#A755F7]/70" />
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#A755F7]/30 bg-[#A755F7]/10 shadow-[0_0_35px_rgba(167,85,247,0.2)]">
            <Sparkles
              size={30}
              strokeWidth={1.5}
              className="animate-pulse text-[#A755F7]"
            />
          </div>
          <div className="absolute right-0 top-2 h-3 w-3 animate-pulse rounded-full bg-[#A755F7] shadow-[0_0_15px_#A755F7]" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Getting things ready
          <span className="text-[#A755F7]">.</span>
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400 sm:text-base">
          Hang tight. We're preparing your experience.
        </p>
        <div
          className="mt-8 flex items-center gap-2"
          role="status"
          aria-label="Loading"
        >
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#A755F7] [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#A755F7] [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#A755F7]" />
        </div>
        <div className="mt-12 flex items-center gap-2 text-xs tracking-[0.2em] text-zinc-600 uppercase">
          <span className="h-px w-8 bg-[#A755F7]/40" />
          Please wait
          <span className="h-px w-8 bg-[#A755F7]/40" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
