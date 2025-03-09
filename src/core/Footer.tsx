import clsx from "clsx";

export default function Footer() {
  return (
    <footer className={clsx("h-20", "border-t border-gray-800")}>
      <div
        className={clsx(
          "max-w-7xl mx-auto",
          "text-white text-right",
          "pt-7 pr-6"
        )}
      >
        <p>
          &copy; 2025 Portfolio by{" "}
          <span className="text-green-300">Ngo Cao Anh Thinh</span>
        </p>
      </div>
    </footer>
  );
}
