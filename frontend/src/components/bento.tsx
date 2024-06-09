import React from "react";
import { cn } from "../../lib/utils";
import "../../src/index.css";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("grid md:grid-cols-2 gap-4 mx-auto relative", className)}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-2xl text-6xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-neutral-400 border border-transparent justify-between flex flex-col space-y-4 w-full h-[60%] z-10",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 text-6xl transition duration-200 flex flex-col justify-between">
        {icon}
        <div className="font-sans font-bold text-6xl text-white dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-white text-2xl dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
