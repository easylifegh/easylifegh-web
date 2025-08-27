import React from "react"

interface LoadingSpinnerProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  size?: number
  strokeWidth?: number
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  className = "",
  size = 20,
  strokeWidth = 2,
  ...rest
}) => {
  return (
    <svg
      className={`animate-spin text-current ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Loading"
      role="status"
      style={{
        animation: "spin 1s linear infinite",
      }}
      {...rest}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </svg>
  )
}

export default LoadingSpinner
