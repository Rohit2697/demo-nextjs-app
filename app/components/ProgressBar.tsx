import React from "react";

interface ProgressBarProps {
  progress: number;
  label?: string;
  height?: number;
  color?: string;
}

const clamp = (value: number, min: number, max: number): number => {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
  height = 12,
  color = "#3b82f6",
}) => {
  const clampedProgress = clamp(progress, 0, 100);

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
          style={{
            width: `${clampedProgress}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: height / 2,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
