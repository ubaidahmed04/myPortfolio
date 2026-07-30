import { Github, Instagram, Facebook } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-paper/40">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-paper/40 transition-colors hover:text-accent"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-paper/40 transition-colors hover:text-accent"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-paper/40 transition-colors hover:text-accent"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
