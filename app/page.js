import About from "./components/about";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen bg-dark-gray text-white relative">
      <NavBar />
      <div className="flex flex-col">
        <About />
        <Projects />
        <Testimonials />
      </div>
    </main>
  );
}
