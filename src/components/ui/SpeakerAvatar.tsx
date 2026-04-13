import Image from "next/image";
import { User } from "lucide-react";
import type { Speaker } from "@/data/speakers";

type Size = "sm" | "md" | "lg" | "xl";

/**
 * Yuvarlak konuşmacı avatarı. `image` doluysa next/image ile render eder,
 * yoksa marka gradient'li zeminde User ikonu gösterir.
 */
export default function SpeakerAvatar({
  speaker,
  size = "md",
  className = "",
}: {
  speaker: Speaker;
  size?: Size;
  className?: string;
}) {
  const dims: Record<Size, { box: string; iconPx: number; imgPx: number }> = {
    sm: { box: "w-10 h-10", iconPx: 20, imgPx: 40 },
    md: { box: "w-16 h-16", iconPx: 32, imgPx: 64 },
    lg: { box: "w-28 h-28", iconPx: 48, imgPx: 112 },
    xl: { box: "w-full h-full", iconPx: 96, imgPx: 400 },
  };
  const { box, iconPx, imgPx } = dims[size];

  if (!speaker.image) {
    return (
      <div
        className={`${box} rounded-full bg-gradient-to-br from-[#06539f] to-[#e31e26] flex items-center justify-center shrink-0 ${className}`}
        aria-label={speaker.name}
      >
        <User size={iconPx} className="text-white" />
      </div>
    );
  }

  return (
    <div
      className={`${box} rounded-full overflow-hidden shrink-0 bg-white/5 ${className}`}
    >
      <Image
        src={speaker.image}
        alt={speaker.name}
        width={imgPx}
        height={imgPx}
        className="w-full h-full object-cover"
        sizes={`${imgPx}px`}
      />
    </div>
  );
}
