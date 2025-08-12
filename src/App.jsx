import { useState } from "react";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";
import './App.css';

function App() {
  const [category, setCategory] = useState("general")
  return (
    <>
    <NavBar setCategory={setCategory}></NavBar>
    <NewsBoard category={category}></NewsBoard>
    </>
  );
}

export default App;

