import clsx from "clsx";
import { Typewriter } from "../components";
import { socialLinks } from "../constants/social_link";
import minimoss06 from "../assets/minimoss06.gif";

export default function Introduction({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <section
      className={clsx("flex items-center justify-center space-x-12", className)}
      id="introduction"
    >
      <div className={clsx("grow", "hidden md:block")}>
        <img src={minimoss06} alt="lucky-fishX" className="w-full" />
      </div>
      <div className={clsx("font-mono text-left", "w-full md:w-[50rem]")}>
        <div className="mb-4">
          <p className={clsx("text-gray-400", "mb-1")}>// Hi all. I am</p>
          <h1
            className={clsx(
              "font-bold text-4xl lg:text-5xl text-white",
              "mb-3"
            )}
          >
            Ngo Cao Anh Thinh
          </h1>

          <div className="text-green-500 text-xl">
            <Typewriter
              text="&gt; Full-stack developer"
              speed={100}
              loop={false}
            />
          </div>
        </div>

        <div
          className={clsx(
            "mt-4 p-4 pb-4",
            "border border-white/20",
            "bg-[#171717]"
          )}
        >
          <p className="text-green-400">
            Microsoft Windows [Version 10.0.19045.5487]
          </p>
          <p className="text-green-400">
            (c) Microsoft Corporation. All rights reserved.
          </p>
          <p className="text-white mt-5">
            <span className="text-green-400">C:\Users\ADMIN&gt;</span>{" "}
            Final-year student available for a full-time Web app Developer role,
            eager to contribute to building innovative, scalable, and
            user-friendly web applications.
          </p>

          <div className="flex items-center gap-4 mt-8">
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
      </div>
    </section>
  );
}
