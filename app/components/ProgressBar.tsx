import React from "react";

type NamedColor = "blue" | "green" | "orange";

interface ProgressBarProps {
  progress: number;
  label?: string;
  height?: number;
  color?: NamedColor | string;
}

const clamp = (value: number, min: number, max: number): number => {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
};

const NAMED_COLORS: Record<NamedColor, string> = {
  blue: "#3b82f6",
  green: "#22c55e",
  orange: "#f97316",
};

const resolveColor = (color: NamedColor | string): string => {
  if (color in NAMED_COLORS) {
    return NAMED_COLORS[color as NamedColor];
  }
  return color;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  height = 12,
  color = "blue",
}) => {
  const clampedProgress = clamp(progress, 0, 100);
  const resolvedColor = resolveColor(color);

  return (
    <div style={{ width: "100%" }}>
      {label && (
        <div style={{ marginBottom: "0.25rem", fontSize: "0.85rem", color: "#666" }}>
          {label}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: "100%",
          height,
          backgroundColor: "#e0e0e0",
          borderRadius: height / 2,
          overflow: "hidden",
        }}
      >
        <div
          data-testid="progress-bar-fill"
          style={{
            width: `${clampedProgress}%`,
            height: "100%",
            backgroundColor: resolvedColor,
            borderRadius: height / 2,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
