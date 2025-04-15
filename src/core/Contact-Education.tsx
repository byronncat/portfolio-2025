import { useState } from "react";
import clsx from "clsx";
import { Heading, VariableText } from "../components";
import minimoss05 from "../assets/minimoss05.gif";

export default function Contact({
  className,
}: Readonly<{ className?: string }>) {
  const [copyText, setCopyText] = useState("");

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setCopyText(text);
  }

  return (
    <div className={clsx("flex md:space-x-12 -mt-6", className)}>
      <div className="w-full md:max-w-[36rem]">
        <section className="pt-6 mb-6" id="contact">
          <Heading>📞 contact</Heading>
          <div className="p-4 pb-6 border border-gray-700 bg-white/[.05]">
            <VariableText
              name="phone"
              value="0933276382"
              isCopied={copyText === "0933276382"}
              copyToClipboard={copyToClipboard}
              variant="copy"
            />
            <VariableText
              name="email"
              value="anhthinhncat@gmail.com"
              isCopied={copyText === "anhthinhncat@gmail.com"}
              copyToClipboard={copyToClipboard}
              variant="copy"
            />
            <VariableText
              name="address"
              value="Ho Chi Minh City, Vietnam"
              isCopied={copyText === "Ho Chi Minh City, Vietnam"}
              copyToClipboard={copyToClipboard}
              variant="copy"
            />
          </div>
        </section>

        <section className="pt-6" id="education">
          <Heading>🎓 education</Heading>
          <div className="p-4 pb-6 border border-gray-700 bg-white/[.05]">
            <VariableText
              name="university"
              value="University of Science"
              isCopied={copyText === "University of Science"}
              copyToClipboard={copyToClipboard}
              variant="copy"
            />
            <VariableText
              name="bachelor"
              value="Software Engineering."
              isCopied={copyText === "Software Engineering."}
              copyToClipboard={copyToClipboard}
              variant="copy"
            />
          </div>
        </section>
      </div>
      <div className={clsx("grow", "hidden md:block self-center")}>
        <img src={minimoss05} alt="lucky-fish" className="w-full" />
      </div>
    </div>
  );
}
