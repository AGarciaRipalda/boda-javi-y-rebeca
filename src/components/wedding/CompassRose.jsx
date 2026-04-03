export default function CompassRose({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute right-6 top-6 z-20 opacity-65 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        className="h-16 w-16 text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="32" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="7" fill="currentColor" fillOpacity="0.12" />
        <path d="M60 8L67 44L60 52L53 44L60 8Z" fill="currentColor" />
        <path d="M112 60L76 67L68 60L76 53L112 60Z" fill="currentColor" />
        <path d="M60 112L53 76L60 68L67 76L60 112Z" fill="currentColor" />
        <path d="M8 60L44 53L52 60L44 67L8 60Z" fill="currentColor" />
        <path d="M60 24L64 46L60 50L56 46L60 24Z" fill="currentColor" fillOpacity="0.35" />
        <path d="M96 60L74 64L70 60L74 56L96 60Z" fill="currentColor" fillOpacity="0.35" />
        <path d="M60 96L56 74L60 70L64 74L60 96Z" fill="currentColor" fillOpacity="0.35" />
        <path d="M24 60L46 56L50 60L46 64L24 60Z" fill="currentColor" fillOpacity="0.35" />
        <text x="60" y="18" textAnchor="middle" fontSize="10" fill="currentColor">N</text>
        <text x="102" y="63" textAnchor="middle" fontSize="10" fill="currentColor">E</text>
        <text x="60" y="108" textAnchor="middle" fontSize="10" fill="currentColor">S</text>
        <text x="18" y="63" textAnchor="middle" fontSize="10" fill="currentColor">O</text>
      </svg>
    </div>
  );
}
