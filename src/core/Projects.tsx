import clsx from "clsx";
import { Button, Heading } from "../components";
import bygramImage from "../assets/bygram.png";
import bytaskImage from "../assets/bytask.png";
import momentUp from "../assets/moment-up.png";
import aiChatBotImage from "../assets/ai-chat-bot.webp";
import aiChatBotImage1 from "../assets/ai-chat-bot-1.webp";
import aiChatBotImage2 from "../assets/ai-chat-bot-2.webp";


const projects = [
  {
    title: "Media sharing platform",
    image: bygramImage,
    publicHost: "https://bygram.netlify.app",
    github: "https://github.com/byronncat/bygram",
    description:
      "A modern web application designed to help users share images, videos, and connect with others. Built with a focus on clean code and user-friendly design (for personal learning purpose), this platform offers features like user profiles, post exploration, and search functionality.",
  },
  {
    title: "Task management website",
    image: bytaskImage,
    publicHost: "https://bytask-thinhngos-projects-58fb4efc.vercel.app",
    github: "https://github.com/byronncat/bytask",
    description:
      "A web application designed to help students and lifelong learners manage their study schedules effectively. Leveraging AI, it provides personalized feedback and insights to optimize learning efficiency and time management.",
  },
  {
    title: "AI Chat Bot",
    image: [aiChatBotImage, aiChatBotImage1, aiChatBotImage2],
    publicHost: "https://play.google.com/store/apps/details?id=com.aichatbot.assistant&hl=en&pli=1",
    github: "https://github.com/thinhngoo/AI_chat_bot",
    description:
      "AI-Powered Chat Platform is designed to provide users with an interactive AI chat experience, customizable AI bot creation, and knowledge dataset management.",
  },
  {
    title: "Social application",
    image: momentUp,
    description:
      "An improved version of the Media sharing platform project, incorporating more robust features to strengthen own core skills with AI coding support.",
    demo: "https://moment-up-client.vercel.app",
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
          publicHost={projects[2].publicHost}
          github={projects[2].github}
        />
   
        <FeaturedProject
          title={projects[3].title}
          description={projects[3].description}
          image={projects[3].image}
          demo={projects[3].demo}
          direction="reverse"
        />
      </div>
    </section>
  );
}

type FeaturedProjectProps = Readonly<{
  title: string;
  description: string;
  image: string | string[];
  publicHost?: string;
  github?: string;
  demo?: string;
  direction?: "normal" | "reverse";
}>;

const FeaturedProject = ({
  title,
  description,
  image,
  publicHost,
  github,
  demo,
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
            onClick={() => window.open(publicHost || demo, "_blank")}
            disabled={!publicHost && !demo}
          >
            {publicHost ? "View Project" : demo ? "View Demo" : "null"}
          </Button>
          <Button
            onClick={() => window.open(github, "_blank")}
            disabled={!github}
          >
            {github ? "View Source" : "null"}
          </Button>
        </div>
      </div>

      <div
        className={clsx(
          "relative",
          "w-full lg:w-auto",
          "h-[234px]",
          "flex justify-center items-center",
          "mt-6 lg:mt-0",
          "z-10",
          isReverse ? "lg:order-1 lg:justify-start" : "lg:justify-end"
        )}
      >
        {Array.isArray(image) ? (
          <div className="flex gap-4 w-full h-full justify-center">
            {image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} ${index + 1}`}
                className="max-w-[33%] h-full object-contain"
              />
            ))}
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        )}
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
