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
            "size-48 bg-green-700/[.05] shrink-0",
            "border-2 border-gray-700",
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
            "bg-white/[.05] p-4",
            "border border-gray-700",
            "place-self-stretch"
          )}
        >
          <VariableText
            name="Goal"
            value="Looking for long-term growth in the company."
          />
          <VariableText
            name="English"
            value="Good at speaking, listening, and reading."
          />
          <VariableText
            name="Education"
            value="University of Sciences (2021 - Expected May 2025)."
          />
          <VariableText
            name="Work Ethic"
            value="Hardworking, productive, and always eager to learn."
          />
          <VariableText
            name="Objectives"
            value="Improving both technical skills (algorithms, design patterns) and soft skills (code review, AI integration)."
          />
        </div>
      </div>
    </section>
  );
}
