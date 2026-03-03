import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Showcase from "./sections/Showcase";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="font-body selection:bg-accent/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Introduction />
      <Showcase />
      <Contact />
    </main>
  );
}

export default App;