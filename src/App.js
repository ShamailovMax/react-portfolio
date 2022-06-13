import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { About } from "./views/About/About";
import linearPreview from "./assets/Rectangle4.jpg";
import avatar from "./assets/ava-2.png";
import { Projects } from "./views/Projects/Projects";
import { ReadProgress } from "./components/ReadProgress/ReadProgress";

const headerLinks = [
  { url: "#about", title: "Кратко о себе" },
  { url: "#projects", title: "Проекты" },
  { url: "#contacts", title: "Связаться" },
];

function App() {
  return (
    <div className="App">
      <Header headerLinks={headerLinks} />
      <ReadProgress />
      <Hero imageURL={linearPreview} />
      <About avatarURL={avatar} />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
