import clsx from "clsx";

type HeadingProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className={clsx("font-bold text-3xl text-white capitalize", "mb-5")}>
      # {children}
    </h2>
  );
}
