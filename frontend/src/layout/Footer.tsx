import type { ReactNode } from "react";

export type SocialMedia = {
  name: string;
  link: string;
  icon: ReactNode;
};

type FooterProps = {
  socials: SocialMedia[];
};

export function Footer({ socials }: FooterProps) {
  return (
    <footer className="bg-surface text-muted-foreground p-2">
      <div className="flex justify-center m-4">
        <p className="text-lg">For coffee lovers, by coffee lovers.</p>
      </div>
      <div className="flex gap-8 justify-center">
        {socials.map((social) => (
          <a
            key={social.name}
            className="h-12"
            href={social.link}
            target="_blank"
            aria-label={`Visit my ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="flex justify-between m-4">
        <p>&copy; Copyright 2026</p>
        <p>Designed by Magnus</p>
      </div>
    </footer>
  );
}

export default Footer;
