import React from "react";
import "./App.scss";
import Reader from "./assets/Reader.jpg";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Slider } from "./components/Slider/Slider";
import FoodOrderApp from "./assets/FoodOrderApp.jpg";
import { Footer } from "./components/Footer/Footer";
import { About } from "./views/About/About";
import linearPreview from "./assets/Rectangle4.jpg";
import avatar from "./assets/avatar-tmp.jpg";

const headerLinks = [
  { url: "#about", title: "Кратко о себе" },
  { url: "#projects", title: "Проекты" },
  { url: "#contacts", title: "Связаться" },
];

function App() {
  return (
    <div className="App">
      <Header headerLinks={headerLinks} />
      <Hero imageURL={linearPreview} />
      <About avatarURL={avatar} />
      <Slider
        imageURL={FoodOrderApp}
        title={"Приложение для оформления заказа еды"}
        subtitle={"Стек: React + Google Firebase"}
        projectURL={"https://github.com/ShamailovMax/react-burger-delivery-app"}
      />
      <Slider
        imageURL={Reader}
        title={"Дипломный проект: Сервис по поиску и чтению книг"}
        subtitle={"Стек: Python (Django) + SQLite3 + JavaScript"}
        projectURL={
          "https://github.com/ShamailovMax/online-reader-server-django"
        }
        flipped={true}
      />
      <Footer />
    </div>
  );
}

export default App;
