import clsx from "clsx";
import { Button, Heading } from "../components";
import bygramImage from "../assets/bygram.png";
import bytaskImage from "../assets/bytask.png";
import aiChat from "../assets/ai-chat.png";

const projects = [
  {
    title: "Bygram",
    image: bygramImage,
    publicHost: "https://bygram.netlify.app",
    github: "https://github.com/byronncat/bygram",
    description:
      "A modern web application designed to help users share images, videos, and connect with others. Built with a focus on clean code and user-friendly design (for personal learning purpose), this platform offers features like user profiles, post exploration, and search functionality.",
  },
  {
    title: "Bytask",
    image: bytaskImage,
    publicHost: "https://bytask-thinhngos-projects-58fb4efc.vercel.app",
    github: "https://github.com/byronncat/bytask",
    description:
      "A web application designed to help students and lifelong learners manage their study schedules effectively. Leveraging AI, it provides personalized feedback and insights to optimize learning efficiency and time management.",
  },
  {
    title: "AI Chat",
    image: aiChat,
    description:
      "AI chat helps you get answers, find inspiration and be more productive. It is free to use and easy to try with ALL latest LLM models",
  },
];

export default function Projects({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <section id="projects" className={className}>
      <Heading>🚀 projects</Heading>
      <div className="space-y-12 md:space-y-24 mt-12">
        <FeaturedProject
          title={projects[0].title}
          description={projects[0].description}
          image={projects[0].image}
          publicHost={projects[0].publicHost}
          github={projects[0].github}
        />

        <FeaturedProject
          title={projects[1].title}
          description={projects[1].description}
          image={projects[1].image}
          publicHost={projects[1].publicHost}
          github={projects[1].github}
          direction="reverse"
        />

        <FeaturedProject
          title={projects[2].title}
          description={projects[2].description}
          image={projects[2].image}
        />
      </div>
    </section>
  );
}

type FeaturedProjectProps = Readonly<{
  title: string;
  description: string;
  image: string;
  publicHost?: string;
  github?: string;
  direction?: "normal" | "reverse";
}>;

const FeaturedProject = ({
  title,
  description,
  image,
  publicHost,
  github,
  direction = "normal",
}: FeaturedProjectProps) => {
  const isReverse = direction === "reverse";

  return (
    <div
      className={clsx(
        "relative w-full",
        "flex flex-col lg:flex-row items-center justify-between",
        "gap-x-0 lg:gap-x-8"
      )}
    >
      <div
        className={clsx(
          "space-y-4",
          "w-full lg:w-[480px] shrink-0",
          isReverse && "lg:order-2 lg:text-right"
        )}
      >
        <div className="space-y-2">
          <p className="text-green-300 text-sm font-medium tracking-wide">
            {github ? "✨ Featured Project" : "🕒 Coming soon"}
          </p>
          <h2 className="text-white text-3xl font-bold">{title}</h2>
        </div>

        <p className="text-gray-300 text-base leading-relaxed">{description}</p>

        <div className="space-x-4">
          <Button
            onClick={() => window.open(publicHost, "_blank")}
            disabled={!publicHost}
          >
            {publicHost ? "view-website()" : "null"}
          </Button>
          <Button
            onClick={() => window.open(github, "_blank")}
            disabled={!github}
          >
            {github ? "view-source()" : "null"}
          </Button>
        </div>
      </div>

      <div
        className={clsx(
          "relative",
          "w-full lg:w-auto",
          "flex justify-center",
          "mt-6 lg:mt-0",
          "z-10",
          isReverse ? "lg:order-1 lg:justify-start" : "lg:justify-end"
        )}
      >
        <img src={image} alt={title} />
        {!github && (
          <span
            className={clsx(
              "absolute inset-0",
              "flex items-center justify-center",
              "bg-black/[.8]",
              "font-bold uppercase tracking-wide text-lg text-white"
            )}
          >
            Comming soon...
          </span>
        )}
      </div>
    </div>
  );
};
