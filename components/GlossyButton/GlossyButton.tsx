import Link from "next/link";
import styles from "./GlossyButton.module.scss";

type GlossyButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "blue" | "green";
  size?: "md" | "sm";
  className?: string;
  type?: "button" | "submit";
};

export default function GlossyButton({
  children,
  href,
  onClick,
  variant = "blue",
  size = "md",
  className = "",
  type = "button",
}: GlossyButtonProps) {
  const classes = [
    styles.button,
    variant === "green" ? styles.green : "",
    size === "sm" ? styles.sm : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
