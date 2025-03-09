import clsx from "clsx";
import {
  About,
  Header,
  Introduction,
  Projects,
  Skills,
  Footer,
  Contact_Education,
} from "./core";

export default function App() {
  return (
    <div className={clsx("w-full h-screen", "bg-[#021528]")}>
      <Header />
      <div className="w-full h-[calc(100%-4rem)] overflow-y-auto scroll-smooth">
        <div className="px-6 lg:px-12 max-w-5xl mx-auto">
          <main>
            <Introduction className="pt-20 mb-6 md:mb-12" />
            <Contact_Education className="pt-6 mb-6" />
            <About className="pt-6 mb-6 md:mb-16" />
            <Skills className="pt-6 mb-6 md:mb-20" />
            <Projects className="pt-6 mb-32" />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
