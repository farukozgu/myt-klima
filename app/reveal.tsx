import { cloneElement, type CSSProperties, type ReactElement } from "react";

type RevealVariant = "fade" | "fadeUp" | "imageReveal" | "stagger";

type RevealProps = {
  children: ReactElement<{ className?: string; style?: CSSProperties; "data-reveal"?: string }>;
  variant?: RevealVariant;
  delay?: number;
};

export default function Reveal({ children, variant = "fadeUp", delay = 0 }: RevealProps) {
  const className = [children.props.className, "reveal", `reveal-${variant}`]
    .filter(Boolean)
    .join(" ");
  const style = {
    ...children.props.style,
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return cloneElement(children, {
    className,
    style,
    "data-reveal": variant,
  });
}
