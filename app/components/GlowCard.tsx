import { useRef, MouseEvent, ReactNode, useEffect } from "react";

interface CardData {
  review: string;
}

interface GlowCardProps {
  card: CardData;
  index: number;
  children?: ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ card, index, children }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: MouseEvent<HTMLDivElement>) => {
    const cardElement = cardRefs.current[index];
    if (!cardElement) return;

    const rect = cardElement.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardElement.style.setProperty("--start", `${angle + 60}`);
  };

  useEffect(() => {
    const card = cardRefs.current[index];
    if (!card) return;

    const handleHover = () => {
      const before = card.querySelector(".card-before") as HTMLElement;
      if (before) before.style.opacity = "1";
    };

    const handleLeave = () => {
      const before = card.querySelector(".card-before") as HTMLElement;
      if (before) before.style.opacity = "0";
    };

    card.addEventListener("mouseenter", handleHover);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mouseenter", handleHover);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, [index]);

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      style={{
        position: "relative",
        zIndex: 40,
        overflow: "hidden",
        transition: "border-color 1s ease-in-out",
        backgroundColor: "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.75rem", 
        padding: "2.5rem",
        marginBottom: "1.25rem",
        breakInside: "avoid-column",
        "--start": "0",
        "--gradient": "radial-gradient(circle, var(--color-ring) 0%, var(--color-ring) 100%)",
      } as React.CSSProperties}
    >
      <div
        className="card-before"
        style={{
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "inherit",
          border: "2px solid transparent",
          background: "var(--gradient)",
          backgroundAttachment: "fixed",
          WebkitMaskImage: `linear-gradient(#0000, #0000), conic-gradient(
            from calc((var(--start) - 15) * 1deg),
            #ffffff1f 0deg,
            white,
            #ffffff00 100deg
          )`,
          WebkitMaskComposite: "source-in",
          WebkitMaskClip: "padding-box, border-box",
          opacity: 0,
          transition: "0.5s ease",
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(10px) saturate(200)",
        }}
      ></div>

      <div className="mb-5">
        <p
          style={{
            color: "var(--color-muted-foreground)",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
          }}
        >
          {card.review}
        </p>
      </div>

      {children}
    </div>
  );
};

export default GlowCard;
