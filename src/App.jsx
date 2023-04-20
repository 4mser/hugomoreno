import "./index.css";
import styled from "styled-components";

import { useState } from "react";
import Bg from "./components/Bg";
import Header from "./components/Header";

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
    </div>
  );
}

export default App;
