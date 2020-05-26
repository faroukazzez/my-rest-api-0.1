import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Mangas from "./components/Mangas";
import ModalComp from "./components/ModalManga";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mangas />
        <ModalComp editMode={false} />
      </header>
    </div>
  );
}

export default App;
