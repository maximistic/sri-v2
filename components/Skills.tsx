const ROW_ONE = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "Java",
  "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Tailwind",
];
const ROW_TWO = [
  "readable code", "small PRs", "fast interfaces", "clean APIs",
  "tests that matter", "boring infrastructure", "good defaults",
];

function Strip({ items, reverse = false, outline = false }: { items: string[]; reverse?: boolean; outline?: boolean }) {
  // list is doubled so translateX(-50%) loops seamlessly
  const doubled = [...items, ...items];
  return (
    <div className="group flex overflow-hidden whitespace-nowrap">
      <div
        className={`marquee-track flex shrink-0 items-center group-hover:[animation-play-state:paused] ${reverse ? "marquee-reverse" : ""}`}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={
                outline
                  ? "px-6 text-[clamp(2.5rem,7vw,6rem)] font-semibold tracking-tighter text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_var(--foreground)] hover:text-foreground"
                  : "px-6 font-serif text-[clamp(1.75rem,4vw,3.25rem)] italic text-muted-foreground transition-colors duration-300 hover:text-primary"
              }
            >
              {item}
            </span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="border-y border-border py-10 md:py-14" aria-label="Skills">
      <p className="sr-only">TypeScript, React, Next.js, Node.js, Python, Java, PostgreSQL, MongoDB, Redis, Docker, AWS, Tailwind</p>
      <div className="space-y-4">
        <Strip items={ROW_ONE} outline />
        <Strip items={ROW_TWO} reverse />
      </div>
    </section>
  );
}
