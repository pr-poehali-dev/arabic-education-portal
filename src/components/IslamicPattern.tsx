export const IslamicPattern = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="islamic-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <g stroke="currentColor" fill="none" strokeWidth="1.5">
            <circle cx="50" cy="50" r="20" />
            <circle cx="50" cy="50" r="15" />
            <path d="M 50 30 L 50 70 M 30 50 L 70 50" />
            <path d="M 35 35 L 65 65 M 35 65 L 65 35" />
            <rect x="40" y="40" width="20" height="20" transform="rotate(45 50 50)" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
    </svg>
  );
};
