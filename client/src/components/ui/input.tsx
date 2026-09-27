import * as React from "react";

import { cn } from "@/lib/utils";

type Input = {
  className?: string;
  type?: string;
  icon?: React.ReactElement;
  placeholder?:string;
};

function Input({ className, type, icon, placeholder, ...props }: Input) {
  return (
    <div className="rounded-2xl flex flex-row items-center pl-2 shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237]">
      {icon}
      <input
        type={type}
        data-slot="input"
        placeholder={placeholder}
        className={cn(
          "h-12 w-full min-w-0 rounded-2xl bg-transparent px-3 py-1 text-base  transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
          // "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
