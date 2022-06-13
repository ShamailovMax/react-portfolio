import FoodOrderApp from "../../assets/FoodOrderApp.jpg";
import Reader from "../../assets/Reader.jpg";
import Portfolio from "../../assets/PORTFOLIO.jpg";

export const projects = [
  {
    id: 1,
    imageURL: FoodOrderApp,
    title: "Приложение для оформления заказа еды",
    subtitle: "Стек: React + Google Firebase",
    projectURL: "https://github.com/ShamailovMax/react-burger-delivery-app",
    flipped: false,
  },
  {
    id: 2,
    imageURL: Reader,
    title: "Дипломный проект: Сервис по поиску и чтению книг",
    subtitle: "Стек: Python (Django) + SQLite3 + JavaScript",
    projectURL: "https://github.com/ShamailovMax/online-reader-server-django",
    flipped: true,
  },
  {
    id: 3,
    imageURL: Portfolio,
    title: "Сайт-портфолио",
    subtitle: "Технология: React",
    projectURL: "https://github.com/ShamailovMax/react-portfolio",
    flipped: false,
  },
];
