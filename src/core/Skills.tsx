import clsx from "clsx";
import { Heading } from "../components";
import html5 from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import tailwindCss from "../assets/icons/tailwindcss.svg";
import sass from "../assets/icons/sass.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import react from "../assets/icons/react.svg";
import nextjs from "../assets/icons/nextdotjs.svg";
import expo from "../assets/icons/expo.svg";
import nodejs from "../assets/icons/nodedotjs.svg";
import express from "../assets/icons/express.svg";
import nestjs from "../assets/icons/nestjs.svg";
import postgresql from "../assets/icons/postgresql.svg";
import mongodb from "../assets/icons/mongodb.svg";
import redis from "../assets/icons/redis.svg";
import supabase from "../assets/icons/supabase.svg";
import git from "../assets/icons/git.svg";

export default function Profile({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <section className={clsx("text-white", className)} id="skills">
      <Heading>💡 skills</Heading>
      <div
        className={clsx(
          "lg:grid grid-cols-2",
          "gap-6 space-y-6 lg:space-y-0",
          "auto-rows-[16rem]"
        )}
      >
        <div className="flex flex-col">
          <h3 className="mb-2 text-[#888888]">// Framework</h3>
          <div
            className={clsx(
              "bg-[#171717] border border-white/20",
              "p-6",
              "grow"
            )}
          >
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img
                  src={tailwindCss}
                  alt="tailwindcss"
                  className="size-6 mr-2"
                />
                Tailwind CSS
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={react} alt="react" className="size-6 mr-2" />
                React
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={bootstrap} alt="bootstrap" className="size-6 mr-2" />
                Bootstrap
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={nextjs} alt="nextdotjs" className="size-6 mr-2" />
                Next.js
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={sass} alt="sass" className="size-6 mr-2" />
                Sass
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={nodejs} alt="nodedotjs" className="size-6 mr-2" />
                Node.js
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <span
                  className={clsx(
                    "size-6 mr-2",
                    "bg-black rounded-full",
                    "flex items-center justify-center"
                  )}
                >
                  <img src={expo} alt="expo" className="size-3" />
                </span>
                Expo
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <span
                  className={clsx(
                    "size-6 mr-2",
                    "bg-white rounded-full",
                    "flex items-center justify-center"
                  )}
                >
                  <img src={express} alt="express" className="size-4" />
                </span>
                Express
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={react} alt="reactnative" className="size-6 mr-2" />
                React Native
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-2 text-[#888888]">// Programming Languages</h3>
          <div
            className={clsx(
              "bg-[#171717] border border-white/20",
              "p-6",
              "grow"
            )}
          >
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={html5} alt="html5" className="size-6 mr-2" />
                HTML
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img
                  src={javascript}
                  alt="javascript"
                  className="size-6 mr-2"
                />
                JavaScript
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={css} alt="css" className="size-6 mr-2" />
                CSS
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img
                  src={typescript}
                  alt="typescript"
                  className="size-6 mr-2"
                />
                TypeScript
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-2 text-[#888888]">// Others</h3>
          <div
            className={clsx(
              "bg-[#171717] border border-white/20",
              "p-6",
              "grow"
            )}
          >
            <div className="grid grid-cols-2 gap-y-3">
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={mongodb} alt="mongodb" className="size-6 mr-2" />
                MongoDB
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img
                  src={postgresql}
                  alt="postgresql"
                  className="size-6 mr-2"
                />
                PostgreSQL
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={redis} alt="redis" className="size-6 mr-2" />
                Redis
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">✔</span>
                <img src={git} alt="git" className="size-6 mr-2" />
                Git
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-2 text-[#888888]">
            // I am learning
          </h3>
          <div
            className={clsx(
              "bg-[#171717] border border-white/20",
              "p-6",
              "grow"
            )}
          >
            <div className="grid grid-cols-2 gap-y-3">
              <div>
                <div className="flex items-center">
                  <span className="w-3 mr-2 text-xs text-green-400">⌛</span>
                  <img src={nestjs} alt="nestjs" className="size-6 mr-2" />
                  NestJS
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-3 mr-2 text-xs text-green-400">⌛</span>
                <img src={supabase} alt="supabase" className="size-6 mr-2" />
                Supabase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
