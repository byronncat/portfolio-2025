import { Typewriter } from "../components";
import clsx from "clsx";
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
            "mt-4 p-4 pb-8",
            "border border-gray-700",
            "bg-white/[.05]"
          )}
        >
          <p className="text-green-400">
            Microsoft Windows [Version 10.0.19045.5487]
          </p>
          <p className="text-green-400">
            (c) Microsoft Corporation. All rights reserved.
          </p>
          <p className="text-white mt-5">
            <span className="text-green-400">C:\Users\ADMIN&gt;</span> I am a
            final-year student seeking a full-time software developer role. My
            main goal is to become a best craftsman in the field of software
            development.
          </p>
        </div>
      </div>

      {/* <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
      </div> */}
    </section>
  );
}
