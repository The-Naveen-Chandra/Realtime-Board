import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { Camera } from "@/types/canvas";

const COLORS = [
  "#DC2626",
  "#FBBF24",
  "#059669",
  "#3B82F6",
  "#A78BFA",
  "#F472B6",
  "#DB2777",
  "#F97706",
  "#7C3AED",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
