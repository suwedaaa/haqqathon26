import Image from "next/image";
import GlossyButton from "@/components/GlossyButton/GlossyButton";
import { SIGN_UP_URL } from "@/data/event";
import styles from "./Nav.module.scss";

const socialLinks = [
  { href: "https://instagram.com", icon: "/instagram-logo.svg", label: "Instagram" },
  { href: "https://youtube.com", icon: "/blue-youtube.png", label: "YouTube" },
  { href: "https://linktr.ee", icon: "/linktree-logo.svg", label: "Linktree" },
];

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.actions}>
        <GlossyButton href="#Speakers">Speakers</GlossyButton>
        <GlossyButton href="#faq">FAQ</GlossyButton>
        <GlossyButton href={SIGN_UP_URL} variant="green">
          Sign up
        </GlossyButton>
      </div>
      <div className={styles.social}>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <Image src={link.icon} alt="" width={22} height={22} />
          </a>
        ))}
      </div>
    </nav>
  );
}
