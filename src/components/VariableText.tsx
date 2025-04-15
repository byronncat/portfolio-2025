import clsx from "clsx";

type VariableTextProps = Readonly<{
  name: string;
  value: string;
  isCopied?: boolean;
  copyToClipboard?: (text: string) => void;
  variant?: "normal" | "copy";
}>;

export default function VariableText({
  name,
  value,
  isCopied,
  copyToClipboard,
  variant = "normal"
}: VariableTextProps) {
  return (
    <p>
      <span className="text-blue-400">const</span>{" "}
      <span className="text-amber-400">{name}</span>{" "}
      <span className="text-white">=</span>{" "}
      {variant === "copy" && copyToClipboard ? (
        <>
          <button
            role="button"
            className={clsx("text-green-300", "cursor-pointer", "hover:opacity-80 duration-150 ease-in-out")}
            onClick={() => copyToClipboard(value)}
          >
            "{value}"
          </button>
          {isCopied && (
            <span className="text-emerald-700 ml-5">// copied!</span>
          )}
        </>
      ) : (
        <span className="text-green-300">"{value}"</span>
      )}
    </p>
  );
}
