import React from "react";
import "./App.css";
import { stackItems, projects } from "./utils/data.utils";
import Hero from "./components/hero.component";
import TeckStack from "./components/tech-stack.component";
import Projects from "./components/projects.component";
import Footer from "./components/footer.component";
import { Line } from "./components/btn.component";

function App() {
  return (
    <div className="bg-bg-body m-auto">
      <header className="App-header">
        <Hero />
      </header>
      <main>
        <TeckStack items={stackItems} />
        <Projects works={projects} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
