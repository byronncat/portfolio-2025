import clsx from "clsx";
import { socialLinks } from "../constants/social_link";

export default function Footer() {
  return (
    <footer className={clsx("h-20", "border-t border-white/20", "bg-[#171717]")}>
      <div
        className={clsx(
          "max-w-7xl mx-auto",
          "pt-7 px-6",
          "flex justify-between items-center"
        )}
      >
        <p className="text-white">
          &copy; 2025 Portfolio by{" "}
          <span className="text-green-300">Ngo Cao Anh Thinh</span>
        </p>
        <div className="flex justify-end gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white opacity-50 hover:opacity-100 transition-opacity duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
