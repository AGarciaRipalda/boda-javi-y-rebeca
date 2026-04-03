export default function CompassRose({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute left-6 top-6 z-20 opacity-80 ${className}`}
      aria-hidden="true"
    >
      <img
        src="/rosaviento.png"
        alt=""
        className="h-16 w-16 object-contain"
        loading="lazy"
      />
    </div>
  );
}
