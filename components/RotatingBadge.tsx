type RotatingBadgeProps = {
  label?: string;
};

export function RotatingBadge({
  label = "A2B CHAUFFEUR TOURS • LUXURY UK RIDES • A2B •",
}: RotatingBadgeProps) {
  const text = `${label} ${label}`;

  return (
    <div
      className="hero-orbit group relative h-36 w-36 cursor-pointer sm:h-44 sm:w-44 md:h-52 md:w-52"
      aria-hidden="true"
    >
      <div className="hero-orbit-core absolute inset-[18%] flex items-center justify-center rounded-full bg-yellow shadow-[0_0_0_6px_rgba(245,197,24,0.18)] transition-all duration-300 group-hover:bg-ink group-hover:shadow-[0_0_0_6px_rgba(245,197,24,0.35)]">
        <span className="display text-3xl leading-none text-ink transition-colors duration-300 group-hover:text-yellow sm:text-4xl md:text-5xl">
          A2B
        </span>
      </div>

      <svg
        className="hero-orbit-spin absolute inset-0 h-full w-full text-yellow transition-colors duration-300 group-hover:text-yellow"
        viewBox="0 0 200 200"
        role="presentation"
      >
        <defs>
          <path
            id="a2b-orbit-path"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text
          className="text-[11px] font-bold uppercase tracking-[0.28em]"
          fill="currentColor"
        >
          <textPath href="#a2b-orbit-path" xlinkHref="#a2b-orbit-path" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
