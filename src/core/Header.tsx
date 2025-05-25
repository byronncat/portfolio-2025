import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={clsx(
        "sticky top-0 z-20",
        "w-full h-16",
        "pl-8 pr-8 lg:pr-12",
        "flex items-center justify-center",
        "border-b border-white/20",
        "select-none",
        "bg-[#171717]"
      )}
    >
      <div
        className={clsx(
          "w-full max-w-7xl",
          "flex items-center justify-between"
        )}
      >
        <a href="#introduction">
          <div className={clsx("size-8", "cursor-pointer")}>
            <img src="/icon.svg" alt="Dev logo" className="size-full" />
          </div>
        </a>
        <div
          className={clsx(
            "flex items-center",
            "text-gray-400 text-xl lg:text-lg"
          )}
        >
          <button
            role="button"
            className={clsx(
              "lg:hidden",
              "cursor-pointer hover:opacity-80",
              "transition-opacity ease-in-out duration-200"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="fill-white size-6"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-white size-6"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </button>
          <nav
            className={clsx(
              !isMenuOpen ? "hidden" : "flex",
              "absolute lg:static top-16 left-0 z-10",
              "pt-4 pb-8 lg:p-0",
              "w-full lg:w-fit",
              "border-b lg:border-b-0 border-white/20",
              "bg-[#171717] lg:bg-transparent",
              "lg:flex flex-col lg:flex-row",
              "gap-x-16 gap-y-4"
            )}
          >
            <a
              className={clsx(
                "px-8 lg:px-0",
                "hover:cursor-pointer hover:text-white",
                "transition-colors ease-in-out duration-200"
              )}
              href="#introduction"
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </a>
            <a
              className={clsx(
                "px-8 lg:px-0",
                "hover:cursor-pointer hover:text-white",
                "transition-colors ease-in-out duration-200"
              )}
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </a>
            <a
              className={clsx(
                "px-8 lg:px-0",
                "hover:cursor-pointer hover:text-white",
                "transition-colors ease-in-out duration-200"
              )}
              href="#education"
              onClick={() => setIsMenuOpen(false)}
            >
              education
            </a>
            <a
              className={clsx(
                "px-8 lg:px-0",
                "hover:cursor-pointer hover:text-white",
                "transition-colors ease-in-out duration-200"
              )}
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </a>
            <a
              className={clsx(
                "px-8 lg:px-0",
                "hover:cursor-pointer hover:text-white",
                "transition-colors ease-in-out duration-200"
              )}
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
            >
              skills
            </a>
            <a
              className={clsx(
                "px-8 lg:px-0",
                "hover:cursor-pointer hover:text-white",
                "transition-colors ease-in-out duration-200"
              )}
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              projects
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
