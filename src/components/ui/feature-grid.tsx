import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: string;
  className?: string;
}

export default function FeatureGrid({
  items,
  columns = "lg:grid-cols-3",
  className,
}: FeatureGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4", columns, className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-[#e31e26]/30"
        >
          <div className="w-10 h-10 bg-[#e31e26]/20 text-[#e31e26] border border-[#e31e26]/30 rounded-lg flex items-center justify-center mb-3">
            {item.icon}
          </div>
          <h3 className="text-white font-bold mb-1">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
