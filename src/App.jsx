import "./index.css";

import { useState } from "react";
import Bg from "./components/Bg";
import Header from "./components/Header";
import SwiperCategories from "./components/SwiperCategories";

function App() {
  const [MenuOpen, setMenuOpen] = useState("open");

  const handleMenuChange = () => {
    if (MenuOpen === "closed") {
      setMenuOpen("open");
    } else {
      setMenuOpen("closed");
    }
  };

  const [tema, setTema] = useState("dark");

  const handleTemaChange = () => {
    if (tema === "dark") {
      setTema("light");
    } else {
      setTema("dark");
    }
  };

  return (
    <div className="App">
      <Bg tema={tema}></Bg>
      <Header
        handleTemaChange={handleTemaChange}
        tema={tema}
        handleMenuChange={handleMenuChange}
        MenuOpen={MenuOpen}
      ></Header>

      <SwiperCategories tema={tema}></SwiperCategories>
    </div>
  );
}

export default App;
