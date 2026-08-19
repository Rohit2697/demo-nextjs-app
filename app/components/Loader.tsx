import React from "react";

interface LoaderProps {
  size?: number;
  label?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 48, label = "Loading..." }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "3rem 0",
      }}
    >
      <div className="loader-spinner" style={{ width: size, height: size }} />
      {label && <span style={{ color: "#666", fontSize: "0.9rem" }}>{label}</span>}
      <style jsx>{`
        .loader-spinner {
          border-radius: 50%;
          border: 4px solid #e0e0e0;
          border-top-color: #666666;
          animation: loader-spin 0.8s linear infinite;
        }

        @keyframes loader-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
