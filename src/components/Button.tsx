import clsx from "clsx";

type ButtonProps = Readonly<{
  children: React.ReactNode;
  onClick: () => void;
  [key: string]: unknown;
}>;

export default function Button({ children, onClick, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2",
        "bg-[#1e2d3d] text-green-300 rounded-md",
        "hover:bg-[#2f3e4f] transition-colors duration-200 ease-in-out",
        "cursor-pointer",
        "disabled:opacity-50 disabled:cursor-default disabled:hover:bg-[#1e2d3d]"
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
