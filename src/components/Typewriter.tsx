import { useState, useEffect } from "react";

type TypewriterProps = Readonly<{
  text: string;
  speed?: number;
  loop?: boolean;
}>;

export default function Typewriter({
  text,
  speed = 100,
  loop = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else if (loop) {
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
        }, 1500);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, text, speed, loop]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span className="font-mono">
      {displayText}
      <span
        className={`${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        |
      </span>
    </span>
  );
}
