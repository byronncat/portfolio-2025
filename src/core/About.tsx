import clsx from "clsx";
import { Heading, VariableText } from "../components";
import me from "../assets/me.png";
import background from "../assets/background.gif";

export default function About({ className }: Readonly<{ className?: string }>) {
  return (
    <section id="about" className={className}>
      <Heading>⭐ about me</Heading>
      <div
        className={clsx(
          "flex flex-col lg:flex-row items-center lg:items-start",
          "text-white"
        )}
      >
        <div
          className={clsx(
            "size-48 bg-green-300/[.05] shrink-0",
            "border-2 border-white/20",
            "mr-8 mb-6 lg:mb-0"
          )}
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <img src={me} alt="byron" className="size-full object-cover" />
        </div>
        <div
          className={clsx(
            "bg-[#171717] p-4",
            "border border-white/20",
            "place-self-stretch"
          )}
        >
          <VariableText
            name="Goal"
            value="Become a best craftsman in the field of software development."
          />
          <VariableText
            name="Description"
            value="My journey began with a curiosity about how this world works, which has evolved into a deep interest in creating products. Although I am at the beginning of my professional career, I have gained experience working with various technologies through (e.g. React, Node.js, MySQL, MongoDB, etc.) both personal and group projects."
          />
        </div>
      </div>
    </section>
  );
}
