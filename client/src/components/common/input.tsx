import * as React from "react";
import AnimatedContainer from "./AnimatedContainer";

type InputProps = React.ComponentProps<"input"> & {
  icon?: React.ReactNode;
  error?: string;
};

function Input({ className, type, icon, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`rounded-2xl flex gap-2 items-center pl-4 shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] ${error && "border border-red-400"}`}>
        {icon}
        <input
          type={type}
          data-slot="input"
          className={`h-12 w-full min-w-0 rounded-2xl bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 selection:bg-[#A755F7] selection:text-white aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 ${className ?? ""}`}
          {...props}
        />
      </div>
      <AnimatedContainer transition={{ duration: 0.30, ease: 'easeOut' }} activeKey={error}>
        <p className="text-[10px] 2xl:text-xs text-red-400 font-medium">{error}</p>
      </AnimatedContainer>
    </div>
  );
}

export { Input };
